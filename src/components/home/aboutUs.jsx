import AboutUsImg from '../../assets/home/aboutus.jpg';

const AboutUs = () => {
    return (
        <section className="py-10 px-5 md:px-10 bg-white relative top-[-3rem]">
            <div className=" mx-auto flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 space-y-4 font-font1">
                    <h1 className="text-3xl md:text-4xl font-bold text-defineBlue mb-5">About Educenter</h1>
                    <p className="text-gray-600 text-base mb-5 leading-loose">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat.
                    </p>
                    <p className="text-gray-600 text-base mb-10 leading-loose">
                        Cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem.
                    </p>
                    <button className="py-3 px-6 text-predefineYellow hover:text-white font-bold text-lg rounded-lg border-predefineYellow border-2 hover:bg-predefineYellow transition duration-300">
                        Learn More
                    </button>
                </div>
                <div className="md:w-1/2 mt-10 md:mt-0 md:ml-10">
                    <img src={AboutUsImg} alt='aboutUs' className="w-full h-auto object-cover" />
                </div>
            </div>
        </section>
    )
}

export default AboutUs;
