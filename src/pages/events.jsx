import Main from "../components/main";
import EventsComp from '../components/home/event.jsx'

const Events =()=>{
    return(
       <div className="xl:container md:mb-24">
        <Main title="Upcoming Events" description="Our courses offer a good compromise between the continuous assessment favoured by some universities and the emphasis placed on final exams by others."/>
        <EventsComp/>
        <EventsComp heading={false}/>
       </div>
    )
}
export default Events;