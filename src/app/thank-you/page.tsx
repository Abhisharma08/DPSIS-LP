"use client";

import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ThankYouPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#eef3f7] to-white">
      <Header />

      <section className="min-h-[calc(100svh-73px)] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16">
        <div
          className="text-center max-w-2xl"
        >
          <div className="flex justify-center mb-6">
            <Image
              src="https://cdn.lugc.link/ba71d94d-c3cf-44c7-9764-294540f5cc26/-/preview/108x76/-/format/auto/"
              alt="School Logo"
              width={90}
              height={90}
              className="object-contain"
            />
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            <span className="text-red-500">Thank You</span>{" "}
            <span className="text-yellow-500">for Your</span>
            <br />
            <span className="text-yellow-500">Interest!</span>
          </h1>

          <p className="mt-6 text-gray-600 text-base leading-relaxed">
            We are excited about the opportunity to welcome your child to our
            school community.
          </p>

          <p className="mt-4 text-gray-600 text-base leading-relaxed">
            Our admissions team will review your submission and get in touch
            with you shortly to provide further information and answer any
            questions you may have.
          </p>

          <div className="mt-8">
            <button
              onClick={() => (window.location.href = "/")}
              className="bg-[#1e3a8a] hover:bg-[#1e3a8a]/90 text-white px-6 py-3 rounded-lg font-semibold transition"
            >
              Back to Home
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
