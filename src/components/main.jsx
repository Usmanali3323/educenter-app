import { useState } from 'react';
import homeImg from '../assets/home/home.jpg';
import { motion } from 'framer-motion';
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

const Main = ({home=false,title='',description='',parent='Home'}) => {
    const [direction, setDirection] = useState("x");
    // const [`-100%`, set`-100%`] = useState("-100%");

    const toggleDirection = () => {
        setDirection((prev) => (prev === "x" ? "y" : "x"));
        // set`-100%`((prev) => (prev === "-100%" ? "100%" : "-100%"));
    };

    return (
        <section
            className={`relative top-[-5rem] ${home ? `min-h-screen` : `min-h-full`} bg-cover bg-center flex flex-col pt-7 md:justify-center lg:pt-20 pb-14  lg::pb-60`}
            style={{ backgroundImage: `url(${homeImg})` }}
        >
            <div className="absolute inset-0 bg-[#1a1a37] opacity-70"></div>
            <motion.div
                key={`${direction}-${`-100%`}`}
                initial={{ [direction]: `-100%` }}
                animate={{ [direction]: 0 }}
                transition={{ duration: 0.3, delay: 0.3 }}
                className="relative z-10 text-white font-font1 px-5 lg:px-12 w-full md:w-2/3 mt-14 lg:w-2/3"
            >
                {home ? 
                <h1 className="text-4xl lg:text-6xl font-bold leading-snug tracking-wide mb-6">
                    Your Bright Future is Our Mission
                </h1>
                :   <h1 className="text-2xl lg:text-4xl leading-snug tracking-wide mb-6 font-medium">
                <span className='text-predefineYellow font-bold'>{`${parent}>`}</span>{title}
            </h1>}
                <motion.p
                    initial={{ [direction]: `-100%` }}
                    animate={{ [direction]: 0 }}
                    transition={{ duration: 0.3, delay: 0.5 }}
                    className="mb-6"
                >
                    {description}
                </motion.p>
                {home ? 
                <motion.button
                    initial={{ [direction]: `-100%` }}
                    animate={{ [direction]: 0 }}
                    transition={{ duration: 0.3, delay: 0.5 }}
                    className="py-3 px-6 bg-predefineYellow text-white font-bold text-lg rounded-lg hover:bg-yellow-600 transition duration-300"
                >
                    Apply Now
                </motion.button>
                :''}
            </motion.div>
            {home ? 
            <div className='flex justify-end space-x-2 md:space-x-4 absolute bottom-5 md:bottom-36 right-5 md:right-10'>
                <MdArrowBackIos size={"3rem"} color='white' onClick={toggleDirection} className='cursor-pointer' />
                <MdArrowForwardIos size={"3rem"} color='white' onClick={toggleDirection} className='cursor-pointer' />
            </div>
            : '' }
        </section>
    );
};

export default Main;
