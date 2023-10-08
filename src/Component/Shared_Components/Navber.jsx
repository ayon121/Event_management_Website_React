
// import PropTypes from 'prop-types';

import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Providers/Authproviders";

const Navber = () => {
    const { user  , logout} = useContext(AuthContext)

    const handlelogOut = () => {
        logout()
        .then()
        .catch()
    }


    const navlinks = <>			
        <li className="text-lg"><NavLink  to="/" className={({ isActive }) => isActive ? 'text-[#DA0037] underline text-xl' : 'bg-transparent'}>Home</NavLink></li>
        <li className="text-lg"><NavLink  to="/Services" className={({ isActive }) => isActive ? 'text-[#DA0037] underline text-xl' : 'bg-transparent'}>Services</NavLink></li>
        <li className="text-lg"><NavLink  to="/About" className={({ isActive }) => isActive ? 'text-[#DA0037] underline text-xl' : 'bg-transparent'}>About</NavLink></li>
  </>

    return (
        <div className="navbar bg-transparent font-Bebas py-4 px-3 max-w-7xl mx-auto ">
            <div className="navbar-start">
                <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    {navlinks}
                </ul>
                </div>
                <h1 className="text-2xl md:text-4xl lg:text-5xl text-black "><span className="text-[#DA0037]">Event</span>Makers</h1>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                {navlinks}
                </ul>
            </div>
            <div className="navbar-end">
                {
                      user ? <button onClick={handlelogOut} className="px-3 py-2 md:px-5 md:py-3 rounded-lg bg-[#DA0037] text-white">Logout</button>
                      :
                      <Link to="/Login">
                          <button className="px-3 py-2 md:px-5 md:py-3 rounded-lg bg-[#DA0037] text-white">Login</button>
                      </Link>

                }
               
                
            </div>
        </div>
    );
};

Navber.propTypes = {
    
};

export default Navber;