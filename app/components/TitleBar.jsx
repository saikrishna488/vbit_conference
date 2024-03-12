import React from 'react';

const TitleBar = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center bg-white">
      <div className="lg:w-3/4 lg:mr-4">
        <p className="text-lg lg:text-xl font-medium text-center">
          7th International Conference on Intelligent Computing and Communication ICICC-2024<br />
          <span className='text-orange-500'>30th & 31st August 2024</span><br />
          Organized by: Department of Computer Science and Engineering
        </p>
      </div>
      <div className="lg:w-1/4 lg:mt-0">
        <img src="springer.jpg" alt="Conference Logo" className="w-full" />
      </div>
    </div>
  );
}

export default TitleBar;
