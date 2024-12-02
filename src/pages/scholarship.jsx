import ScholarshipComp from "../components/scholarship/scholarshipComp.jsx";
import Main from "../components/main";

export default function Scholarship() {
  return (
    <div className="md:mb-32 xl:container">
    <Main title="Scholarship" description="Our courses offer a good compromise between the continuous assessment favoured by some universities and the emphasis placed on final exams by others."/>
    <ScholarshipComp/>
    </div>
);
}