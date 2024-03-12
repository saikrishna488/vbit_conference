"use client"
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [menu, setMenu] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 1240) { // Adjust breakpoints as needed
                setIsOpen(true); // Set mobile view open by default
            } else {
                setIsOpen(false); // Set mobile view closed on larger screens
            }
        };

        // Call the handleResize function initially
        handleResize();

        // Add event listener for window resize
        window.addEventListener('resize', handleResize);

        // Cleanup function to remove event listener on component unmount
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const desktopView = () => {
        return (
            <nav className='bg-orange-500 p-5 flex justify-center items-center gap-5 '>
                <ul className='flex text-white gap-5'>
                    <li className='cursor-pointer hover:text-blue-500' onClick={() => router.push("/")}>Home</li>
                    <li className='cursor-pointer hover:text-blue-500' onClick={() => router.push("/important-dates")}>Important Dates</li>
                    <li className='cursor-pointer hover:text-blue-500' onClick={() => router.push("/registrations")}>Online Registrations</li>
                    <li className='cursor-pointer hover:text-blue-500' onClick={() => router.push("/speakers")}>Speakers</li>
                    <li className='cursor-pointer hover:text-blue-500' onClick={() => router.push("/committee")}>Committee</li>
                    <li className='cursor-pointer hover:text-blue-500' onClick={() => router.push("/sponsorships")}>Sponsorship</li>
                    <li className='cursor-pointer hover:text-blue-500' onClick={() => router.push("/contacts")}>Contacts</li>
                </ul>
            </nav>
        );
    };

    const mobileView = () => {
        return (
            <nav className='bg-[#111042] p-5 flex flex-col justify-between items-center'>
                <div className='flex items-center justify-between gap-10 w-full'>
                    <img src="vbit2.png" className='h-14' alt="" />
                    <div className='cursor-pointer text-white' onClick={() => setMenu(!menu)}>
                    <GiHamburgerMenu  size={30}/>
                    </div>
                </div>

                {menu ? (
                    <ul className='flex flex-col items-start w-full p-4 text-white gap-5'>
                        <li className='cursor-pointer hover:text-blue-500' onClick={() => router.push("/")}>Home</li>
                        <li className='cursor-pointer hover:text-blue-500' onClick={() => router.push("/conference")}>About conference</li>
                        <li className='cursor-pointer hover:text-blue-500' onClick={() => router.push("/registrations")}>Online Registrations</li>
                        <li className='cursor-pointer hover:text-blue-500' onClick={() => router.push("/speakers")}>Speakers</li>
                        <li className='cursor-pointer hover:text-blue-500' onClick={() => router.push("/committee")}>Committee</li>
                        <li className='cursor-pointer hover:text-blue-500' onClick={() => router.push("/sponsorships")}>Sponsorship</li>
                        <li className='cursor-pointer hover:text-blue-500' onClick={() => router.push("/contacts")}>Contacts</li>

                    </ul>
                ) : null}

            </nav>
        );
    };

    return (
        <>
            {isOpen ? mobileView() : desktopView()}
        </>
    );
};

export default Navbar;
