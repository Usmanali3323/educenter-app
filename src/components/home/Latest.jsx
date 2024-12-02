import { TiThSmall } from 'react-icons/ti';
import latest1 from '../../assets/home/latest/latest1.jpg';
import latest2 from '../../assets/home/latest/latest2.jpg';
import latest3 from '../../assets/home/latest/latest3.jpg';
import { MdOutlineDateRange } from "react-icons/md";

const Latest = ({blog=false}) => {
    const latestNews= [
        {
            date: "August 28, 2018",
            discipline: "By Somrat Sorkar",
            image: latest1,
            title: "Lorem ipsum dolor amet, adipisicing eiusmod tempor.",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicin"
        },
        {
            date: "August 13, 2018",
            discipline: "By Jonathon Drew",
            image: latest2,
            title: "Lorem ipsum dolor amet, adipisicing eiusmod tempor.",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicin"
        },
        {
            date: "August 24, 2018",
            discipline: " By Alex Pitt",
            image: latest3,
            title: "Lorem ipsum dolor amet, adipisicing eiusmod tempor.",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicin"
        },
    ];
    if(blog){
        while (latestNews.length < 6) {
            latestNews.push(...latestNews.slice(0, 6 - latestNews.length));
        }
    }

    return (
        <section className={`py-10 px-5 md:px-10 bg-gray-100 font-font1 relative mb-20 md:mb-36`}>
            <div className="mx-auto max-w-7xl"> 
                <div className="flex items-center mb-10">
                    <h1 className="text-3xl font-bold text-defineBlue">Latest News</h1>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {latestNews.map((l, index) => (
                        <div key={index} className="bg-white shadow-lg overflow-hidden">
                            <img src={l.image} alt={l.title} className="w-full h-64 object-cover" />
                            <div className="p-6">
                                <div className="flex items-center text-textColor mb-4">
                                    <MdOutlineDateRange className="mr-2" />
                                    <span className="mr-4">{l.date}</span>
                                    <span>{l.discipline}</span>
                                </div>
                                <h2 className="text-xl font-semibold mb-2">{l.title}</h2>
                                <p className="text-textColor font-font1 mb-4">{l.description}</p>
                                <button className="py-2 px-4 bg-predefineYellow text-white font-bold rounded-md hover:bg-yellow-600 transition duration-300" aria-label={`Apply for ${l.title}`}>
                                    Read More
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Latest;
