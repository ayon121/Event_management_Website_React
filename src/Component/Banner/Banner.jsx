
// import PropTypes from 'prop-types';

import Navber from "../Shared_Components/Navber";
import Aos from "aos";
import "aos/dist/aos.css"
import { useEffect } from "react";
const Banner = () => {
    useEffect(()=> {
        Aos.init({duration : 900})
    },[])
    return (
        <div className="min-h-screen bg-[#EDEDED] rounded-br-3xl border-b-4 border-[#DA0037] font-Bebas mb-10 pb-7 lg:pb-4">
            <Navber></Navber>
            <div className="hero pt-6 px-4 w-full min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img data-aos="fade-left" src='https://i.ibb.co/WvMFmTd/jakob-dalbjorn-cu-KJre3ny-Yc-unsplash.jpg' className="w-4/5 lg:w-1/3  mx-auto rounded-xl shadow-2xl " />
                    <div data-aos="fade-up-right">
                        <h1 className="text-4xl md:text-5xl font-bold pt-3 lg:pt-1">Your Events, Our Expertise</h1>
                        <p className="py-6 w-4/5">Turning Your Moments into Memories. We are the Architects of Joy, Crafting Every Celebration with Perfection. Because We made Events Extraordinary, Every Time.</p>
                        <a className="px-3 py-2 md:px-5 md:py-3 rounded-lg bg-[#DA0037] text-white">B o o k  N o w</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

Banner.propTypes = {

};

export default Banner;