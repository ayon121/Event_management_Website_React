
// import PropTypes from 'prop-types';
import Navber from '../Shared_Components/Navber';
import { useContext, useState } from 'react';
import { AuthContext } from '../../Providers/Authproviders';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
    const [LoginError, SetLoginError] = useState('')
    const [LoginSuccess, SetLoginSuccess] = useState('')
    const location = useLocation()
    const navigate = useNavigate()

    const { loginUser, GoogleLogin } = useContext(AuthContext)
    const handleLogin = e => {
        e.preventDefault()
        const form = new FormData(e.currentTarget);
        const email = form.get('email')
        const password = form.get('password')
        loginUser(email, password)
            .then(result => {
                console.log(result.user)
                SetLoginSuccess('Login Success')
                // navigate after login
                navigate(location?.state ? location.state : '/')

            })
            .catch(error => SetLoginError(error.message))


    }

    const HandleGoogleLogin = () => {
        GoogleLogin()
            .then(result => {
                console.log(result)
                SetLoginSuccess('Login Success')
            })
            .catch(error => SetLoginError(error.message))
    }


    return (
        <div className='font-Bebas min-h-screen bg-base-200 px-4'>
            <Navber></Navber>
            <h1 className='text-3xl md:text-5xl text-center pt-16 pb-4'>Login Now</h1>
            <div className="hero ">
                <div className="card border-double border-4 border-[#DA0037] flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mb-12">
                    <form className="card-body " onSubmit={handleLogin}>
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
                            {/* error and success sms */}
                            {
                                LoginError && <p className="text-red-600 mr-1">{LoginError}</p>
                            }
                            {
                                LoginSuccess && <p className="text-green-600">{LoginSuccess}</p>
                            }
                            <label className="label flex">
                                <Link to="" className='underline'>Forgot password?</Link>
                                <Link to="/Register" className='underline'>Register</Link>
                            </label>
                        </div>
                        <div className="form-control mt-6">

                            <button className="px-3 py-2 md:px-5 md:py-3 rounded-lg bg-[#DA0037] text-white">L o g i n</button>
                            <button onClick={HandleGoogleLogin} className="px-3 py-2 md:px-5 md:py-3 rounded-lg bg-[#DA0037] text-white mt-3">Login With Google</button>




                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

Login.propTypes = {

};

export default Login;