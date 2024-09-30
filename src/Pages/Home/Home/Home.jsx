import BackSection from "../../backSection/BackSection";
import Catagorie from "../../Catagorie/Catagorie";
import CheepCart from "../../CheepCart";
import OurMenu from "../../OurMenu";
import PopularSection from "../../PopulerSection/PopularSection";
import Testomonial from "../../Testimonial/Testomonial";
import Banner from "../Banner";
import Call from "../Call";



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Catagorie></Catagorie>
            <BackSection></BackSection>
            <PopularSection></PopularSection>
            <Call></Call>
            <CheepCart></CheepCart>
            <OurMenu></OurMenu>
            <Testomonial></Testomonial>
        </div>
    );
};

export default Home;