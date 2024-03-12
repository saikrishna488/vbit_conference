import Conference from "../components/Conference";
import DatesSection from "../components/DatesSection";
import Footer from "../components/Footer";
import SponsorsSection from "../components/SponsersSection";


export default function Home(){
    return (
        <>
        {/* <Conference/> */}
        <div className="p-5 text-center bg-white h-40">
            <h1 className="text-large mt-20">Coming soon ....</h1>
        </div>
        <SponsorsSection/>
        <Footer/>
        </>
    )
}