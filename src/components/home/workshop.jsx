import React, { useState,useEffect} from 'react';
import workShopImg from '../../assets/home/background/workshop.jpg';
import { FaPlay } from "react-icons/fa";
import ReactModal from 'react-modal';

const WorkShop = ({home=false}) => {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    const [teacher, setTeacher] = useState(0); 
    const [courses, setCourses] = useState(0);
    const [student, setStudent] = useState(0);
    const [client, setClient] = useState(0);
    useEffect(() => {
        let interval;
        let count = 0;
        
        interval = setInterval(() => {
            if (count < 10) { 
                const numberOfTeacher = Math.floor(Math.random() * 100) + 1;
                setTeacher(numberOfTeacher);
                setCourses(numberOfTeacher)
                setStudent(numberOfTeacher);
                setClient(numberOfTeacher)
                count++;
            } else {
                clearInterval(interval);
                setTeacher(60); 
                setCourses(50)
                setStudent(1000)
                setClient(3737)
            }
        }, 100); 

        return () => clearInterval(interval);
    }, []);


    return (
        <section>
            {home ? 
            <div className="bg-predefineYellow text-white p-10 flex justify-center items-center flex-col text-center">
                <h2 className="text-xl font-semibold mb-2">Click to Join the Advanced Workshop</h2>
                <h1 className="text-3xl font-bold mb-4">Training in Advanced Networking</h1>
                <button className="py-2 px-4 bg-white text-predefineYellow font-bold rounded-md hover:bg-gray-200 transition duration-300">
                    Join Now
                </button>
            </div>
            :
            <div className="bg-predefineYellow text-white p-10 flex flex-col md:flex-row justify-between items-center text-center">
            <div className='my-5'>
            <h1 className="text-3xl font-bold mb-2">{teacher}</h1>
            <h1 className='text-2xl font-bold'>Teachers</h1>
            </div>
            <div className='my-5'>
            <h1 className="text-3xl font-bold mb-4">{courses}</h1>
            <h1 className='text-2xl font-bold'>Courses</h1>
            </div>
            <div className='my-5'>
            <h1 className="text-3xl font-bold mb-2">{student}</h1>
            <h1 className='text-2xl font-bold'>Students</h1>
            </div>
            <div className='my-5'>
            <h1 className="text-3xl font-bold mb-4">{client}</h1>
            <h1 className='text-2xl font-bold'>Satisfied Client</h1>
            </div>
          </div>
           }
            <div className="relative min-h-screen bg-cover bg-center py-16 flex flex-col md:flex-row justify-center md:justify-between items-center" style={{ backgroundImage: `url(${workShopImg})` }}>
                <div className="inset-0 flex flex-col space-y-5 md:flex-row md:space-y-0 items-center justify-between p-5 md:px-12 lg:px-16 text-white">
                    <div className="mb-5 md:mb-0 md:mr-5">
                        <button onClick={openModal} className="bg-predefineYellow p-5 rounded-full">
                            <FaPlay color="white" size="2em" />
                        </button>
                    </div>
                    <div className="bg-white bg-opacity-90 p-6 rounded-lg text-textColor w-full md:w-3/4 lg:w-1/2 font-font1 md:p-10 lg:p-14">
                        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-defineBlue">Success Stories</h1>
                        <p className="mb-4 leading-loose">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat.
                        </p>
                        <p className="leading-loose">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
                        </p>
                    </div>
                </div>
            </div>
            <ReactModal 
                isOpen={isOpen}
                onRequestClose={closeModal}
                contentLabel="Video Modal"
                className="modal"
                overlayClassName="overlay"
                ariaHideApp={false}
            >
                <div className="relative">
                    <button onClick={closeModal} className="absolute top-0 right-0 p-2 text-white bg-black bg-opacity-50 rounded-full z-10">
                        &times;
                    </button>
                    <iframe 
                        width="100%" 
                        height="500" 
                        src="https://www.youtube.com/embed/nA1Aqp0sPQo?autoplay=1" 
                        title="YouTube video player" 
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen
                    ></iframe>
                </div>
            </ReactModal>
        </section>
    );
};

export default WorkShop;
