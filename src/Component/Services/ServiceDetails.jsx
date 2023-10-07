
// import PropTypes from 'prop-types';
import { useLoaderData, useParams } from 'react-router-dom';
import Navber from '../Shared_Components/Navber';
import Aos from "aos";
import "aos/dist/aos.css"
import { useEffect } from "react";

const ServiceDetails = () => {
    useEffect(()=> {
        Aos.init({duration : 900})
    },[])
    const services = useLoaderData();
    const { id } = useParams()
    const CurrentService = services.find(service => service.id == id)

    const { name, description, price_range, image_url } = CurrentService
    return (
        <div className='font-Bebas mb-10'>
            <Navber></Navber>
            <div>
                <img src={image_url} alt="service image" className='w-3/4 mt-6 rounded-3xl mx-auto' />
            </div>
            <div className='w-3/4 mx-auto'>
                <h1 className=' mt-5 text-3xl md:text-5xl'>{name}</h1>
                <p className='mt-4'>{description}</p>
                <h1 className='text-2xl md:text-3xl text-[#DA0037] mt-3 mb-4' data-aos="flip-left">{price_range}</h1>
                <button className="px-3 py-2 md:px-5 md:py-2 rounded-lg bg-[#DA0037] text-white">B o o k  n o w</button>
            </div>
        </div>
    );
};

ServiceDetails.propTypes = {

};

export default ServiceDetails;