import { useNavigate } from "react-router-dom";
import Navber from "../Shared_Components/Navber";
// react toast
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
    const navigate = useNavigate()
    const handleContact = () => {
        
        navigate('/')
        toast("Message Send Successfully")

    }
    return (
        <div className="font-Bebas min-h-screen bg-base-200 px-4">
            <Navber></Navber>
            <h1 className='text-3xl md:text-5xl text-center pt-16 pb-4  '>Contact Us</h1>
            <div className="hero ">
                <div className="card border-double border-4 border-[#DA0037] flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mb-12">
                    <form className="card-body " onSubmit={handleContact}> 
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Message</span>
                            </label>
                            <input type="text" placeholder="Your message for us" name='text' className="input input-bordered py-9" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="px-3 py-2 md:px-5 md:py-3 rounded-lg bg-[#DA0037] text-white">S e n d</button>
                        </div>
                    </form>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Contact;