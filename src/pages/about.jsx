import AboutComp from "../components/about/aboutcomp";
import Teacher from "../components/home/teacher";
import WorkShop from "../components/home/workshop";
import Main from "../components/main";

const About =()=>{
    return (
        <div className="xl:container md:mb-24">
      <Main title="About Us" description="Our courses offer a good compromise between the continuous assessment favoured by some universities and the emphasis placed on final exams by others."/>
      <AboutComp/>
      <WorkShop/>
      <Teacher/>
      </div>
    )
}
export default About;