
import Footer from "../components/Footer";
import SponsorsSection from "../components/SponsersSection";


export default function Home() {
    return (
        <>
            <div className=" mx-auto p-8 bg-white">
                <h2 className="text-2xl font-bold mb-4">Theme of the Conference</h2>
                <p className="mb-6 text-justify">The objective is to provide a platform for academicians, researchers, scientists, professionals, and students to share their knowledge and expertise in the field of Intelligent Computing, Communication, and Convergence, as well as to address a variety of issues in order to raise awareness of technological innovations and to identify challenges and opportunities for the development of smart cities using multidisciplinary approaches. The aim of this conference is to provide a unified forum for advanced, multi-disciplinary research on smart computing and informatics design. On a larger scale, the theme focuses on numerous innovation paradigms in system knowledge, intelligence, and sustainability that can be used to deliver practical solutions to a wide range of challenges in society, the environment, and industry.</p>

                <h2 className="text-2xl font-bold mb-4">Scope and Interests</h2>
                <p className="mb-6 text-justify">For its research track, IC-ACIST-2024 invites original, high-quality papers addressing the following topics. All submissions will be subject to plagiarism check. We strongly encourage papers that report experimental work and results. Use of public data sets and repeatability of experiments, well-written papers high lighting the contributions, novel approaches for different computing platforms, are a few important parameters used for research quality assessment. Submissions of high-quality papers are expected in all areas of Data Engineering, Intelligent Computing, Computer Communication, Networking and IoT. Artificial Intelligence, Computational Intelligence, Cognitive Computing, Cloud & Fog Computing, Deep Learning, Intelligent Agents, Machine Learning, Optimization Techniques, Parallel & Scalable Computing, Security Tools & Technologies, Autonomous Agents, Big data Tools & Technologies, Stream Mining, Social Media, Knowledge-based Systems and Formal Methods, Search Engines and Information Retrieval, Real-time Analytics, Security and Information Assurance, Natural Language Processing, Cybersecurity, Wireless Sensor Networks, Cyber Physical Systems, Health Care Recommendation Systems, Data Science, Quantum Computing, Distributed computing, Blockchain Communications- 5G, 6G and onwards, Sensor networks and embedded systems, Geographic information systems, Body Area Networks, Satellite and Optical Communication, Soft Computing, Data analysis and Visualization, Internet of Things (IoT), Mathematical Modeling and Simulation, Signal and Speech Processing, Image and Video Processing, Microelectronics and VLSI and Embedded Systems, Smart Transmission grids with renewable energy Systems, Power Electronic devices in Smart Grid applications, Efficient battery management in EV Technology, Communication technologies for EV charging management, AI applications in renewable energy systems, BMS and ML based EV Technologies. Submitted papers should neither be previously published nor under consideration for publication elsewhere. All papers will be refereed through a peer review process. The proceedings of IC-ACIST-2024 will be published in the Springer Book series “Lecture Notes in Networks and Systems (LNNS)”, which will be Indexed by SCOPUS, INSPEC, WTI Frankfurt eG, zbMATH, SCImago. All books published in the series are submitted for consideration in Web of Science.</p>

                <h2 className="text-2xl font-bold mb-4">Paper Submission</h2>
                <div className="flex justify-between items-center">
                    
                    <a href="#" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Submit</a>
                </div>
            </div>
            <SponsorsSection />
            <Footer />
        </>
    )
}