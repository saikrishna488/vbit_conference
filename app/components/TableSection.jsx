import React from 'react';

const TableSection = () => {
  return (
    <div className='flex justify-center '>
      <div className="overflow-x-auto mb-4 mt-4">
        <table className="table-auto bg-[#111042] text-white">
          <thead>
            <tr>
              <th className="border px-4 py-2">Category</th>
              <th className="border px-4 py-2" colSpan="2">Indian authors and delegates</th>
              <th className="border px-4 py-2" colSpan="2">Foreign authors and delegates</th>
            </tr>
            <tr>
              <th className="border px-4 py-2">*Registration fee includes GST</th>
              <th className="border px-4 py-2">Standard Rates</th>
              <th className="border px-4 py-2">Early Bird Rates</th>
              <th className="border px-4 py-2">Standard Rates</th>
              <th className="border px-4 py-2">Early Bird Rates</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2">Industry Professionals</td>
              <td className="border px-4 py-2">Rs. 12000</td>
              <td className="border px-4 py-2">Rs. 10000</td>
              <td className="border px-4 py-2">300$</td>
              <td className="border px-4 py-2">250$</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Faculty / Academicians</td>
              <td className="border px-4 py-2">Rs. 10000</td>
              <td className="border px-4 py-2">Rs. 9000</td>
              <td className="border px-4 py-2">250$</td>
              <td className="border px-4 py-2">200$</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Faculty / Academicians (IEEE Members)</td>
              <td className="border px-4 py-2">Rs. 8000</td>
              <td className="border px-4 py-2">Rs. 7000</td>
              <td className="border px-4 py-2">225$</td>
              <td className="border px-4 py-2">175$</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Research Scholars, UG and PG Students</td>
              <td className="border px-4 py-2">Rs. 7000</td>
              <td className="border px-4 py-2">Rs. 6000</td>
              <td className="border px-4 py-2">200$</td>
              <td className="border px-4 py-2">150$</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Research Scholars, UG and PG Students (IEEE Members)</td>
              <td className="border px-4 py-2">Rs. 6000</td>
              <td className="border px-4 py-2">Rs. 5000</td>
              <td className="border px-4 py-2">175$</td>
              <td className="border px-4 py-2">125$</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">VBIT (internal)</td>
              <td className="border px-4 py-2">Rs. 5000</td>
              <td className="border px-4 py-2">Rs. 4000</td>
              <td className="border px-4 py-2">--</td>
              <td className="border px-4 py-2">--</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Co-Authors / Participants (non-authors)</td>
              <td className="border px-4 py-2">Rs. 5000</td>
              <td className="border px-4 py-2">Rs. 4000</td>
              <td className="border px-4 py-2">100$</td>
              <td className="border px-4 py-2">50$</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

  );
}

export default TableSection;
