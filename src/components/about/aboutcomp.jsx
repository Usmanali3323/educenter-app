import AboutImg from '../../assets/about/image1.jpg';

const AboutComp = () => {
    return (
        <div className='flex flex-col px-5 md:px-10 py-10'>
            <div className='mb-10 w-full h-auto'>
                <img src={AboutImg} alt="About Us" className="w-full h-auto rounded-lg shadow-lg"/>
            </div>
            <div className='font-font1 text-textColor'>
                <h1 className='text-defineBlue text-3xl font-bold mb-5'>
                    ABOUT OUR JOURNEY
                </h1>
                <p className='py-5 leading-relaxed'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe ipsa illo quod veritatis, magni debitis fugiat dolore voluptates! Consequatur, aliquid. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat perferendis sint optio similique. Et amet magni facilis vero corporis quos.
                </p>
                <p className='leading-relaxed'>
                    Exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum a, facere fugit error accusamus est officiis vero in, nostrum laboriosam corrupti explicabo, cumque repudiandae deleniti perspiciatis quae consectetur enim. Laboriosam!
                </p>
            </div>
        </div>
    );
};

export default AboutComp;
