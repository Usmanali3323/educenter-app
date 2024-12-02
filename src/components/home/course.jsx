import course1 from '../../assets/home/course1.jpg';
import course2 from '../../assets/home/course-2.jpg';
import course3 from '../../assets/home/course-3.jpg';
import course4 from '../../assets/home/course-4.jpg';
import course5 from '../../assets/home/course-5.jpg';
import course6 from '../../assets/home/course-6.jpg';
import { MdOutlineDateRange } from "react-icons/md";

const Course = ({home=false,heading=true,title="Our Courses"}) => {
    const courseDetail = [
        {
            date: "02-14-2018",
            discipline: "Humanities",
            image: course1,
            title: "Photography",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna."
        },
        {
            date: "02-14-2018",
            discipline: "Humanities",
            image: course2,
            title: "Programming",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna."
        },
        {
            date: "02-14-2018",
            discipline: "Humanities",
            image: course3,
            title: "Lifestyle Archives",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna."
        },
        {
            date: "02-14-2018",
            discipline: "Humanities",
            image: course4,
            title: "Complete Freelancing",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna."
        },
        {
            date: "02-14-2018",
            discipline: "Humanities",
            image: course5,
            title: "Branding Design",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna."
        },
        {
            date: "02-14-2018",
            discipline: "Humanities",
            image: course6,
            title: "Art Design",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna."
        },
    ];

    return (
        <section className="py-10 px-5 md:px-10 bg-gray-100 font-font1 relative">
            <div className="mx-auto max-w-7xl">
                {heading ? 
                <div className="flex items-center mb-10">
                    <h1 className="text-3xl font-bold text-defineBlue">{title}</h1>
                    {home ? <div className="flex-grow mx-4 border-t-2 hidden md:flex border-gray-400"></div>  : ''}
                </div>
                :''}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {courseDetail.map((course, index) => (
                        <div key={index} className="bg-white shadow-lg overflow-hidden">
                            <img src={course.image} alt={course.title} className="w-full h-64 object-cover" />
                            <div className="p-6">
                                <div className="flex items-center text-textColor mb-4">
                                    <MdOutlineDateRange className="mr-2" />
                                    <span className="mr-4">{course.date}</span>
                                    <span>{course.discipline}</span>
                                </div>
                                <h2 className="text-xl font-semibold mb-2">{course.title}</h2>
                                <p className="text-textColor font-font1 mb-4">{course.description}</p>
                                <button className="py-2 px-4 bg-predefineYellow text-white font-bold rounded-md hover:bg-yellow-600 transition duration-300" aria-label={`Apply for ${course.title}`}>
                                    Apply Now
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
                {home ? 
                <div className='flex justify-center'>
                <button className="px-5 py-2 border-2 border-predefineYellow text-predefineYellow hover:bg-predefineYellow hover:text-white transition duration-300 m-auto md:m-0 mt-5 md:mt-0 md:absolute md:top-8 md:right-3 bg-white" aria-label="See all courses">
                    See All
                </button>
                </div>
                : ''}
            </div>
        </section>
    );
};

export default Course;
