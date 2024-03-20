"use client";
import React from 'react';
import { useRouter } from 'next/navigation';

const HeroSection = () => {

    const router = useRouter();
    
    return (
        <div className="relative bg-cover bg-center text-black bg-white py-20 px-6 md:px-12" >
            {/* Overlay for text */}
            <div className="absolute inset-0 opacity-50"></div>
            
            <div className="container mx-auto relative z-10 flex flex-col lg:flex-row items-center">
                <div className="lg:w-1/2 mb-6 lg:mb-0">
                    <h1 className="text-4xl lg:text-5xl font-bold mb-4">Welcome to VBIT International Conference</h1>
                    <p className="text-lg mb-4">International Conference on Advances in Computing and Innovation in Science and Technology(IC-ACIST'24)</p>
                    <p className="text-lg mb-8">Technically co-sponsored by Springer</p>
                    <p className="text-lg mb-8">July 25-26, 2024 at VBIT Hyderabad, Telangana ,India</p>
                    <div className="flex flex-col md:flex-row md:space-x-4">
                        <button className="bg-white text-purple-800 px-6 py-3 rounded-full hover:bg-purple-300 hover:text-white transition duration-300 mb-2 md:mb-0" ><a href='/brochure.pdf' target="_blank">Download Brochure</a> </button>
                        <button className="bg-white text-purple-800 px-6 py-3 rounded-full hover:bg-purple-300 hover:text-white transition duration-300 mb-2 md:mb-0" onClick={()=> router.push('/guidelines')}>Presentation Guidelines</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
