import React from 'react';

const DatesSection = () => {
  return (
    <div className="bg-gray-100 p-5 py-10 bg-white">
      <h2 className="text-xl font-bold mb-4">Important Dates</h2>
      <hr className="border-b-2 border-gray-300 mb-4" />
      <ul>
        <li className="mb-2">
          <span className="font-semibold">20th May 2024</span> - Paper Submission Last Date
        </li>
        <li className="mb-2">
          <span className="font-semibold">25th July 2024</span> - Acceptance Notification & Registrations
        </li>
        <li className="mb-2">
          <span className="font-semibold">26th July 2024</span> - Start of Registration with Final Paper Submission
        </li>
      </ul>
    </div>
  );
}

export default DatesSection;
