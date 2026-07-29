import Advantages from "@/src/components/Advantages/Restaurant";
import Contacts from "@/src/components/Contacts/Restaurant";
import FAQ from "@/src/components/Faq/Restaurant";
import Footer from "@/src/components/Footer/Restaurant";
import Gallery from "@/src/components/Galery/Restaurant";
import Restourant_Header from "@/src/components/Header/Restourant";
import Hero from "@/src/components/Home/Restaurant";
import Menu from "@/src/components/Price/Restaurant";
import Reviews from "@/src/components/Review/Restaurant";

export default function Restourant(){

    return(
        <div>
            <Restourant_Header/>
            <Hero/>
            <Advantages/>
            <Menu/>
            <Gallery/>
            <Reviews/>
            <FAQ/>
            <Contacts/>
            <Footer/>
        </div>
    )
}