import React from 'react';

const HighlightsSection = () => {
    return (
        <div className="bg-gray-100 py-8 px-4 md:px-12">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-center">
                <div className="md:w-1/2 md:mr-6">
                    <h2 className="text-3xl font-bold text-orange-500 mb-4">Highlights of IC-ACIST'24</h2>
                    <ul className="list-disc">
                        <li>All the presented papers were published in the Springer.</li>
                        
                    </ul>
                </div>
                <div className="md:w-1/2 flex justify-center">
                    <img src="vbit_bg.jpeg" alt="Highlights Image" className="w-full md:max-w-md rounded-lg shadow-md" />
                </div>
            </div>
        </div>
    );
};

export default HighlightsSection;
