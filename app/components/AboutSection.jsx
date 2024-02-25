import React from 'react';

const AboutSection = () => {
    const loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed viverra nisi sit amet diam lobortis, sit amet suscipit risus lacinia. Integer tristique velit sit amet justo pulvinar, quis ultricies justo consectetur. Nullam a massa justo. Sed tempus magna quis odio rhoncus dignissim. Vivamus ac sagittis lectus. Maecenas ut ultricies nunc. Nam in turpis eu dolor efficitur lobortis sit amet id urna. Sed ullamcorper metus id velit tempor vehicula. Maecenas non metus quis nunc pretium fringilla eget nec justo. Fusce malesuada lacus vel vestibulum tempus. Fusce id semper lorem. In hac habitasse platea dictumst.";

    return (
        <div className="bg-gray-100 py-8 px-4 md:px-12">
            <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-center">
                <div className="md:w-1/2">
                    <h2 className="text-3xl text-orange-500 font-bold mb-4">About IC-ETITE</h2>
                    <p className="text-lg">{loremIpsum}</p>
                </div>
                <div className="md:w-1/2 flex justify-center">
                    <img src="conference.jpg" alt="IC-ETITE Image" className="w-full md:max-w-md rounded-lg shadow-md" />
                </div>
            </div>
        </div>
    );
};

export default AboutSection;
