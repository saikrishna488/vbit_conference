import React from 'react';
import GoogleMap from './GoogleMap';

const Footer = () => {
    return (
        <div className="bg-footer py-8 px-4 md:px-12 text-white">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
                {/* Left Section */}
                <div className="mb-4 md:mb-0">
                    {/* <img src="/vbit.png" alt="Footer Logo" className="w-24" /> */}
                    <GoogleMap/>
                </div>

                {/* Middle Section */}
                <div className="text-center md:text-left">
                    <h3 className="font-bold mb-2">Address</h3>
                    <p>Vignana Bharathi Institute of Technology</p>
                    <p className="mb-4">Aushapur, Ghatkesar, near HPCL, Hyderabad, Telangana 501301 ,India</p>
                    
                </div>

                {/* Right Section */}
                <div className="text-right">
                    <ul>
                        <li className="mb-2"><a href="#" className="underline">Download Conference Brochure</a></li>
                        <li className="mb-2"><a href="#" className="underline">Download Sponsorship Brochure</a></li>
                        <li><a href="#" className="underline">Download NOC, MHA India</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Footer;
