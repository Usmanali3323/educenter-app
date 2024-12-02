import Main from "../components/main";
import courseImg from '../assets/courseDetail.jpg';
import { FiBookOpen } from "react-icons/fi";
import { IoMdTime } from "react-icons/io";
import { LuWallet } from "react-icons/lu";
import { GoDotFill } from "react-icons/go";
import teacher from '../assets/teacher.jpg';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import Course from "../components/home/course";

export default function CourseDetail() {
  return (
    <div className="font-font1 text-textColor md:mb-32 xl:container mx-auto">
      <Main
        parent="Our Courses"
        title="Photography"
        description="Our courses offer a good compromise between the continuous assessment favoured by some universities and the emphasis placed on final exams by others."
      />

      <section className="max-w-7xl mx-auto py-8 px-4 md:px-10">
        {/* Course Image and Details */}
        <div className="md:flex md:items-center">
          <img src={courseImg} alt="Photography course" className="md:w-1/2 rounded-lg shadow-lg" />
          <div className="mt-6 md:mt-0 md:ml-8">
            <h1 className="text-3xl font-semibold text-defineBlue">Photography</h1>
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
              <button className="bg-predefineYellow font-semibold hover:text-predefineYellow hover:bg-white  hover:border-2 hover:border-predefineYellow text-white py-2 px-4 rounded-lg  transition">Apply Now</button>
            </div>
          </div>
        </div>

        {/* Course Description and Requirements */}
        <div className="mt-12">
          <div>
            <h1 className="text-2xl font-semibold text-defineBlue">About Course</h1>
            <p className="mt-4 text-justify">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...
            </p>
          </div>

          <div className="mt-12">
            <h1 className="text-2xl font-semibold text-defineBlue">Requirements</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              {Array.from({ length: 8 }).map((_, i) => (
                <div key={i} className="flex items-center">
                  <GoDotFill className="text-predefineYellow mr-2" />
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* How to Apply Section */}
        <div className="mt-12">
          <h1 className="text-2xl font-semibold text-defineBlue">How to Apply</h1>
          <div className="mt-4 space-y-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="flex items-center">
                <GoDotFill className="text-predefineYellow mr-2" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae obcaecati unde nulla? Lorem, ipsum dolor.</p>
              </div>
            ))}
          </div>
        </div>

        {/* Fees and Funding */}
        <div className="mt-12">
          <h1 className="text-2xl font-semibold text-defineBlue">Fees and Funding</h1>
          <p className="mt-4 text-justify">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...
          </p>
        </div>

        {/* Instructor Section */}
        <h1 className="mt-12 mb-3 text-defineBlue text-2xl font-semibold">Teacher</h1>
        <div className=" md:flex md:items-center md:justify-between bg-white">
          <div className="flex items-center">
            <img src={teacher} alt="Instructor Sam Somrat" className="w-24 h-24 rounded-full" />
            <div className="ml-4">
              <h1 className="text-xl font-semibold text-defineBlue">Sam Somrat</h1>
              <h3 className="text-predefineYellow">Photographer</h3>
            </div>
          </div>
          <div className="mt-6 md:mt-0">
            <h1 className="text-xl font-semibold">Social Links</h1>
            <div className="flex space-x-4 mt-2">
              <FaFacebook className="text-predefineYellow text-2xl cursor-pointer hover:text-blue-600" />
              <FaTwitter className="text-predefineYellow text-2xl cursor-pointer hover:text-blue-400" />
              <FaLinkedin className="text-predefineYellow text-2xl cursor-pointer hover:text-blue-700" />
              <FaInstagram className="text-predefineYellow text-2xl cursor-pointer hover:text-pink-500" />
            </div>
          </div>
        </div>
      </section>
      <Course title={"Retated Courses"}/>
    </div>
  );
}
