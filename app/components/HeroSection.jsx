import React from 'react';

const HeroSection = () => {
    return (
        <div className="relative bg-cover bg-center bg-gradient-to-r from-purple-800 to-purple-600 text-white py-20 px-6 md:px-12" style={{backgroundImage: `url("/vbit_bg.jpeg")`}}>
            {/* Overlay for text */}
            <div className="absolute inset-0 bg-blue-900 opacity-50"></div>
            
            <div className="container mx-auto relative z-10 flex flex-col lg:flex-row items-center">
                <div className="lg:w-1/2 mb-6 lg:mb-0">
                    <h1 className="text-4xl lg:text-5xl font-bold mb-4">Welcome to VBIT Conference</h1>
                    <p className="text-lg mb-4">Second International Conference on Emerging Trends in Information Technology and Engineering (ic-ETITE'24)</p>
                    <p className="text-lg mb-8">Technically co-sponsored by *** Section</p>
                    <p className="text-lg mb-8">February 22-23, 2024 at Vbit hyderabad, India</p>
                    <div className="flex flex-col md:flex-row md:space-x-4">
                        <button className="bg-white text-purple-800 px-6 py-3 rounded-full hover:bg-purple-300 hover:text-white transition duration-300 mb-2 md:mb-0">Download Brochure</button>
                        <button className="bg-white text-purple-800 px-6 py-3 rounded-full hover:bg-purple-300 hover:text-white transition duration-300 mb-2 md:mb-0">Book a Stall</button>
                        <button className="bg-white text-purple-800 px-6 py-3 rounded-full hover:bg-purple-300 hover:text-white transition duration-300 mb-2 md:mb-0">Presentation Guidelines</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;