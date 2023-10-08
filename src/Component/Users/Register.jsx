

import { useContext } from 'react';
import { AuthContext } from '../../Providers/Authproviders';
import Navber from '../Shared_Components/Navber';
import { Link } from 'react-router-dom';

const Register = () => {
    const { createUser } = useContext(AuthContext)
    const handleRgister = e => {
        e.preventDefault()
        const form = new FormData(e.currentTarget);
        const email = form.get('email')
        const password = form.get('password')
        // create user
        createUser(email , password)
        .then(result => console.log(result))
        .catch(error => console.log(error))

        
    }

    return (
        <div className='font-Bebas min-h-screen bg-base-200 px-4'>
            <Navber></Navber>
            <h1 className='text-3xl md:text-5xl text-center pt-16 pb-4'>Register Now</h1>
            <div className="hero ">
                <div className="card border-double border-4 border-[#DA0037] flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mb-12">
                    <form className="card-body " onSubmit={handleRgister}> 
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name='password' className="input input-bordered" required />
                            <label className="label flex">
                                <Link to="" className='underline'>Forgot password?</Link>
                                <Link to="/Login" className='underline'>Login</Link>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="px-3 py-2 md:px-5 md:py-3 rounded-lg bg-[#DA0037] text-white">R e g i s t e r</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

Register.propTypes = {

};

export default Register;