import { Link } from "react-router-dom";

import { FaFacebook , FaInstagram , FaYoutube} from 'react-icons/fa';

const Footer = () => {
    return (
        <div className="p-10 bg-[#EDEDED] text-base-content font-Bebas md:rounded-se-full border-t-2 md:border-t-4 border-[#DA0037]">
            <div className="footer text-base-content max-w-7xl mx-auto">
                <nav>
                <h1 className="text-5xl md:text-4xl lg:text-5xl text-black "><span className="text-[#DA0037]">Event</span>Makers</h1>
                
                </nav>
                <nav>
                    <header className="footer-title">S e r v i c e s</header>
                    <ul>
                        <Link to="/services/1"><li className="pb-2">Weddings</li></Link>
                        <Link to="/services/2"><li className="pb-2">Birthday Parties</li></Link>
                        <Link to="/services/3"><li className="pb-2">Anniversaries</li></Link>
                        <Link to="/services/4"><li className="pb-2">Engagement Parties</li></Link>
                        <Link to="/services/5"><li className="pb-2">Retirement Parties</li></Link>
                        <Link to="/services/6"><li className="pb-2">Baby Shower</li></Link>
                    </ul>
                </nav>
                <nav>
                    <header className="footer-title">S o c i a l</header>
                    <div className="grid grid-flow-col gap-4">
                        <Link><div className="text-3xl text-blue-500"><FaFacebook></FaFacebook></div></Link>
                        <Link><div className="text-3xl text-red-500"><FaInstagram></FaInstagram></div></Link>
                        <Link><div className="text-3xl text-red-700"><FaYoutube></FaYoutube></div></Link>
    
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Footer;