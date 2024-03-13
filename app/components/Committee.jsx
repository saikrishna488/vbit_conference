import React from 'react';

const CommitteeSection = () => {
    return (
        <div className="bg-white py-8 p-5">
            <h2 className="text-orange-500 text-2xl font-bold mb-4">Organizing Committee</h2>
            <div className="mb-6">
                <div className="flex justify-between">
                    <div className="w-1/2 pr-2">
                        <h3 className="text-orange-500 text-lg font-semibold">Technical program</h3>
                        <ul className="list-disc p-5">
                            <li>Dr. Ming Yang, Kennesaw State University, Atlanta, USA</li>
                            <li>Dr. Sanjay Misra, Covenant University, Ota, Nigeria</li>
                            <li>Dr. Milos Stojmenovic, Singidunum University, Serbia</li>
                            <li>Dr. Georgios Tsaramirsis, Higher Colleges of Technology, Abu Dhabi</li>
                            <li>Dr. Sven Groppe, University of Lübeck, Germany</li>
                            <li>Dr. Mohammad Yamin, Abdulaziz University, Jeddah, Saudi Arabia</li>
                            <li>Dr. Mukesh Misra, Massey University, New Zealand</li>
                            <li>Dr. Neha Mohanty, Department of Computer Science & Engineering, New Jersey Institute of Technology, USA</li>
                            <li>Dr. Jinghua Groppe, University of Lübeck, Germany</li>
                            <li>Dr. Abdulrhman Alshareef, King Abdulaziz University</li>
                            <li>Dr. Gourav Gupta, Massey University, Palmerston North, New Zealand</li>
                            <li>Dr. Lal Hussain, University of Jazad Ammu and Kashmir, Pakistan</li>
                            <li>Dr. María Avilés, Gijon Hospital, Asturias, Spain</li>
                            <li>Dr. Izzat Al-Darraji, University of Baghdad, Baghdad</li>
                            <li>Dr. Lie Li, Kennesaw State University, Atlanta, USA</li>
                            <li>Dr. Abdulsattar Abdullah Hamad, University of Samarra, Iraq</li>
                            <li>Dr. Vicente Garcia Diaz, University Oviedo, Spain</li>
                            <li>Dr. Oscar Castillo, Tijuana Institute Technology, Mexico</li>
                            <li>Dr. J P Das, University of Alberta, Canada</li>
                            <li>Dr. Rajkumar Singh Rathore, Cardiff Met University, London</li>
                            <li>Dr. Prasad Chetti, Northwest Missouri State University, USA</li>
                        </ul>
                    </div>
                    <div className="w-1/2 pl-2">
                        <h3 className="text-orange-500 text-lg font-semibold">Patrons</h3>
                        <ul className="list-disc">
                            <li>Dr. N. Goutham Rao, Chairman, VBIT</li>
                            <li>Dr. G. Manoher Reddy, Secretary, VBIT</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="mb-6">
                <div className="flex justify-between">
                    <div className="w-1/2 pr-2">
                        <h3 className="text-orange-500 text-lg font-semibold">Organising Chair</h3>
                        <ul className="list-disc p-5">
                            <li>Dr. G Sreeram, Professor, VBIT</li>
                        </ul>
                    </div>
                    <div className="w-1/2 pl-2">
                        <h3 className="text-orange-500 text-lg font-semibold">Organising Co-chair</h3>
                        <ul className="list-disc p-5">
                            <li>Dr. G Sreeram, Professor, VBIT</li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default CommitteeSection;
