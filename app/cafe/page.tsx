import Cafe_Advantages from "@/src/components/Advantages/Сafe";
import FAQ from "@/src/components/Faq/Cafe";
import Footer from "@/src/components/Footer/Cafe";
import Gallery from "@/src/components/Galery/Cafe";
import Cafe_Header from "@/src/components/Header/Cafe_Header";
import Cafe_Hero from "@/src/components/Home/Cafe_Hero";
import Cafe_Menu from "@/src/components/Price/Menu";
import Reviews from "@/src/components/Review/Cafe";


export default function Cafe() {

    return (
        <div>
            <Cafe_Header />
            <Cafe_Hero />
            <Cafe_Advantages/>
            <Cafe_Menu/>
            <Gallery/>
            <Reviews/>
            <FAQ/>
            <Footer/>
        </div>
    )
}