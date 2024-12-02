import Main from "../components/main";
import TeacherComp from '../components/home/teacher.jsx'

export default function Teacher() {
  return (
    <div className="md:mb-32 xl:container mx-auto">
        <Main title="Our teacher" description="Our courses offer a good compromise between the continuous assessment favoured by some universities and the emphasis placed on final exams by others." />
        <TeacherComp page={true}/>
    </div>    
  );
}