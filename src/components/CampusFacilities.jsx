import React from "react";

const facilities = [
  {
    name: "IGCSE & Cambridge",
    image:
      "https://res.cloudinary.com/demfgmwjk/image/upload/v1789983374/IGCSE_Cambridge_svtvhw.png",
  },
  {
    name: "3D Lab",
    image:
      "https://res.cloudinary.com/demfgmwjk/image/upload/v1789983373/3D_Labs_bcewmh.png",
  },
  {
    name: "Smart Classrooms",
    image:
      "https://res.cloudinary.com/demfgmwjk/image/upload/v1789983373/Smart_Classroom_e56dyt.png",
  },
  {
    name: "Multi-Purpose Hall",
    image:
      "https://res.cloudinary.com/demfgmwjk/image/upload/v1789983375/Multi_Purpose_hall_ha8chw.png",
  },
  {
    name: "ECA",
    image:
      "https://res.cloudinary.com/demfgmwjk/image/upload/v1789983374/ECA_skzn4o.png",
  },
  {
    name: "Ground",
    image:
      "https://res.cloudinary.com/demfgmwjk/image/upload/v1789983374/Ground_ynfx5s.png",
  },
  {
    name: "Science Labs",
    image:
      "https://res.cloudinary.com/demfgmwjk/image/upload/v1789983375/Science_Lab_qyduay.png",
  },
  {
    name: "Canteen",
    image:
      "https://res.cloudinary.com/demfgmwjk/image/upload/v1789983373/Canteen_rxp9mc.png",
  },
  {
    name: "School Transport",
    image:
      "https://res.cloudinary.com/demfgmwjk/image/upload/v1789983374/Transport_jlodiw.png",
  },
  {
    name: "Health Room",
    image:
      "https://res.cloudinary.com/demfgmwjk/image/upload/v1789983374/Health_Room_ylakds.png",
  },
  {
    name: "Music Room",
    image:
      "https://res.cloudinary.com/demfgmwjk/image/upload/v1789983375/Music_Room_esx3t7.png",
  },
  {
    name: "Computer Lab",
    image:
      "https://res.cloudinary.com/demfgmwjk/image/upload/v1789983373/Computer_gxzled.png",
  },
  {
    name: "Dance Studio",
    image:
      "https://res.cloudinary.com/demfgmwjk/image/upload/v1789983374/Dance_room_dfqqs5.png",
  },
  {
    name: "Library",
    image:
      "https://res.cloudinary.com/demfgmwjk/image/upload/v1789983374/library_dtzwjh.png",
  },
  {
    name: "Chess",
    image:
      "https://res.cloudinary.com/demfgmwjk/image/upload/v1789983373/chess_ileylh.png",
  },
  {
    name: "Pickleball",
    image:
      "https://res.cloudinary.com/demfgmwjk/image/upload/v1789983375/Pickleball_gfg1ia.png",
  },
  {
    name: "Cricket Nets",
    image:
      "https://res.cloudinary.com/demfgmwjk/image/upload/v1789983374/cricket_ftmfd5.png",
  },
];


/* =========================================
   ACADEMIC PROGRAMS DATA
========================================= */

const academicPrograms = [
  {
    name: "Kindergarten",
    image:
      "https://res.cloudinary.com/demfgmwjk/image/upload/v1789984221/Kindergarten_c3ezee.jpg",
    buttons: ["AM SESSION", "PM SESSION"],
  },
  {
    name: "Primary School",
    image:
      "https://res.cloudinary.com/demfgmwjk/image/upload/v1789984164/Primary_brqpqw.jpg",
    buttons: ["CAMBRIDGE", "ICSE"],
  },
  {
    name: "Middle School",
    image:
      "https://res.cloudinary.com/demfgmwjk/image/upload/v1789984164/Midlle_mgyvx5.jpg",
    buttons: ["CAMBRIDGE", "ICSE"],
  },
  {
    name: "Secondary School",
    image:
      "https://res.cloudinary.com/demfgmwjk/image/upload/v1789984164/Secondary_mazbyt.jpg",
    buttons: ["IGCSE", "ICSE"],
  },
  {
    name: "Sr Secondary School",
    image:
      "https://res.cloudinary.com/demfgmwjk/image/upload/v1789984164/Senior_Secondary_neu1bo.jpg",
    buttons: ["GCE AS & A LEVEL", "ISC"],
  },
];


export default function CampusFacilities() {
  return (
    <>
      {/* =========================================
          CAMPUS FACILITIES
      ========================================= */}

      <section className="campus-facilities">

        <div className="facilities-inner">

          <div className="facilities-heading">

            <span className="facilities-eyebrow">
              CAMPUS FACILITIES
            </span>

            <h2>World-Class Facilities</h2>

            <p>
              A safe, modern and inspiring campus designed for
              holistic development.
            </p>

          </div>


          {/* SCROLLER */}

          <div className="facilities-slider">

            <div className="facilities-track">

              {/* Original items */}

              {facilities.map((facility, index) => (
                <div
                  className="facility-item"
                  key={`original-${index}`}
                >

                  <div className="facility-icon">

                    <img
                      src={facility.image}
                      alt={facility.name}
                    />

                  </div>

                  <p>{facility.name}</p>

                </div>
              ))}


              {/* Duplicate items for seamless scrolling */}

              {facilities.map((facility, index) => (
                <div
                  className="facility-item"
                  key={`duplicate-${index}`}
                  aria-hidden="true"
                >

                  <div className="facility-icon">

                    <img
                      src={facility.image}
                      alt=""
                    />

                  </div>

                  <p>{facility.name}</p>

                </div>
              ))}

            </div>

          </div>

        </div>

      </section>


      {/* =========================================
          ACADEMIC PROGRAMS
      ========================================= */}

      <section className="academic-programs">

        <div className="academic-inner">

          <div className="academic-heading">

            <span className="academic-eyebrow">
              OUR ACADEMIC PROGRAMS
            </span>

            <h2>
              A Learning Journey for Every Stage
            </h2>

            <p>
              From early years to global pathways, we nurture
              curiosity, confidence and excellence.
            </p>

          </div>


          {/* ACADEMIC CARDS */}

          <div className="academic-grid">

            {academicPrograms.map((program) => (

              <div
                className="academic-card"
                key={program.name}
              >

                <div className="academic-image">

                  <img
                    src={program.image}
                    alt={program.name}
                  />

                </div>

                <div className="academic-content">

                  <h3>{program.name}</h3>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =========================================
          YOUR OLD DUPLICATE CODE
          KEPT AS COMMENT - NOT DELETED
      ========================================= */}

      {/*
      const academicPrograms = [
        {
          name: "Kindergarten",
          image:
            "https://res.cloudinary.com/demfgmwjk/image/upload/v1789984221/Kindergarten_c3ezee.jpg",
        },
        {
          name: "Primary School",
          image:
            "https://res.cloudinary.com/demfgmwjk/image/upload/v1789984164/Primary_brqpqw.jpg",
        },
        {
          name: "Middle School",
          image:
            "https://res.cloudinary.com/demfgmwjk/image/upload/v1789984164/Midlle_mgyvx5.jpg",
        },
        {
          name: "Secondary School",
          image:
            "https://res.cloudinary.com/demfgmwjk/image/upload/v1789984164/Secondary_mazbyt.jpg",
        },
        {
          name: "Sr Secondary School",
          image:
            "https://res.cloudinary.com/demfgmwjk/image/upload/v1789984164/Senior_Secondary_neu1bo.jpg",
        },
      ];
      */}

    </>
  );
}