import ContactComp from "../components/contact/contactComp";
import Main from "../components/main";

export default function ContactUs() {
  return (
<div className="xl:container mx-auto md:mb-28">
    <Main title="Contact Us"  description="Our courses offer a good compromise between the continuous assessment favoured by some universities and the emphasis placed on final exams by others."/>
    <ContactComp/>
</div>
  );
}