
import PropTypes from 'prop-types';

const ClientReview = ({review}) => {
    const {client_name , client_location , comment} = review
    return (
        <div className='w-auto border-dashed py-2 px-2 border-4 rounded-ss-3xl rounded-ee-3xl border-[#DA0037] mb-4'>
            <h1 className='text-2xl'>{client_name}</h1>
            <p className='text-sm'>{client_location}</p>
            <p className='pt-2 text-lg'>{comment}</p>
        </div>
    );
};

ClientReview.propTypes = {
    review : PropTypes.object
};

export default ClientReview;