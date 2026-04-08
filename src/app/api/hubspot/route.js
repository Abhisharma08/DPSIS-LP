const HUBSPOT_BASE_URL = "https://api.hubapi.com";

const propertyNames = {
  childName: process.env.HUBSPOT_CHILD_NAME_PROPERTY,
  campus: process.env.HUBSPOT_CAMPUS_PROPERTY,
  grade: process.env.HUBSPOT_GRADE_PROPERTY,
  formStep: process.env.HUBSPOT_FORM_STEP_PROPERTY,
};

function parseJsonOrText(text) {
  if (!text) {
    return {};
  }

  try {
    return JSON.parse(text);
  } catch {
    return { message: text };
  }
}

async function hubspotFetch(path, options = {}) {
  const res = await fetch(`${HUBSPOT_BASE_URL}${path}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.HUBSPOT_TOKEN}`,
      ...options.headers,
    },
  });

  const text = await res.text();
  const data = parseJsonOrText(text);

  if (!res.ok) {
    const message = data.message || `HubSpot request failed with ${res.status}`;
    const error = new Error(
      message === "Internal Server Error"
        ? "HubSpot returned an internal server error. Please try again."
        : message
    );

    error.status = res.status;
    throw error;
  }

  return data;
}

async function findContactIdByEmail(email) {
  const data = await hubspotFetch("/crm/v3/objects/contacts/search", {
    method: "POST",
    body: JSON.stringify({
      filterGroups: [
        {
          filters: [
            {
              propertyName: "email",
              operator: "EQ",
              value: email,
            },
          ],
        },
      ],
      properties: ["email"],
      limit: 1,
    }),
  });

  return data.results?.[0]?.id;
}

function cleanProperties(properties) {
  return Object.fromEntries(
    Object.entries(properties).filter(
      ([, value]) => value !== undefined && value !== null && value !== ""
    )
  );
}

function addOptionalProperty(properties, propertyName, value) {
  if (propertyName) {
    properties[propertyName] = value;
  }
}

function buildContactProperties(body) {
  const properties = {
    email: body.email,
    firstname: body.name,
    phone: body.phone,
  };

  addOptionalProperty(properties, propertyNames.childName, body.childName);
  addOptionalProperty(properties, propertyNames.campus, body.campus);
  addOptionalProperty(properties, propertyNames.grade, body.grade);
  addOptionalProperty(properties, propertyNames.formStep, body.step);

  return cleanProperties(properties);
}

export async function POST(req) {
  try {
    if (!process.env.HUBSPOT_TOKEN) {
      return Response.json(
        { error: "Missing HUBSPOT_TOKEN environment variable" },
        { status: 500 }
      );
    }

    const body = await req.json();

    if (!body.email) {
      return Response.json({ error: "Email is required" }, { status: 400 });
    }

    const properties = buildContactProperties(body);
    const contactId = body.contactId || (await findContactIdByEmail(body.email));

    const data = contactId
      ? await hubspotFetch(`/crm/v3/objects/contacts/${contactId}`, {
          method: "PATCH",
          body: JSON.stringify({ properties }),
        })
      : await hubspotFetch("/crm/v3/objects/contacts", {
          method: "POST",
          body: JSON.stringify({ properties }),
        });

    return Response.json({ contactId: data.id, data });
  } catch (error) {
    console.error(error);
    return Response.json(
      { error: error.message || "Error saving lead" },
      { status: error.status || 500 }
    );
  }
}
