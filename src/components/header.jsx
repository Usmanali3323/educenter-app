import { useState, useEffect } from 'react';
import { FaFacebookF, FaTwitter, FaGithubAlt, FaInstagram, FaBars, FaTimes } from 'react-icons/fa';
import { FiChevronDown } from 'react-icons/fi';
import logo from '../assets/logo/logo.png';
import { NavLink } from 'react-router-dom';

const Header = ({setLogin,setReg}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [atTop, setAtTop] = useState(true);
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const [subSubmenuOpen, setSubSubmenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleSubmenu = () => {
    setSubmenuOpen(!submenuOpen);
  };

  const toggleSubSubmenu = () => {
    setSubSubmenuOpen(!subSubmenuOpen);
  };

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setAtTop(false);
    } else {
      setAtTop(true);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <section className="grid grid-cols-1 lg:grid-cols-4 text-gray-700 gap-4 p-4 relative z-20 bg-white">
        <div className="col-span-1 lg:col-span-2 flex items-center justify-center lg:justify-between space-x-5 lg:w-3/5 lg:pl-8 font-font1">
          <button className="text-xs font-bold md:mb-0 cursor-pointer hover:text-yellow-500">
            CALL +44 300 303 0266
          </button>
          <div className="flex space-x-4">
            <FaFacebookF size="0.9em" className="cursor-pointer hover:text-yellow-500" />
            <FaTwitter size="0.9em" className="cursor-pointer hover:text-yellow-500" />
            <FaGithubAlt size="0.9em" className="cursor-pointer hover:text-yellow-500" />
            <FaInstagram size="0.9em" className="cursor-pointer hover:text-yellow-500" />
          </div>
        </div>
        <div className="col-span-1 lg:col-span-2 flex justify-center lg:justify-end font-font1 bg-cover bg-center">
          <div className="flex justify-center lg:justify-end items-end space-y-2 md:space-y-0 space-x-2 flex-wrap md:space-x-8 lg:space-x-6 md:w-2/3 lg:w-full lg:pr-10">
          <NavLink to={'/notice'} ><h1 className="text-xs font-semibold uppercase cursor-pointer hover:text-yellow-500">Notice</h1></NavLink>
            <NavLink to={'/research'} ><h1 className="text-xs font-semibold uppercase cursor-pointer hover:text-yellow-500">Research</h1></NavLink>
            <NavLink to={'/scholarship'} ><h1 className="text-xs font-semibold uppercase cursor-pointer hover:text-yellow-500">Scholarship</h1></NavLink>
            <h1 className="text-xs font-semibold uppercase cursor-pointer hover:text-yellow-500" onClick={()=>setLogin(true)}>Login</h1>
            <h1 className="text-xs font-semibold uppercase cursor-pointer hover:text-yellow-500" onClick={()=>setReg(true)}>Register</h1>
          </div>
        </div>
      </section>
      <section className={`sticky top-0 shadow-md z-40 ${atTop ? 'lg:bg-transparent' : 'bg-[#1a1a37]'} ${menuOpen ? 'bg-[#1a1a37]' : ''}`}>
        <div className="mx-auto flex flex-col items-center py-4 px-4 lg:py-0 lg:px-0 lg:flex-row lg:justify-between">
          <div className="flex items-center justify-between w-full lg:w-auto lg:pl-12">
            <img src={logo} alt="educenter" className="h-10 lg:h-16 cursor-pointer" />
            <button className="lg:hidden text-white" onClick={toggleMenu}>
              {menuOpen ? <FaTimes size="1.5em" /> : <FaBars size="1.5em" />}
            </button>
          </div>
          <div className={`w-full ${menuOpen ? 'flex' : 'hidden'} flex-col items-center lg:flex lg:flex-row lg:items-center lg:w-auto mt-4 lg:mt-0 lg:p-5 lg:pr-10 lg:bg-predefineYellow`}>
            <ul className="flex flex-col items-center lg:flex-row lg:space-x-10 text-sm font-medium text-white relative">
            <NavLink to={'/'}><li className="cursor-pointer py-2 lg:border-b-4 lg:border-predefineYellow lg:hover:border-white">Home</li></NavLink>
        <NavLink to={'/about'}>      <li className="cursor-pointer py-2 lg:border-b-4 lg:border-predefineYellow lg:hover:border-white">About</li></NavLink>
        <NavLink to={'/courses'}>      <li className="cursor-pointer py-2 lg:border-b-4 lg:border-predefineYellow lg:hover:border-white">Courses</li></NavLink>
        <NavLink to={'/events'}>      <li className="cursor-pointer py-2 lg:border-b-4 lg:border-predefineYellow lg:hover:border-white">Events</li></NavLink>
        <NavLink to={'/blog'}>      <li className="cursor-pointer py-2 lg:border-b-4 lg:border-predefineYellow lg:hover:border-white">Blog</li></NavLink>
             <li className="group cursor-pointer py-2 lg:border-b-4 lg:border-predefineYellow lg:hover:border-white relative" onClick={toggleSubmenu}>
                <div className="flex items-center justify-between cursor-pointer">
                  Pages <FiChevronDown className="ml-1" />
                </div>
                <div className={`lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:w-64 w-screen bg-white lg:shadow-lg lg:rounded-md lg:mt-2 lg:py-2 lg:pl-0 lg:pr-4 z-50 ${submenuOpen ? 'block' : 'hidden'}`}>
                  <ul className="flex flex-col items-center space-y-2 bg-white text-gray-700 lg:text-gray-700 lg:py-2 lg:px-4 lg:rounded-md lg:shadow-lg">
                  <NavLink to={'/teacher'}> <li className="py-2 px-4 hover:bg-gray-200 cursor-pointer">Teacher</li></NavLink>
                  <NavLink to={'/teacher-detail'}>  <li className="py-2 px-4 hover:bg-gray-200 cursor-pointer">Single Teacher</li></NavLink>
                  <NavLink to={'/notice'}> <li className="py-2 px-4 hover:bg-gray-200 cursor-pointer">Notice</li></NavLink>
                  <NavLink to={'/notice-detail'}>  <li className="py-2 px-4 hover:bg-gray-200 cursor-pointer">Notice Details</li></NavLink>
                    <NavLink to={'/research'}>  <li className="py-2 px-4 hover:bg-gray-200 cursor-pointer">Research</li></NavLink>
                     <NavLink to={'/scholarship'}><li className="py-2 px-4 hover:bg-gray-200 cursor-pointer">Scholarship</li></NavLink>
                     <NavLink to={'/course-detail'}> <li className="py-2 px-4 hover:bg-gray-200 cursor-pointer">Course Details</li></NavLink>
                     <NavLink to={'/event-detail'}><li className="py-2 px-4 hover:bg-gray-200 cursor-pointer">Event Details</li></NavLink>
                     <NavLink to={'/blog-detail'}> <li className="py-2 px-4 hover:bg-gray-200 cursor-pointer">Blog Details</li></NavLink>
                    <li className="group relative py-2 px-4 hover:bg-gray-200 cursor-pointer" onClick={(e) => { e.stopPropagation(); toggleSubSubmenu(); }}>
                      <div className="flex items-center justify-between">
                        Sub Menu <FiChevronDown className="ml-1" />
                      </div>
                      <ul className={`lg:absolute lg:left-[-100%] top-[-100%] w-48 bg-white text-gray-700 shadow-lg rounded-md mt-2 p-4 ${subSubmenuOpen ? 'block' : 'hidden'}`}>
                        <li className="py-2 px-4 hover:bg-gray-200 cursor-pointer">Sub Menu 01</li>
                        <li className="py-2 px-4 hover:bg-gray-200 cursor-pointer">Sub Menu 02</li>
                        <li className="py-2 px-4 hover:bg-gray-200 cursor-pointer">Sub Menu 03</li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </li>
         <NavLink to={'/contact'}> <li className="cursor-pointer py-2 lg:border-b-4 lg:border-predefineYellow lg:hover:border-white">Contact</li></NavLink>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
