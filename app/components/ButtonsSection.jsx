import React from 'react';

const ButtonSection = () => {
    return (
        <div className="bg-white py-8 px-4 md:px-12">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <button className="bg-green-700 text-white py-3 px-6 md:py-4 md:px-8 rounded-lg hover:bg-green-600 transition duration-300 w-full">Paper Submission</button>
                <button className="bg-green-700 text-white py-3 px-6 md:py-4 md:px-8 rounded-lg hover:bg-green-600 transition duration-300 w-full">Registration For Indian Authors/Participants</button>
                <button className="bg-green-700 text-white py-3 px-6 md:py-4 md:px-8 rounded-lg hover:bg-green-600 transition duration-300 w-full">Registration For Foreign Authors/Participants</button>
                <button className="bg-green-700 text-white py-3 px-6 md:py-4 md:px-8 rounded-lg hover:bg-green-600 transition duration-300 w-full">Hotels</button>
                <button className="bg-green-700 text-white py-3 px-6 md:py-4 md:px-8 rounded-lg hover:bg-green-600 transition duration-300 w-full">Accommodation Brochure</button>
                <button className="bg-green-700 text-white py-3 px-6 md:py-4 md:px-8 rounded-lg hover:bg-green-600 transition duration-300 w-full">IEEE IC-ACIST'24 Final Paper Template</button>
                <button className="bg-green-700 text-white py-3 px-6 md:py-4 md:px-8 rounded-lg hover:bg-green-600 transition duration-300 w-full">Speakers</button>
                <button className="bg-green-700 text-white py-3 px-6 md:py-4 md:px-8 rounded-lg hover:bg-green-600 transition duration-300 w-full">Guidelines For IEEE PDF eXpress</button>
            </div>
        </div>
    );
};

export default ButtonSection;
