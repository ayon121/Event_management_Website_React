
// import PropTypes from 'prop-types';

import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Providers/Authproviders";
import { CgProfile } from 'react-icons/cg';


const Navber = () => {
    const { user, logout } = useContext(AuthContext)
   

    const handlelogOut = () => {
        logout()
            .then()
            .catch()
    }


    const navlinks = <>
        <li className="text-lg"><NavLink to="/" className={({ isActive }) => isActive ? 'text-[#DA0037] underline text-xl' : 'bg-transparent'}>Home</NavLink></li>
        <li className="text-lg"><NavLink to="/About" className={({ isActive }) => isActive ? 'text-[#DA0037] underline text-xl' : 'bg-transparent'}>About Us</NavLink></li>
        {
            user && <li className="text-lg"><NavLink to="/VIPOffers" className={({ isActive }) => isActive ? 'text-[#DA0037] underline text-xl' : 'bg-transparent'}>VIPOffers</NavLink></li>
        }
        {
            user && <li className="text-lg"><NavLink to="/Contact" className={({ isActive }) => isActive ? 'text-[#DA0037] underline text-xl' : 'bg-transparent'}>Contact Us</NavLink></li>
        }
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
                        {
                            user ?
                                <button onClick={handlelogOut} className="flex  md:hidden items-center gap-1 justify-center px-3 py-2 md:px-5 md:py-3 rounded-lg bg-[#DA0037] text-white">
                                    {
                                        <span>{user?.photoURL ? <img className="w-4 border-double rounded-full" src={user.photoURL} alt="" /> : <CgProfile></CgProfile>}</span>
                                    }

                                    <span>Logout</span></button>
                                :
                                <Link to="/Login">
                                    <button className=" md:hidden px-3 py-2 md:px-5 md:py-3 rounded-lg bg-[#DA0037] text-white">Login</button>
                                </Link>


                        }

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
                <div>
                    <div className="pl-4 mx-2">
                        <h1>{user?.displayName ?? user?.email ?? ''}</h1>
                    </div>
                </div>
                {
                    user ?

                        <button onClick={handlelogOut} className="hidden md:flex   items-center gap-1 justify-center px-3 py-2 md:px-5 md:py-3 rounded-lg bg-[#DA0037] text-white">
                            {
                                <span>{user?.photoURL ? <img className="w-4 border-double rounded-full" src={user.photoURL} alt="" /> : <CgProfile></CgProfile>}</span>
                            }

                            <span>Logout</span></button>
                        :
                        <Link to="/Login">
                            <button className="hidden md:block px-3 py-2 md:px-5 md:py-3 rounded-lg bg-[#DA0037] text-white">Login</button>
                        </Link>



                }

            </div>
        </div>
    );
};

Navber.propTypes = {

};

export default Navber;