import React from 'react';

const HighlightsSection = () => {
    return (
        <div className="bg-gray-100 py-8 px-4 md:px-12">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-center">
                <div className="md:w-1/2 md:mr-6">
                    <h2 className="text-3xl font-bold text-orange-500 mb-4">Highlights of ic-ETITE’20</h2>
                    <ul className="list-disc">
                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                        <li>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
                        <li>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                        <li>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</li>
                        <li>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</li>
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
