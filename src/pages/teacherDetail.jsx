import teacher1 from '../assets/home/teacher/teacher1.jpg';
import Course from '../components/home/course.jsx'
import { MdOutlineEmail } from "react-icons/md";
import { IoIosPhonePortrait } from "react-icons/io";
import { FaFacebookF, FaSkype, FaTwitter, FaGlobe } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import Main from '../components/main';

export default function TeacherDetail() {
  return (
    <div className='xl:container md:mb-32 mx-auto'>
    <Main parent={"Our Teacher"} title='John Doe' description='Our courses offer a good compromise between the continuous assessment favoured by some universities and the emphasis placed on final exams by others.'/>
    <section className="py-8 px-4 font-font1 text-textColor">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row bg-white overflow-hidden">
        <div className="md:w-1/3">
          <img src={teacher1} alt="John Doe" className="w-full h-auto object-cover" />
        </div>
        <div className="md:w-2/3 p-6">
          <h1 className="text-2xl font-bold mb-3">John Doe</h1>
          <h2 className="text-lg font-medium text-predefineYellow mb-4">Computer Science</h2>
          <p className="mb-6 leading-relaxed">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque accusamus tenetur ea harum delectus ab consequatur excepturi, odit qui in quo quia voluptate nam optio, culpa aspernatur. Error placeat iusto officia voluptas quae.</p>

          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h1 className="text-xl font-semibold mb-3">Contact Info:</h1>
              <div className="flex items-center mb-3">
                <MdOutlineEmail className="text-predefineYellow mr-2" />
                <p>johndoe@email.com</p>
              </div>
              <div className="flex items-center mb-3">
                <IoIosPhonePortrait className="text-predefineYellow mr-2" />
                <p>+120 345 876</p>
              </div>
              <div className="flex items-center mb-3">
                <FaFacebookF className="text-predefineYellow mr-2" />
                <p>John Doe</p>
              </div>
              <div className="flex items-center mb-3">
                <FaTwitter className="text-predefineYellow mr-2" />
                <p>John Doe</p>
              </div>
              <div className="flex items-center mb-3">
                <FaSkype className="text-predefineYellow mr-2" />
                <p>John Doe</p>
              </div>
              <div className="flex items-center mb-3">
                <FaGlobe className="text-predefineYellow mr-2" />
                <p>johnDoe.com</p>
              </div>
              <div className="flex items-center mb-3">
                <CiLocationOn className="text-predefineYellow mr-2" />
                <p>1313 Boulevard Cremazie, Quebec</p>
              </div>
            </div>

            <div>
              <h1 className="text-xl font-semibold mb-3">Summary of Activities/Interests</h1>
              <p className="mb-2">Computer Networking</p>
              <p className="mb-2">Computer Security</p>
              <p className="mb-2">Human Computer Interfacing</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-10 bg-white p-6"> 
        <h1 className="text-2xl font-bold mb-4">Biography</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto.</p>
      </div>
    </section>
    <Course/>
    </div>
  );
}
