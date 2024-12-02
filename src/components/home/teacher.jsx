import React from 'react';
import teacher1 from '../../assets/home/teacher/teacher1.jpg';
import teacher2 from '../../assets/home/teacher/teacher2.jpg';
import teacher3 from '../../assets/home/teacher/teacher3.jpg';
import { IoLocationOutline } from "react-icons/io5";
import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa";
import { TfiGoogle } from "react-icons/tfi";

const Teacher = ({page=false}) => {
    const teacherDetail = [
        {
            name: "Jacke Masito",
            profession: "Teacher",
            image: teacher1,  
            facebook: "https://www.facebook.com/profile.php?id=100056550216667",
            instagram: "https://www.instagram.com/usman106525/",
            google: "https://www.google.com/",
            linkedin: "https://www.linkedin.com/in/usman-ali-8aa5a223b/",       
        },
        {
            name: "Clark Malik",
            profession: "Teacher",
            image: teacher2,
            facebook: "https://www.facebook.com/profile.php?id=100056550216667",
            instagram: "https://www.instagram.com/usman106525/",
            google: "https://www.google.com/",
            linkedin: "https://www.linkedin.com/in/usman-ali-8aa5a223b/", 
        },
        {   
            name: "John Doe",
            profession: "Teacher",
            image: teacher3,
            facebook: "https://www.facebook.com/profile.php?id=100056550216667",
            instagram: "https://www.instagram.com/usman106525/",
            google: "https://www.google.com/",
            linkedin: "https://www.linkedin.com/in/usman-ali-8aa5a223b/", 
        },
    ];
 if(page){
    teacherDetail.push(...teacherDetail);
 }
    return (
        <section className="py-10 px-5 md:px-10 bg-gray-100 font-font1 relative">
            <div className="mx-auto max-w-7xl">
                <div className="flex items-center mb-10">
                    <h1 className="text-3xl md:text-4xl font-bold text-defineBlue">Our Teachers</h1>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {teacherDetail.map((teacher, index) => (
                        <div key={index} className="bg-white hover:shadow-lg overflow-hidden relative font-font1">
                            <img src={teacher.image} alt={teacher.name} className="w-full h-96 object-cover" />
                            <div className="p-6">
                            <h2 className="text-2xl text-defineBlue font-bold mb-2">{teacher.name}</h2>
                                <div className="flex items-center text-textColor mb-4">
                                    <span>{teacher.profession}</span>
                                </div>
                                <div className="flex space-x-4 mt-4">
                                    <a href={teacher.facebook} target="_blank" rel="noopener noreferrer" className="text-textColor hover:text-predefineYellow transition">
                                        <FaFacebookF  size={"1.2rem"}/>
                                    </a>
                                    <a href={teacher.instagram} target="_blank" rel="noopener noreferrer" className="text-textColor hover:text-predefineYellow transition">
                                        <FaInstagram size={"1.2rem"}/>
                                    </a>
                                    <a href={teacher.google} target="_blank" rel="noopener noreferrer" className="text-textColor hover:text-predefineYellow transition">
                                        <TfiGoogle size={"1.2rem"}/>
                                    </a>
                                    <a href={teacher.linkedin} target="_blank" rel="noopener noreferrer" className="text-textColor hover:text-predefineYellow transition">
                                        <FaLinkedin size={"1.2rem"}/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Teacher;
