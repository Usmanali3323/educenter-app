import { BrowserRouter,Routes,Route } from 'react-router-dom'
import './App.css'
import Home from './pages/home'
import About from './pages/about'
import Header from './components/header'
import Footer from './components/footer'
import Course from './pages/course.jsx'
import Events from "./pages/events.jsx";
import Blogs from './pages/blogs.jsx'
import ContactUs from "./pages/contact.jsx";
import Register from './components/auth/register.jsx'
import { useState } from 'react'
import Login from './components/auth/login.jsx'
import Scholarship from './pages/scholarship.jsx'
import Research from './pages/research.jsx'
import Notice from './pages/notice.jsx'
import Teacher  from './pages/teacher.jsx'
import TeacherDetail from "./pages/teacherDetail.jsx";
import NoticeDetail from './pages/noticeDetail.jsx'
import CourseDetail from './pages/courseDetail.jsx'
import EventDetail from './pages/eventDetail.jsx'
import BlogDetail from './pages/blogDetail.jsx'

function App() {
 const[reg,setReg] =  useState(false);
 const [login,setLogin] =  useState(false);

  return (
    <>
      <BrowserRouter>
      <Header setReg={setReg} setLogin={setLogin}/>
      <Register setReg={setReg} reg={reg} />
      <Login login={login} setLogin={setLogin}/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/courses' element={<Course/>}/>
        <Route path='/events' element={<Events/>}/>
        <Route path='/blog' element={<Blogs/>}/>
        <Route path='/contact' element={<ContactUs/>}/>
        <Route path='/scholarship' element={<Scholarship/>}/>
        <Route path='/research' element={<Research/>}/>
        <Route path='/notice' element={<Notice/>}/>
        <Route path='/notice-detail' element={<NoticeDetail/>}/>
        <Route path='/teacher' element={<Teacher/>}/>
        <Route path='/teacher-detail' element={<TeacherDetail/>}/>
        <Route path='/course-detail' element={<CourseDetail/>}/>
        <Route path='/event-detail' element={<EventDetail/>}/>
        <Route path='/blog-detail' element={<BlogDetail/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
