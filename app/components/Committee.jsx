import React from 'react';

const CommitteeSection = () => {
    return (
        <div className="bg-white py-8 px-4">
            <h2 className="text-orange-500 text-2xl font-bold mb-4">Organizing Committee</h2>
            
            <div className="mb-6">
                <div className="flex justify-between">
                    <div className="w-1/2 pr-2">
                        <h3 className="text-orange-500 text-lg font-semibold">Chief Patron</h3>
                        <p>Dr. G. Viswanathan, Chancellor, VIT</p>
                    </div>
                    <div className="w-1/2 pl-2">
                        <h3 className="text-orange-500 text-lg font-semibold">Patrons</h3>
                        <ul>
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
                        <p>Dr. Sumathy S, Professor & Dean, SCORE, VIT, Vellore</p>
                    </div>
                    <div className="w-1/2 pl-2">
                        <h3 className="text-orange-500 text-lg font-semibold">Organising Co-chair</h3>
                        <p>Dr. Dhinesh Babu. L. D, Professor & Associate Dean, SCORE, VIT, Vellore</p>
                    </div>
                </div>
            </div>

            {/* Add more sections similarly */}

        </div>
    );
};

export default CommitteeSection;
