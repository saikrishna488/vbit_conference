import React from 'react';

const ThemeSection = () => {
    return (
        <div className="bg-gray-100 py-8 px-4 md:px-12">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-center">
                <div className="md:w-1/2 flex justify-center">
                    <img src="theme.jpg" alt="Conference Theme Image" className="w-full md:max-w-md rounded-lg shadow-md" />
                </div>
                <div className="md:w-1/2 md:ml-6">
                    <h2 className="text-3xl font-bold text-orange-500 mb-4">Theme of the Conference</h2>
                    <p className="text-lg text-justify">
                        <strong>IC-ACIST</strong> expresses the importance of upgrading the research in Information Technology and Engineering. It motivates to provide a worldwide platform to researchers far and widespread by exploring their innovations in the field of science and technology. The mission is to promote and improve the research and development related to Information Technology and Engineering. The essential objective of the conference is to assist the researchers in discovering the global linkage for future joint efforts in their academic outlook.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ThemeSection;
