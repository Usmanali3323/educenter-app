import AboutUs from "../components/home/aboutUs"
import Course from "../components/home/course"
import Events from "../components/home/event"
import Latest from "../components/home/Latest"
import Scholarship from "../components/home/scholarship"
import Teacher from "../components/home/teacher"
import WorkShop from "../components/home/workshop"
import Main from "../components/main"

function Home() {

  return (
    <>
    <div className="xl:container mx-auto">
     <Main home={true} description='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad'/>
     <Scholarship/>
     <AboutUs/>
     <Course/>
     <WorkShop home={true}/>
     <Events/>
     <Teacher/>
     <Latest/>
     </div>
    </>
  )
}

export default Home
