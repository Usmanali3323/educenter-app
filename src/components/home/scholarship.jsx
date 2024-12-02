import scholarshipImage from '../../assets/home/scholarship.png';
import { IoBookOutline } from "react-icons/io5";
import { TfiBlackboard, TfiWrite } from "react-icons/tfi";
import { GiAchievement } from "react-icons/gi";

const Scholarship = () => {

    const data = [
        {
            image: IoBookOutline,
            title: "Scholarship News",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad"
        },
        {
            image: TfiBlackboard,
            title: "Our Notice Board",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad"
        },
        {
            image: GiAchievement,
            title: "Our Achievement",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad"
        },
        {
            image: TfiWrite,
            title: "New Admission",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad"
        }
    ];

    return (
        <section className="pl-4 py-4 md:pl-8 md:py-8 grid grid-cols-1 lg:grid-cols-7 gap-8 bg-[#f8f8f8] relative top-[-5rem]">
            <div className="col-span-1 lg:col-span-2 flex justify-center">
                <img src={scholarshipImage} alt="Scholarship" className="w-full h-auto" />
            </div>
            <div className="lg:p-10 col-span-1 lg:col-span-5 grid grid-cols-1 md:grid-cols-2 gap-8 bg-[#f8f8f8] relative lg:top-[-24%]">
                {data.map((e, i) => {
                    const Icon = e.image;
                    return (
                        <div key={i} className="p-4 flex flex-col items-center text-center md:items-start md:text-left">
                            <Icon className="text-6xl mb-4 text-predefineYellow" />
                            <h1 className="text-xl font-bold mb-2">{e.title}</h1>
                            <p className="text-gray-700">{e.description}</p>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default Scholarship;
