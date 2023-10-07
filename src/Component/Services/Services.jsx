
// import PropTypes from 'prop-types';

import { useEffect, useState } from "react";
import Service from "./Service";

const Services = () => {
    const [services , Setservices] = useState([])
    useEffect(()=>{
        fetch('services.json')
        .then(res => res.json())
        .then(data => Setservices(data))
    },[])
    return (
        <div className='mt-7 font-Bebas'>
            <div className="w-full text-center">
            <h1 className="text-3xl md:text-5xl mb-4">Our <span className="text-[#DA0037]">Services</span></h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 max-w-7xl mx-auto px-5 mb-4">
                {
                    services.map(service => <Service key={service.id} service={service}></Service>)
                }
            </div>
            
        </div>
    );
};

Services.propTypes = {
    
};

export default Services;