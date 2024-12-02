import { FaTimes } from 'react-icons/fa';

const Register = ({ reg,setReg }) => {
    
    if (!reg) return null; 

    return (
        <section className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-60 z-[1050]">
            <form className="relative bg-white p-8 rounded-lg shadow-lg w-full max-w-md mx-4">
                <button
                    onClick={(e) =>{e.preventDefault(); setReg(false)}}
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 focus:outline-none"
                    aria-label="Close"
                >
                    <FaTimes className="w-6 h-6" />
                </button>

                <h2 className="text-2xl font-semibold text-center mb-6 text-defineBlue">Sign Up</h2>
                <div className="mb-4">
                    <input 
                        type="text" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-predefineYellow" 
                        placeholder="Phone" 
                    />
                </div>
                <div className="mb-4">
                    <input 
                        type="text" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-predefineYellow" 
                        placeholder="Name"
                    />
                </div>
                <div className="mb-4">
                    <input 
                        type="email" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-predefineYellow" 
                        placeholder="Email" 
                    />
                </div>
                <div className="mb-6">
                    <input 
                        type="password" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-predefineYellow" 
                        placeholder="Password" 
                    />
                </div>
                <button 
                    type="submit" 
                    className="w-full bg-predefineYellow text-white py-2 rounded-md outline-predefineYellow transition duration-300">
                    Sign Up
                </button>
            </form>
        </section>
    );
};

export default Register;
