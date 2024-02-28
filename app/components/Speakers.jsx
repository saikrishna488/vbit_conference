import React from 'react';

const SpeakersComponent = () => {
    const speakersData = [
        {
            name: "John Doe",
            role: "Professor, Former Dean of Computing",
            college: "Georgia Institute of Technology",
            location: "Atlanta, USA",
            imageUrl: "tesla.jpg" // Insert the URL of the speaker's image
        },
        {
            name: "John Doe",
            role: "Professor, Former Dean of Computing",
            college: "Georgia Institute of Technology",
            location: "Atlanta, USA",
            imageUrl: "tesla.jpg" // Insert the URL of the speaker's image
        },
        {
            name: "John Doe",
            role: "Professor, Former Dean of Computing",
            college: "Georgia Institute of Technology",
            location: "Atlanta, USA",
            imageUrl: "tesla.jpg" // Insert the URL of the speaker's image
        },
    
        // Add more speaker objects as needed
    ];

    return (
        <div className="bg-white p-4">
            <h1 className="text-center text-2xl font-bold mb-4">Speakers</h1>
            <div className="flex flex-wrap justify-around">
                {speakersData.map((speaker, index) => (
                    <div key={index} className="w-64 m-4 bg-[#111042] p-4 rounded-lg shadow-md text-center">
                        <img src={speaker.imageUrl} alt={speaker.name} className="w-full rounded-md mb-2" />
                        <h2 className="text-xl text-white font-semibold mb-2">{speaker.name}</h2>
                        <p className="text-white mb-1">{speaker.role}</p>
                        <p className="text-white">{speaker.college}, {speaker.location}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SpeakersComponent;
