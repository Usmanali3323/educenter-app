import event1 from '../../assets/home/events/event1.jpg'
import event2 from '../../assets/home/events/event2.jpg'
import event3 from '../../assets/home/events/event3.jpg'
import { IoLocationOutline } from "react-icons/io5";

const Events = ({home=false,heading=true,title="Upcoming Events"}) => {
    const UpcomingEventsDetail = [
        {
            date:18,
           location:"Dhanmondi Lake, Dhaka",
            image: event1,
            title: "Lorem ipsum dolor amet, consectetur adipisicing.",
           
        },
        {
            date:21,
            location:"Dhanmondi Lake, Dhaka",
            image: event2,
            title: "Lorem ipsum dolor amet, consectetur adipisicing.",
           
        },
        {   
            date:23,
            location:"Dhanmondi Lake, Dhaka",
            image: event3,
            title: "Lorem ipsum dolor amet, consectetur adipisicing.",
           
        },
    ];

    return (
        <section className="py-10 px-5 md:px-10 bg-gray-100 font-font1 relative">
            <div className="mx-auto max-w-7xl">
                <div className="flex items-center mb-10">
                  {heading ?   <h1 className=" text-3xl md:text-4xl font-bold text-defineBlue">{title}</h1> : ''}
                    {home ? <div className="flex-grow mx-4 border-t-2 hidden md:flex border-gray-400"></div> : ''}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {UpcomingEventsDetail.map((UpcomingEvents, index) => (
                        <div key={index} className="bg-white shadow-lg overflow-hidden relative">
                            <img src={UpcomingEvents.image} alt={UpcomingEvents.title} className="w-full h-64 object-cover" />
                            <div className='flex flex-col bg-predefineYellow text-white absolute top-0 py-3 px-2 font-font1 text-center'>
                            <p className='text-2xl font-bold'>{UpcomingEvents.date}</p>
                            <p className='text-xl font-bold uppercase'>December</p>
                            </div>
                            <div className="p-6">
                                <div className="flex items-center text-textColor mb-4">
                                    <IoLocationOutline className="mr-2" color='red'/>
                                    <span className="mr-4">{UpcomingEvents.location}</span>
                                </div>
                                <h2 className="text-2xl text-defineBlue font-bold mb-2">{UpcomingEvents.title}</h2>
                            </div>
                        </div>
                    ))}
                </div>
                {home ?
                <div className='flex justify-center'>
                <button className="px-5 py-2 border-2 border-predefineYellow text-predefineYellow hover:bg-predefineYellow hover:text-white transition duration-300 m-auto md:m-0 mt-5 md:mt-0 md:absolute md:top-8 md:right-3 bg-white" aria-label="See all UpcomingEventss">
                    See All
                </button>
                </div>
                : ''}
            </div>
        </section>
    );
};

export default Events;
