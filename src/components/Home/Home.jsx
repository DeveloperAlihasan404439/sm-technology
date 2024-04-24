import Footer from "../Shared/Footer/Footer";
import Navber from "../Shared/Navber/Navber";
import Banner from "./Banner";
import DealAndOffer from "./DealAndOffer";
import FeaturedDestinations from "./FeaturedDestinations";
import PopularAirlines from "./PopularAirlines";
import Testimonials from "./Testimonials";
import TravelBlog from "./TravelBlog";


export default function Home() {
    return (
        <div>
            <Navber/>
            <Banner/>
            <FeaturedDestinations/>
            <DealAndOffer/>
            <PopularAirlines/>
            <Testimonials/>
            <TravelBlog/>
            <Footer/>
        </div>
    );
};