import scholarship1 from "../../assets/scholarship/scholarship1.jpg";
import scholarship2 from "../../assets/scholarship/scholarship2.jpg";
import scholarship3 from "../../assets/scholarship/scholarship3.jpg";
import scholarship4 from "../../assets/scholarship/scholarship4.jpg";
import { GoDotFill } from "react-icons/go";

export default function ScholarshipComp() {

    const scholarship = [
        {
            image: scholarship2,
            discipline: "Engineering",
            domain: "CHEMICAL ENGINEERING",
            outline: ["Institutes", "Smart-affiliated research", "Digital Access to Scholarship", "Smart Catalyst", "Smart Library Portal", "Smart research programs"],
        },
        {
            image: scholarship3,
            discipline: "Design & Arts",
            domain: "MUSIC & ARTS",
            outline: ["Institutes", "Smart-affiliated research", "Digital Access to Scholarship", "Smart Catalyst", "Smart Library Portal", "Smart research programs"],
        },
        {
            image: scholarship4,
            discipline: "Design & Arts",
            domain: "GRAPHICS DESIGN",
            outline: ["Institutes", "Smart-affiliated research", "Digital Access to Scholarship", "Smart Catalyst", "Smart Library Portal", "Smart research programs"],
        }
    ]

    return (
        <section className="py-8 px-5 md:px-10 bg-gray-100">
            <div className="max-w-7xl mx-auto">
                <div className="relative grid md:grid-cols-2 md:gap-10">
                    <div className="col-span-1">
                    <img src={scholarship1} alt="scholarship" className="w-full h-96 object-cover rounded-lg shadow-lg" />
                    </div>
                    <div className="flex flex-col text-textColor py-6 rounded-lg col-span-1">
                        <h1 className="text-defineBlue text-3xl font-bold mb-2">SCHOLARSHIPS NEWS</h1>
                        <h2 className=" text-lg font-medium">Our campuses are living laboratories for sustainability.</h2>
                    <p className="mt-6 text-gray-700 text-justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas cum ut ab nesciunt distinctio maxime expedita fugit laborum? Aliquid, quia.</p>
                    </div>
                </div>
            </div>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto  text-textColor">
                {scholarship.map((item, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-lg">
                        <img src={item.image} alt="scholarship" className="w-full h-72 object-cover rounded-t-lg" />
                        <div className="p-4">
                            <p className="text-predefineYellow text-sm font-semibold uppercase">{item.discipline}</p>
                            <h1 className="text-xl font-bold mt-2 mb-4">{item.domain}</h1>
                            <ul className="space-y-2">
                                {item.outline.map((outlineItem, idx) => (
                                    <li key={idx} className="flex items-center">
                                        <GoDotFill className="text-predefineYellow mr-2" />
                                        <p>{outlineItem}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
