import AboutUs from "../Components/AboutUs";
import Footer from "../Components/Footer";
import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";
import aboutImg from "../assets/abtImg.jpg";

export default function About(){
    return(
        <>
        <Navbar/>
        <Hero
        cName="hero-mid"
        heroImg={aboutImg}
        title="About"
        btnClass="hide"
        />
        <AboutUs/>
        <Footer/>
        </>
    )
}