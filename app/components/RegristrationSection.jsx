import React from 'react';

const RegistrationSection = () => {
  return (
    <div className="relative bg-cover bg-center h-100" style={{backgroundImage: "url('vbit_bg.jpeg')"}}>
      <div className="absolute inset-0 bg-purple-800 opacity-50"></div>
      <div className="relative z-10 flex flex-col items-start h-full p-4 md:p-16 text-white w-full md:w-3/4">
        <h1 className="text-xl md:text-4xl font-bold mb-4">Registration Guidelines for IC-ACIST'24</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 w-full md:w-3/4 gap-4 mb-8">
          <a href="#" className="bg-white text-purple-800 font-semibold py-2 px-4 rounded mb-4">Click here Register For Indian Authors/Participants</a>
          <a href="#" className="bg-white text-purple-800 font-semibold py-2 px-4 rounded mb-4">Click here Register For Foreign Authors/Participants</a>
        </div>
        <p className="text-xs md:text-base w-full md:w-3/4 text-red-500 bg-black p-4 rounded">In adherence to IEEE publication guidelines, only papers presented at the conference will be considered for recommendation to IEEE Xplore. Authors must accurately choose the registration category and make the corresponding payment. Any deviation found will result in the removal of their papers from the conference, and registration fees will not be refunded.</p>
      </div>
    </div>
  );
}

export default RegistrationSection;
