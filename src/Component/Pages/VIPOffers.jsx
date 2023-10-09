
// import PropTypes from 'prop-types';

import { useLoaderData } from "react-router-dom";
import VipOffer from "./VipOffer";
import Navber from "../Shared_Components/Navber";

const VIPOffers = () => {
    const offers = useLoaderData();

    return (
        <div>
            <Navber></Navber>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 max-w-7xl mx-auto px-5 mb-9 mt-8">
                {
                    offers.map(offer => <VipOffer key={offer.id} offer={offer}></VipOffer>)
                }
            </div>
        </div>
    );
};

VIPOffers.propTypes = {

};

export default VIPOffers;