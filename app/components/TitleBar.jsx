import React from 'react';

const TitleBar = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center bg-white sm:pt-5 pt-5 lg:">
      <div className="lg:w-3/4 lg:mr-4">
        <p className="text-lg lg:text-xl font-medium text-center">
          International Conference on Intelligent Computing and Communication ICICC-2024<br />
          <span className='text-orange-500'>25th & 26st July 2024</span><br />
          Organized by: Department of Computer Science and Engineering
        </p>
      </div>
      <div className="lg:w-1/4 lg:mt-0">
        <img src="springer.jpg" alt="Conference Logo" className="h-20 sm:h-10 md:w-full lg:w-32 lg:h-24" />
      </div>
    </div>
  );
}

export default TitleBar;
