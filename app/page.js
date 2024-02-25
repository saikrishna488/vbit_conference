import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ButtonSection from "./components/ButtonsSection";
import AboutSection from "./components/AboutSection";
import ThemeSection from "./components/ThemeSection";
import HighlightsSection from "./components/HighlightsSection";
import AboutVBITSection from "./components/AboutVBITSection";
import Footer from "./components/Footer";
import SponsorsSection from "./components/SponsersSection";

export default function Home() {
  return (
    <>
    <HeroSection/>
    <ButtonSection/>
    <AboutSection/>
    <ThemeSection/>
    <HighlightsSection/>
    <AboutVBITSection/>
    <SponsorsSection/>
    <Footer/>

    </>
  );
}
