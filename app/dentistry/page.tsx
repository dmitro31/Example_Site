import Advantages_dentistry from "@/src/components/Advantages/Advantages_dentistry";
import Contacts_dentistry from "@/src/components/Contacts/Contacts_dentistry";
import FAQ_dentistry from "@/src/components/Faq/Faq_dentistry";
import Footer from "@/src/components/Footer/Footer_dentistry";
import Gallery_dentistry from "@/src/components/Galery/Gallery_dentistry";
import Dentistry_Header from "@/src/components/Header/Dentistry_Header";
import Main_Banner from "@/src/components/Home/Main_Banner";
import Reviews_dentistry from "@/src/components/Review/dentisty";
import Services_dentistry from "@/src/components/Service/Service_dentistry";

export default function Dentistry(){

    return(
        <div>
            <Dentistry_Header/>
            <Main_Banner/>
            <Advantages_dentistry/>
            <Services_dentistry/>
            <Gallery_dentistry/>
            <Reviews_dentistry/>
            <FAQ_dentistry/>
            <Contacts_dentistry/>
            <Footer/>
        </div>
    )
}