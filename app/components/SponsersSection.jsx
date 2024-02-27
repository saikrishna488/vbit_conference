import React from 'react';

const SponsorsSection = () => {
    return (
        <div className="bg-white py-12 px-4 md:px-12">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-center mb-8">Our Sponsors</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="flex justify-center items-center">
                        <img src="/ieee.png" alt="Sponsor 1" className="w-32 md:w-auto" />
                    </div>
                    <div className="flex justify-center items-center">
                        <img src="/cisco.png" alt="Sponsor 2" className="w-32 md:w-auto" />
                    </div>
                    <div className="flex justify-center items-center">
                        <img src="/aws.png" alt="Sponsor 3" className="w-32 md:w-auto" />
                    </div>
                    <div className="flex justify-center items-center">
                        <img src="/aictee.png" alt="Sponsor 4" className="w-32 md:w-auto" />
                    </div>
                    {/* Add more sponsors as needed */}
                </div>
            </div>
        </div>
    );
};

export default SponsorsSection;
