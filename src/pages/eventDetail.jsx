import { IoLocationOutline } from "react-icons/io5";
import Main from "../components/main";
import eventImg from '../assets/courseDetail.jpg';
import { FiBookOpen } from "react-icons/fi";
import { IoMdTime } from "react-icons/io";
import { LuWallet } from "react-icons/lu";
import teacher from '../assets/teacher.jpg';
import Events from "../components/home/event";

export default function EventDetail() {
  return (
    <div className="font-font1 text-textColor md:mb-32 xl:container mx-auto">
      <Main
        parent="Our Courses"
        title="Photography"
        description="Our courses offer a good compromise between the continuous assessment favoured by some universities and the emphasis placed on final exams by others."
      />
      <section className="max-w-7xl mx-auto py-8 px-4 md:px-10">
        <h1 className="text-2xl md:text-3xl text-defineBlue font-bold">English Spoken</h1>

        {/* Course Image and Details */}
        <div className="md:flex md:items-center">
          <img src={eventImg} alt="Photography course" className="md:w-1/2 rounded-lg shadow-lg" />
          <div className="mt-6 md:mt-0 md:ml-8">
            <div className="flex items-center mt-4">
              <IoLocationOutline className="text-predefineYellow text-2xl" />
              <div className="ml-3">
                <h2 className="text-xl font-medium text-defineBlue">LOCATION</h2>
                <p>Dhanmondi, Dhaka</p>
              </div>
            </div>

            <div className="flex items-center mt-4">
              <FiBookOpen className="text-predefineYellow text-2xl" />
              <div className="ml-3">
                <h2 className="text-xl font-medium text-defineBlue">COURSES</h2>
                <p>06 Months</p>
              </div>
            </div>
            <div className="flex items-center mt-4">
              <IoMdTime className="text-predefineYellow text-2xl" />
              <div className="ml-3">
                <h2 className="text-xl font-medium text-defineBlue">DURATION</h2>
                <p>03 Hours</p>
              </div>
            </div>
            <div className="flex items-center mt-4">
              <LuWallet className="text-predefineYellow text-2xl" />
              <div className="ml-3">
                <h2 className="text-xl font-medium text-defineBlue">FEE</h2>
                <p>From: $699</p>
              </div>
            </div>
            <div className="mt-6">
              <button className="bg-predefineYellow font-semibold hover:text-predefineYellow hover:bg-white hover:border-2 hover:border-predefineYellow text-white py-2 px-4 rounded-lg transition">Apply Now</button>
            </div>
          </div>
        </div>

        {/* Course Description */}
        <div className="mt-12">
          <h1 className="text-2xl font-semibold text-defineBlue">About Course</h1>
          <p className="mt-4 text-justify leading-loose">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...
          </p>
        </div>

        {/* Instructor Section */}
        <h1 className="mt-12 mb-3 text-defineBlue text-2xl font-semibold">Teachers</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 bg-white p-6 ">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="flex items-center">
              <img src={teacher} alt={`Instructor ${i + 1}`} className="w-24 h-24 rounded-full" />
              <div className="ml-4">
                <h1 className="text-xl font-semibold text-defineBlue">Sam Somrat</h1>
                <h3 className="text-predefineYellow">Photographer</h3>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Events title={"More Events"}/>
    </div>
  );
}
