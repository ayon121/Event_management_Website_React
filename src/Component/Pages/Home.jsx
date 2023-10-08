import Banner from "../Banner/Banner";
import ClientReviews from "../ClientReview/ClientReviews";
import Services from "../Services/Services";
import Footer from "../Shared_Components/Footer";
import Teams from "../Team/Teams";




const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Teams></Teams>
            <ClientReviews></ClientReviews>
            <Footer></Footer>
        </div>
    );
};

export default Home;