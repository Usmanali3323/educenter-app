import CourseCom from '../components/home/course.jsx'
import Main from '../components/main.jsx';
const Course =()=>{
    return (
     <div className='xl:container md:mb-24 mx-auto'>
        <Main title='Our Courses' description='Our courses offer a good compromise between the continuous assessment favoured by some universities and the emphasis placed on final exams by others.'/>
        <CourseCom/>
        <CourseCom heading={false}/>
     </div>
    )
}
export default Course;