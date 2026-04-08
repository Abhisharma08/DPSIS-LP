"use client";

import type { ChangeEvent, FormEvent } from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { ShieldCheck } from "lucide-react";

export default function EnquiryForm() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [hubspotContactId, setHubspotContactId] = useState("");

  const [formData, setFormData] = useState({
    fullName: "",
    childName: "",
    email: "",
    phone: "",
    campus: "",
    grade: "",
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setErrorMessage("");
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSelectChange = (id: string, value: string) => {
    setErrorMessage("");
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const parseResponse = async (res: Response): Promise<Record<string, any>> => {
    const text = await res.text();

    if (!text) {
      return {};
    }

    try {
      return JSON.parse(text);
    } catch {
      return { error: text };
    }
  };

  const saveLeadStep = async (leadStep: number) => {
    const normalizedPhone = formData.phone.replace(/\D/g, "");

    const res = await fetch("/api/hubspot", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contactId: hubspotContactId || undefined,
        step: leadStep,
        name: formData.fullName,
        childName: formData.childName,
        email: formData.email,
        phone: normalizedPhone,
        campus: formData.campus,
        grade: formData.grade,
      }),
    });

    const data = await parseResponse(res);

    if (!res.ok) {
      return {
        ok: false,
        error: data.error || "Unable to save your enquiry.",
      };
    }

    if (data.contactId) {
      setHubspotContactId(data.contactId);
    }

    return { ok: true, data };
  };

  const handleSend = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    try {
      if (step === 1) {
        const result = await saveLeadStep(1);

        if (!result.ok) {
          setErrorMessage(result.error);
          return;
        }

        setStep(2);
        return;
      }

      const result = await saveLeadStep(2);

      if (!result.ok) {
        setErrorMessage(result.error);
        return;
      }

      router.push("/thank-you");
    } catch (error) {
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Unable to save your enquiry. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="w-full bg-transparent text-foreground shadow-none border-none overflow-hidden rounded-2xl mx-auto backdrop-blur-md">
      {/* Top Accent Line - DPS Blue/Yellow theme */}
      <div className="h-1.5 bg-gradient-to-r from-[#1e3a8a] to-[#facc15] w-full" />

      <CardHeader className="space-y-1 p-6 sm:p-7 lg:p-6 pb-3">
        <CardTitle className="text-xl sm:text-2xl lg:text-xl font-bold text-[#1e3a8a] tracking-tight">
          Enquire Now
        </CardTitle>
        <CardDescription className="text-slate-400 text-[11px] font-medium uppercase tracking-wider">
          Please fill in the details below.
        </CardDescription>
      </CardHeader>

      <CardContent className="p-6 sm:p-7 lg:p-6 pt-3">
        {submitted ? (
          <div className="flex flex-col items-center justify-center text-center space-y-4 py-8">
            <h2 className="text-xl font-bold text-[#1e3a8a]">🎉 Thank You!</h2>
            <p className="text-slate-500 text-sm">
              Your enquiry has been submitted successfully.
            </p>
            <Button
              onClick={() => {
                setSubmitted(false);
                setStep(1);
              }}
              className="bg-[#1e3a8a] hover:bg-[#1e3a8a]/90 text-white rounded-lg px-8"
            >
              Submit Another
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSend} className="space-y-3.5">
            {/* STEP 1 */}
            {step === 1 && (
              <div className="grid grid-cols-1 gap-3.5">
                <div className="space-y-1">
                  <Label className="text-[10px] uppercase tracking-[0.12em] font-bold text-slate-400 ml-1">
                    Parent Name
                  </Label>
                  <Input
                    id="fullName"
                    placeholder="Your Name"
                    required
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="h-10 sm:h-11 lg:h-10 bg-slate-50/50 border-slate-200 focus:border-[#facc15] focus:ring-0 rounded-lg text-sm transition-all"
                  />
                </div>

                <div className="space-y-1">
                  <Label className="text-[10px] uppercase tracking-[0.12em] font-bold text-slate-400 ml-1">
                    Child Name
                  </Label>
                  <Input
                    id="childName"
                    placeholder="Full name of student"
                    required
                    value={formData.childName}
                    onChange={handleInputChange}
                    className="h-10 sm:h-11 lg:h-10 bg-slate-50/50 border-slate-200 focus:border-[#facc15] focus:ring-0 rounded-lg text-sm transition-all"
                  />
                </div>

                <div className="space-y-1">
                  <Label className="text-[10px] uppercase tracking-[0.12em] font-bold text-slate-400 ml-1">
                    Phone Number
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="10 digit phone number"
                    inputMode="numeric"
                    pattern="[0-9]{10}"
                    maxLength={10}
                    title="Enter a 10 digit phone number"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="h-10 sm:h-11 lg:h-10 bg-slate-50/50 border-slate-200 focus:border-[#facc15] focus:ring-0 rounded-lg text-sm transition-all"
                  />
                </div>

                <div className="space-y-1">
                  <Label className="text-[10px] uppercase tracking-[0.12em] font-bold text-slate-400 ml-1">
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="email@example.com"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="h-10 sm:h-11 lg:h-10 bg-slate-50/50 border-slate-200 focus:border-[#facc15] focus:ring-0 rounded-lg text-sm transition-all"
                  />
                </div>
              </div>
            )}

            {/* STEP 2 */}
            {step === 2 && (
              <div className="grid grid-cols-1 gap-3.5">
                <div className="space-y-1">
                   <Label className="text-[10px] uppercase tracking-[0.12em] font-bold text-slate-400 ml-1">Campus</Label>
                  <Select required value={formData.campus} onValueChange={(v) => handleSelectChange("campus", v)}>
                    <SelectTrigger className="h-10 sm:h-11 lg:h-10 bg-slate-50/50 border-slate-200 rounded-lg text-sm">
                      <SelectValue placeholder="Select Campus" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Kovan Campus">Kovan Campus</SelectItem>
                      <SelectItem value="Alexandra Campus">Alexandra Campus</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-1">
                  <Label className="text-[10px] uppercase tracking-[0.12em] font-bold text-slate-400 ml-1">Grade</Label>
                  <Input
                    id="grade"
                    placeholder="Enter grade"
                    required
                    value={formData.grade}
                    onChange={handleInputChange}
                    className="h-10 sm:h-11 lg:h-10 bg-slate-50/50 border-slate-200 focus:border-[#facc15] focus:ring-0 rounded-lg text-sm transition-all"
                  />
                </div>
              </div>
            )}

            <div className="pt-2 transition-transform active:scale-[0.99] hover:scale-[1.01]">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#facc15] hover:bg-[#eab308] text-[#1e3a8a] font-black h-11 sm:h-12 lg:h-10 text-sm sm:text-base lg:text-sm rounded-lg shadow-sm transition-all"
              >
                {isSubmitting
                  ? "Saving..."
                  : step === 1
                    ? "Next Step"
                    : "Submit Enquiry"}
              </Button>
            </div>

            {errorMessage && (
              <p className="text-xs font-medium text-red-600 text-center">
                {errorMessage}
              </p>
            )}

            {step === 2 && (
              <Button
                type="button"
                variant="ghost"
                disabled={isSubmitting}
                onClick={() => setStep(1)}
                className="w-full h-8 text-xs text-slate-400 hover:bg-transparent hover:text-slate-600 font-bold"
              >
                ← Back to Previous
              </Button>
            )}

            <div className="flex items-center justify-center space-x-2 pt-2 border-t border-slate-50">
              <ShieldCheck className="w-3 h-3 text-emerald-500" />
              <span className="text-[9px] text-slate-400 uppercase tracking-widest font-bold">Secure Transmission</span>
            </div>
          </form>
        )}
      </CardContent>
    </Card>
  );
}
