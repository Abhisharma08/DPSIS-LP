"use client";

export function AgeGradeTable() {
  return (
    <div className="bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden w-full max-w-sm">

      {/* Header */}
      <div className="bg-[#F2B705] text-black font-bold text-sm px-4 py-2.5 text-center border-b border-gray-300">
        Age vs Grade Eligibility
      </div>

      {/* Table */}
      <table className="w-full text-xs sm:text-sm">
        <thead>
          <tr className="bg-[#F2B705] text-black font-semibold">
            <th className="py-2 px-3 border border-gray-300 text-left">
              Age as on 1st April
            </th>
            <th className="py-2 px-3 border border-gray-300 text-left">
              Fit for Grade
            </th>
          </tr>
        </thead>

        <tbody className="text-gray-700">
          <tr>
            <td className="border px-3 py-2">2 Years</td>
            <td className="border px-3 py-2">Nursery</td>
          </tr>

          <tr>
            <td className="border px-3 py-2">3 Years</td>
            <td className="border px-3 py-2">Kindergarten 1</td>
          </tr>

          <tr>
            <td className="border px-3 py-2">4 Years</td>
            <td className="border px-3 py-2">Kindergarten 2</td>
          </tr>

          <tr>
            <td className="border px-3 py-2">5 Years</td>
            <td className="border px-3 py-2">Grade 1</td>
          </tr>

          <tr>
            <td className="border px-3 py-2">6 Years</td>
            <td className="border px-3 py-2">Grade 2</td>
          </tr>

          {/* Footer Row */}
          <tr>
            <td
              colSpan={2}
              className="border px-3 py-2 text-xs text-gray-600 bg-gray-50"
            >
              The same criterion will be applicable for further Grades.
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
