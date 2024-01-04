import ContactForm from "../Components/ContactForm";
import Footer from "../Components/Footer";
import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";
import contactImg from "../assets/contact.jpg";

export default function Contact(){
    return(
        <>
        <Navbar/>
        <Hero
        cName="hero-mid"
        heroImg={contactImg}
        title="Contact"
        btnClass="hide"
        />
        <ContactForm/>
        <Footer/>
        </>
    )
}