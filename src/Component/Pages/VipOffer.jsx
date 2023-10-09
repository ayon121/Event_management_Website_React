
import PropTypes from 'prop-types';

const VipOffer = ({offer})=> {
    const {title , description ,discount_percentage ,valid_until } = offer
    return (
        <div className='font-Bebas'>
            <div className='px-4 py-5 border-2 rounded-3xl border-[#DA0037] h-60'>
                <h1 className='text-7xl text-[#DA0037]'>{discount_percentage}%</h1>
                <h2 className='text-3xl'>{title}</h2>
                <p className='text-xs'>{description}</p>
                <p className='text-2xl pt-2 text-[#DA0037]'>{valid_until}</p>
            </div>
        </div>
    );
};

VipOffer.propTypes = {
    offer : PropTypes.object
};

export default VipOffer;