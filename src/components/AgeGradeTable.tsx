"use client";

export function AgeGradeTable() {
  return (
    <div className="w-full bg-white border border-slate-200/80 rounded-[24px] shadow-xl overflow-hidden transition-all duration-300 hover:border-slate-300/85 hover:shadow-2xl">
      {/* Header */}
      <div className="bg-[#0A2540] text-white font-black text-xs sm:text-sm px-6 py-4 text-center tracking-wider uppercase font-headline">
        Age vs Grade Eligibility
      </div>

      {/* Table */}
      <table className="w-full text-xs sm:text-sm text-slate-700 font-body">
        <thead>
          <tr className="bg-slate-50 text-[#0A2540] font-bold text-xs uppercase tracking-wider border-b border-slate-200/60">
            <th className="py-3 px-5 text-left font-semibold">
              Age as on 1st April
            </th>
            <th className="py-3 px-5 text-left font-semibold">
              Fit for Grade
            </th>
          </tr>
        </thead>

        <tbody className="divide-y divide-slate-100 font-medium">
          <tr className="hover:bg-slate-50/50 transition-colors">
            <td className="px-5 py-3 text-slate-800">2 Years</td>
            <td className="px-5 py-3 text-[#2563EB] font-bold">Nursery</td>
          </tr>

          <tr className="hover:bg-slate-50/50 transition-colors">
            <td className="px-5 py-3 text-slate-800">3 Years</td>
            <td className="px-5 py-3 text-[#2563EB] font-bold">Kindergarten 1</td>
          </tr>

          <tr className="hover:bg-slate-50/50 transition-colors">
            <td className="px-5 py-3 text-slate-800">4 Years</td>
            <td className="px-5 py-3 text-[#2563EB] font-bold">Kindergarten 2</td>
          </tr>

          <tr className="hover:bg-slate-50/50 transition-colors">
            <td className="px-5 py-3 text-slate-800">5 Years</td>
            <td className="px-5 py-3 text-[#2563EB] font-bold">Grade 1</td>
          </tr>

          <tr className="hover:bg-slate-50/50 transition-colors">
            <td className="px-5 py-3 text-slate-800">6 Years</td>
            <td className="px-5 py-3 text-[#2563EB] font-bold">Grade 2</td>
          </tr>

          {/* Footer Row */}
          <tr>
            <td
              colSpan={2}
              className="px-5 py-3.5 text-xs text-slate-500 bg-slate-50/80 italic font-normal"
            >
              The same criterion will be applicable for further Grades.
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
