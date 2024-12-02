import Main from "../components/main";
import { NoticeComp } from "../components/notice/noticeComp";

export default function Notice() {
  return (
    <div className="md:mb-32 xl:container mx-auto">
        <Main title="Notice" description="Our courses offer a good compromise between the continuous assessment favoured by some universities and the emphasis placed on final exams by others."/>
        <NoticeComp/>
    </div>
  );
}