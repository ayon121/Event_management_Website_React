
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const Service = ({ service }) => {

    const { name, id, description, image_url } = service
    return (
        <div className="card w-auto bg-base-100 shadow-xl mb-4">
            <figure><img src={image_url} alt="Service Picture" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{description.slice(0 ,120)}...</p>
                <div className="card-actions justify-end">
                    <Link to={`services/${id}`}><button className="px-3 py-2 md:px-5 md:py-3 rounded-lg bg-[#DA0037] text-white">V i e w D e t a i l s </button></Link>
                </div>
            </div>
        </div>
    );
};

Service.propTypes = {
    service: PropTypes.object
};

export default Service;