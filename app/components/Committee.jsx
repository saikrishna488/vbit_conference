import React from 'react';

const CommitteeSection = () => {
    return (
        <div className="bg-white py-8 p-5 m-5">
            <h2 className="text-orange-500 text-2xl font-bold mb-4">Organizing Committee</h2>
            <div className="mb-6">
                <div className="flex justify-between">
                    <div className="w-1/2 pr-2">
                        <h3 className="text-orange-500 text-lg font-semibold">Technical program</h3>
                        <ul className="list-disc">
                            <li>Ming Yang, Kennesaw State University, Atlanta, USA</li>
                            <li>Sanjay Misra</li>
                            <li>Milos Stojmenovic</li>
                            <li>Georgios Tsaramirsis</li>
                            <li>Sven Groppe</li>
                            <li>Mohammad Yamin</li>
                            <li>Mukesh Misra</li>
                            <li>Neha Mohanty</li>
                            <li>Jinghua Groppe</li>
                            <li>Abdulrhman Alshareef</li>
                            <li>Gourav Gupta</li>
                            <li>Lal Hussain</li>
                            <li>María Avilés</li>
                            <li>Izzat Al-Darraji</li>
                            <li>Lie Li</li>
                            <li>Abdulsattar Abdullah Hamad</li>
                            <li>Vicente Garcia Diaz</li>
                            <li>Oscar Castillo</li>
                            <li>J P Das</li>
                            <li>Rajkumar Singh Rathore</li>
                            <li>Dr. Prasad Chetti, Northwest Missouri State University, USA</li>
                        </ul>
                    </div>
                    <div className="w-1/2 pl-2">
                        <h3 className="text-orange-500 text-lg font-semibold">Patrons</h3>
                        <ul className="list-disc">
                            <li>Mr. Sankar Viswanathan, Vice President, VIT</li>
                            <li>Dr. Sekar Viswanathan, Vice President, VIT</li>
                            <li>Dr. G.V. Selvam, Vice President, VIT</li>
                            <li>Dr. V.S. Kanchana Bhaaskaran, Vice - Chancellor, VIT</li>
                            <li>Dr. Partha Sharathi Mallick, Pro-Vice Chancellor, VIT, Vellore</li>
                            <li>Dr. Jayabarathi T, Registrar, VIT</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="mb-6">
                <div className="flex justify-between">
                    <div className="w-1/2 pr-2">
                        <h3 className="text-orange-500 text-lg font-semibold">Organising Chair</h3>
                        <ul className="list-disc">
                            <li>Dr. G Sreeram, Professor, VBIT</li>
                        </ul>
                    </div>
                    <div className="w-1/2 pl-2">
                        <h3 className="text-orange-500 text-lg font-semibold">Organising Co-chair</h3>
                        <ul className="list-disc">
                            <li>Dr. G Sreeram, Professor, VBIT</li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default CommitteeSection;
