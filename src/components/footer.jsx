import logo from '../assets/logo/logo.png'
import { FaFacebookF, FaInstagram, FaLinkedin, FaGithubAlt } from "react-icons/fa";


const Footer = () => {
    return (
        <section className="bg-defineBlue pb-10 md:px-5 lg:px-10 relative">
            <div className="bg-predefineYellow px-4 md:px-10 py-10 md:py-16 flex flex-col justify-center w-full md:w-2/3 mb-20 relative md:bottom-32 md:right-[-33%]">
                <h1 className="text-white font-font1 text-2xl md:text-3xl font-bold mb-4">Subscribe Now</h1>
                <div className="flex bg-white p-1 w-full rounded-md overflow-hidden">
                    <input
                        type="text"
                        className="p-3 w-full lg:w-auto flex-1 rounded-l-md outline-none"
                        placeholder="Enter your email"
                    />
                    <button className="p-2 md:p-3 text-2xl font-font1 bg-predefineYellow text-white rounded-r-md hover:bg-blue-800 transition duration-300 px-4 md:px-8">
                        Join
                    </button>
                </div>
            </div>
            <div className="px-5 md:px-0 grid grid-cols-1 md:grid-cols-11 md:gap-5 lg:gap-8 text-textColor">
                <div className='col-span-1 md:col-span-3'>
                    <img src={logo} alt='educenter' className='mb-4'/>
                    <p className="">23621 15 Mile Rd #C104, Clinton MI, 48035, New York, USA</p>
                    <p>+1 (2) 345 6789</p>
                    <p>+1 (2) 345 6789</p>
                    <p>contact@yourdomain.com</p>               
                </div>
                <div className='col-span-1 md:col-span-2'>
                    <h2 className="text-xl text-white  mb-7 pt-5">Company</h2>
                    <ul className=" space-y-2">
                        <li className=" cursor-pointer hover:text-predefineYellow transition duration-300 ">About Us</li>
                        <li className=" cursor-pointer hover:text-predefineYellow transition duration-300">Our Teacher</li>
                        <li className=" cursor-pointer hover:text-predefineYellow transition duration-300">Contact</li>
                        <li className=" cursor-pointer hover:text-predefineYellow transition duration-300">Blog</li>
                    </ul>
                </div>

                <div className='col-span-1 md:col-span-2'>
                    <h2 className="text-white text-xl mb-7 pt-5">LINKS</h2>
                    <ul className=" space-y-2">
                        <li className=" cursor-pointer hover:text-predefineYellow transition duration-300">Courses</li>
                        <li className=" cursor-pointer hover:text-predefineYellow transition duration-300">Events</li>
                        <li className=" cursor-pointer hover:text-predefineYellow transition duration-300">Notice</li>
                        <li className=" cursor-pointer hover:text-predefineYellow transition duration-300">Scholarship</li>
                    </ul>
                </div>

                <div className='col-span-1 md:col-span-2'>
                    <h2 className="text-white text-xl mb-7 pt-5">SUPPORT</h2>
                    <ul className=" space-y-2">
                        <li className=" cursor-pointer hover:text-predefineYellow transition duration-300">Forums</li>
                        <li className=" cursor-pointer hover:text-predefineYellow transition duration-300">Documentation</li>
                        <li className=" cursor-pointer hover:text-predefineYellow transition duration-300">Language</li>
                        <li className=" cursor-pointer hover:text-predefineYellow transition duration-300">Release Status</li>
                    </ul>
                </div>
                <div className='col-span-1 md:col-span-2'>
                    <h2 className="text-white text-xl mb-7 pt-5">RECOMMEND</h2>
                    <ul className=" space-y-2">
                        <li className=" cursor-pointer hover:text-predefineYellow transition duration-300">WordPress</li>
                        <li className=" cursor-pointer hover:text-predefineYellow transition duration-300">LearnPress</li>
                        <li className=" cursor-pointer hover:text-predefineYellow transition duration-300">WooCommerce</li>
                        <li className=" cursor-pointer hover:text-predefineYellow transition duration-300">bbPress</li>
                    </ul>
                </div>
            </div>
            <div className='h-1 shadow-boom mt-16'></div>
            <div className='flex flex-col md:flex-row justify-center md:justify-between px-5 md:px-0 pt-8'>
                    <p className="text-sm mb-4 font-font1 text-textColor text-center md:text-start">Copyright © 2024 , designed & developed by <a href='https://portflio-4ac1d.firebaseapp.com/' className='text-white cursor-pointer'>Usman</a></p>
                    <ul className="flex space-x-4 text-predefineYellow md:text-white justify-center">
                        <li>
                            <a href={"https://www.facebook.com/profile.php?id=100056550216667"} >
                           <FaFacebookF className='cursor-pointer hover:text-predefineYellow transition-shadow'/>
                           </a>
                        </li>
                        <li>
                            <a href={"https://www.instagram.com/usman106525/"}>
                            <FaInstagram   className='cursor-pointer hover:text-predefineYellow transition-shadow'/>
                            </a>
                        </li>
                        <li>
                            <a href={"https://www.linkedin.com/in/usman-ali-8aa5a223b/"}>
                            <FaLinkedin  className='cursor-pointer hover:text-predefineYellow transition-shadow'/>
                            </a>
                        </li>
                        <li>
                            <a  href={"https://github.com/Usmanali3323"}>
                            <FaGithubAlt className='cursor-pointer hover:text-predefineYellow transition-shadow'/>
                            </a>
                        </li>
                    </ul>
                </div>
        </section>
    );
};

export default Footer;
