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
    <Card className="w-full bg-white text-slate-900 border border-slate-200/80 shadow-2xl rounded-[24px] overflow-hidden mx-auto">
      {/* Top Accent Line - DPS Navy/Blue/Gold theme */}
      <div className="h-2 bg-gradient-to-r from-[#0A2540] via-[#2563EB] to-[#F59E0B] w-full" />

      <CardHeader className="space-y-1 p-6 sm:p-8 lg:p-6 pb-2">
        <CardTitle className="text-xl sm:text-2xl lg:text-xl font-black text-[#0A2540] tracking-tight">
          Enquire Now
        </CardTitle>
        <CardDescription className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">
          Please fill in the details below.
        </CardDescription>
      </CardHeader>

      <CardContent className="p-6 sm:p-8 lg:p-6 pt-2">
        {submitted ? (
          <div className="flex flex-col items-center justify-center text-center space-y-4 py-8">
            <h2 className="text-xl font-bold text-[#0A2540]">🎉 Thank You!</h2>
            <p className="text-slate-500 text-sm leading-relaxed">
              Your enquiry has been submitted successfully.
            </p>
            <Button
              onClick={() => {
                setSubmitted(false);
                setStep(1);
              }}
              className="bg-[#0A2540] hover:bg-[#102a43] text-white rounded-xl px-8 h-11 transition-all"
            >
              Submit Another
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSend} className="space-y-4">
            {/* STEP 1 */}
            {step === 1 && (
              <div className="grid grid-cols-1 gap-4">
                <div className="space-y-1">
                  <Label className="text-[10px] uppercase tracking-wider font-bold text-slate-500 ml-1 block">
                    Parent Name
                  </Label>
                  <Input
                    id="fullName"
                    placeholder="Your Name"
                    required
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="h-11 px-4 bg-slate-50 border border-slate-200 focus:bg-white focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] rounded-xl text-sm transition-all"
                  />
                </div>

                <div className="space-y-1">
                  <Label className="text-[10px] uppercase tracking-wider font-bold text-slate-500 ml-1 block">
                    Child Name
                  </Label>
                  <Input
                    id="childName"
                    placeholder="Full name of student"
                    required
                    value={formData.childName}
                    onChange={handleInputChange}
                    className="h-11 px-4 bg-slate-50 border border-slate-200 focus:bg-white focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] rounded-xl text-sm transition-all"
                  />
                </div>

                <div className="space-y-1">
                  <Label className="text-[10px] uppercase tracking-wider font-bold text-slate-500 ml-1 block">
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
                    className="h-11 px-4 bg-slate-50 border border-slate-200 focus:bg-white focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] rounded-xl text-sm transition-all"
                  />
                </div>

                <div className="space-y-1">
                  <Label className="text-[10px] uppercase tracking-wider font-bold text-slate-500 ml-1 block">
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="email@example.com"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="h-11 px-4 bg-slate-50 border border-slate-200 focus:bg-white focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] rounded-xl text-sm transition-all"
                  />
                </div>
              </div>
            )}

            {/* STEP 2 */}
            {step === 2 && (
              <div className="grid grid-cols-1 gap-4">
                <div className="space-y-1">
                  <Label className="text-[10px] uppercase tracking-wider font-bold text-slate-500 ml-1 block">Campus</Label>
                  <Select required value={formData.campus} onValueChange={(v) => handleSelectChange("campus", v)}>
                    <SelectTrigger className="h-11 bg-slate-50 border-slate-200 focus:bg-white focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] rounded-xl text-sm w-full text-slate-700">
                      <SelectValue placeholder="Select Campus" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Kovan Campus">Kovan Campus</SelectItem>
                      <SelectItem value="Alexandra Campus">Alexandra Campus</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-1">
                  <Label className="text-[10px] uppercase tracking-wider font-bold text-slate-500 ml-1 block">Grade</Label>
                  <Input
                    id="grade"
                    placeholder="Enter grade"
                    required
                    value={formData.grade}
                    onChange={handleInputChange}
                    className="h-11 px-4 bg-slate-50 border border-slate-200 focus:bg-white focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] rounded-xl text-sm transition-all"
                  />
                </div>
              </div>
            )}

            <div className="pt-2">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#F59E0B] hover:bg-[#e08e0a] text-[#0A2540] font-black h-12 text-sm sm:text-base rounded-xl shadow-lg shadow-amber-500/10 hover:shadow-xl hover:-translate-y-[1px] transition-all duration-200"
              >
                {isSubmitting
                  ? "Saving..."
                  : step === 1
                    ? "Next Step"
                    : "Submit Enquiry"}
              </Button>
            </div>

            {errorMessage && (
              <p className="text-xs font-semibold text-red-600 text-center">
                {errorMessage}
              </p>
            )}

            {step === 2 && (
              <Button
                type="button"
                variant="ghost"
                disabled={isSubmitting}
                onClick={() => setStep(1)}
                className="w-full h-9 text-xs text-slate-400 hover:bg-transparent hover:text-[#2563EB] font-bold transition-colors"
              >
                ← Back to Previous
              </Button>
            )}

            <div className="flex items-center justify-center space-x-2 pt-3 border-t border-slate-100">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
              <span className="text-[9px] text-slate-400 uppercase tracking-widest font-extrabold">Secure Transmission</span>
            </div>
          </form>
        )}
      </CardContent>
    </Card>
  );
}
