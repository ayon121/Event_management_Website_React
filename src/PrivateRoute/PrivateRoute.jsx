
import PropTypes from 'prop-types';
import { AuthContext } from '../Providers/Authproviders';
import { Navigate } from 'react-router-dom';
import { useContext } from 'react';

const PrivateRoute = ({children})=> {
    const {user , loading} = useContext(AuthContext)

    if (loading) {
        return <div className='flex justify-center h-screen  items-center'>
            <span className="loading loading-spinner loading-lg "></span>
        </div>
    }


    if(user){
        return children
    }


    return  <Navigate to="/Login"></Navigate>

};

PrivateRoute.propTypes = {
    children : PropTypes.node

};

export default PrivateRoute;