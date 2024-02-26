import React from 'react';

const AboutSection = () => {

    return (
        <div className="bg-gray-100 py-8 px-4 md:px-12">
            <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-center">
                <div className="md:w-1/2">
                    <h2 className="text-3xl text-orange-500 font-bold mb-4">About IC-ACIST</h2>
                    <p className="text-lg">The purpose of this conference is to enhance the research in Information Technology, Computer Engineering, Communication Engineering, Electronics Engineering and to afford an international platform for researchers, academicians, engineers, industrialists and students around the world to share their research findings with the global experts in the field of Science and Technology. The primary goal of the conference is to help the delegates to launch their research or business relations and to associate for future collaborations in their career path. Original, unpublished papers highlighting specific research domains from all subject perspectives are invited from delegates worldwide. In this concern, the conference aims to deliver, coordinate and publish research and resources to enrich the impact and growth of education allied.</p>
                </div>
                <div className="md:w-1/2 flex justify-center">
                    <img src="conference.jpg" alt="IC-ETITE Image" className="w-full md:max-w-md rounded-lg shadow-md" />
                </div>
            </div>
        </div>
    );
};

export default AboutSection;
