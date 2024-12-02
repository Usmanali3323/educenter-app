import Main from "../components/main";
import ResearchComp from "../components/research/researchComp.jsx";

export default function Research() {
  return (
    <div className="md:mb-32 xl:container mx-auto">
      <Main title="Research" description="Our courses offer a good compromise between the continuous assessment favoured by some universities and the emphasis placed on final exams by others."/>
     <ResearchComp/>
    </div>
  );
}