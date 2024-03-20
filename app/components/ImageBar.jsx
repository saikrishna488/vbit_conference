import React from 'react';

const ImageBar = () => {
  return (
    <div className="flex justify-center items-center overflow-x-auto bg-white">
      <img src="/vbit2.png" alt="Image 2" className="h-6 sm:pb-4 sm:h-6 md:h-24 lg:h-28 xl:h-32 bg-black ml-4" />
      <img src="/ugc.png" alt="Image 3" className="h-6 sm:pb-4 sm:h-6 md:h-24 lg:h-28 xl:h-32 ml-4" />
      <img src="/nba.webp" alt="Image 4" className="h-6 sm:pb-4 sm:h-6 md:h-24 lg:h-28 xl:h-32 ml-4" />
      <img src="/naac.jpeg" alt="Image 5" className="h-6 sm:pb-4 sm:h-6 md:h-24 lg:h-28 xl:h-32 ml-4" />
      <img src="/springer.jpg" alt="Image 6" className="h-6 sm:pb-4 sm:h-6 md:h-24 lg:h-28 xl:h-32 ml-4" />
    </div>
  );
};

export default ImageBar;
