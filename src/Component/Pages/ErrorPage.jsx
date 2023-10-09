import Footer from "../Shared_Components/Footer";
import Navber from "../Shared_Components/Navber";


const ErrorPage = () => {
    return (
        <div>
            <Navber></Navber>
            <div className="min-h-screen max-w-6xl mx-auto flex justify-center items-center font-Bebas">
                <div className="text-center">
                    <h1 className="text-[#DA0037] text-6xl md:text-8xl mt-4">404</h1>
                    <p>Page Not Found</p>
                </div>
            </div>
            <Footer></Footer>

        </div>
    );
};

export default ErrorPage;