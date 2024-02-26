"use client"
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    return (
        <nav className="bg-#11103D flex justify-between items-center py-4 px-6 lg:px-12" style={{ maxWidth: "100%" }}>
            <img src="vbit2.png" alt="Navbar Logo" className="h-16 lg:mr-4 hidden lg:block" />
            <div className="lg:flex lg:items-center">
                <button className="hidden lg:inline-block text-white hover:text-gray-300" onClick={()=> router.push("/")}>Home</button>
                <button className="hidden lg:inline-block text-white hover:text-gray-300 ml-4">About Conference</button>
                <button className="hidden lg:inline-block mx-2 text-white hover:text-gray-300" onClick={()=>{
                    router.push('/registrations')
                }}>Online Registrations</button>
                <button className="hidden lg:inline-block mx-2 text-white hover:text-gray-300" onClick={()=> router.push("/speakers")}>Speakers</button>
                <button className="hidden lg:inline-block mx-2 text-white hover:text-gray-300" onClick={()=> router.push("/committee")}>Committee</button>
                <button className="hidden lg:inline-block mx-2 text-white hover:text-gray-300">Sponsorship</button>
                <button className="hidden lg:inline-block mx-2 text-white hover:text-gray-300">Contacts</button>
                <div className="lg:hidden">
                    <button onClick={toggleMenu} className="text-white hover:text-gray-300">
                        <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                            <path fill="none" d="M0 0h24v24H0V0z"/>
                            <path d="M4 18h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zm0-5h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zM3 7c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1z"/>
                        </svg>
                    </button>
                </div>
            </div>
            <div className={`lg:flex ${isOpen ? 'flex' : 'hidden'} flex-col items-start text-white mt-2`}>
                <button className="my-1 text-white hover:text-gray-300 text-lg py-2 px-4 rounded-md hover:bg-blue-700 lg:hidden">Home</button>
                <select className="my-1 text-white  rounded-md outline-none hover:text-gray-300 lg:hidden">
                    <option value="">Conference</option>
                    <option value="authors">Authors</option>
                    <option value="registrations">Registrations</option>
                    <option value="speakers">Speakers</option>
                    <option value="committee">Committee</option>
                    <option value="sponsorships">Sponsorships</option>
                </select>
                <button className="my-1 text-white hover:text-gray-300 text-lg py-2 px-4 rounded-md  hover:bg-blue-700 lg:hidden">technext</button>
                <button className="my-1 text-white hover:text-gray-300 text-lgpy-2 px-4 rounded-md  hover:bg-blue-700 lg:hidden">BOLT 2.0</button>
                <button className="my-1 text-white hover:text-gray-300 text-lg py-2 px-4 rounded-md  hover:bg-blue-700 lg:hidden">Visa</button>
                <button className="my-1 text-white hover:text-gray-300 text-lg py-2 px-4 rounded-md  hover:bg-blue-700 lg:hidden">Hotels</button>
                <button className="my-1 text-white hover:text-gray-300 text-lgpy-2 px-4 rounded-md  hover:bg-blue-700 lg:hidden">Contacts</button>
            </div>
            <img src="ieee.png" alt="Navbar Logo" className="h-16 lg:ml-4 hidden lg:block" />
        </nav>
    );
}

export default Navbar;

