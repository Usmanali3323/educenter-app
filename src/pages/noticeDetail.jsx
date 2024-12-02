import Main from "../components/main";
import { GoDotFill } from "react-icons/go";

export default function NoticeDetail() {
  return (
    <div className="font-font1 text-textColor xl:container mx-auto md:mb-32">
      <Main
        parent="Notice"
        title="Notice Details"
        description="Our courses offer a good compromise between the continuous assessment favoured by some universities and the emphasis placed on final exams by others."
      />

      <div className="max-w-6xl mx-auto py-8 px-4">
        <div className="bg-white  overflow-hidden grid md:grid-cols-7">
          <div className="flex items-cente text-white md:col-span-1">
            <div className="text-center bg-predefineYellow p-6 h-fit w-full mb-5">
              <h1 className="text-6xl font-bold">31</h1>
              <h2 className="text-xl font-medium mt-2">APR, 2019</h2>
            </div>
          </div>
          <div className="md:col-span-6">
          <div className="ml-6 text-defineBlue">
              <h1 className="text-3xl font-semibold">Teaching Materials and Testing Methods</h1>
            </div>

          <div className="p-6">
            <p className="mb-6 leading-relaxed">
              Lorem ipsum dolor sit amet, lectus molestie amet eget varius nulla ultricies, senectus vehicula wisi risus tellus nonummy. Urna volutpat, nunc doloremque risus felis lorem risus. Et suspendisse diam libero pulvinar, tristique ac cras luctus ornare. Quam justo. Non ligula turpis sem, velit dolor luctus venenatis. Eros eget at vitae, wisi diam ut ad convallis, in gravida nunc inceptos sed leo donec, duis dolorem adipiscing arcu facilisis. Purus lorem vulputate et condimentum in felis, porttitor accumsan id bibendum diam varius, lorem diam molestie erat a amet urna, dolor pellentesque lectus justo adipiscing. Laoreet est velit vestibulum, laoreet luctus bibendum sed ornare amet elementum, ullamcorper nibh in sollicitudin donec arcu lorem.
            </p>
            <p className="mb-6 leading-relaxed">
              Quam justo. Non ligula turpis sem, velit dolor luctus venenatis. Eros eget at vitae, wisi diam ut ad convallis, in gravida nunc inceptos sed leo donec, duis dolorem adipiscing arcu facilisis. Purus lorem vulputate et condimentum in felis, porttitor accumsan id bibendum diam varius, lorem diam molestie erat a amet urna, dolor pellentesque lectus justo adipiscing. Laoreet est velit vestibulum, laoreet luctus bibendum sed ornare amet elementum, ullamcorper nibh in sollicitudin donec arcu lorem.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="flex items-center">
                <GoDotFill className="text-predefineYellow mr-2" />
                <p>Digital Access to Scholarship at Smart</p>
              </div>
              <div className="flex items-center">
                <GoDotFill className="text-predefineYellow mr-2" />
                <p>Institutes</p>
              </div>
              <div className="flex items-center">
                <GoDotFill className="text-predefineYellow mr-2" />
                <p>Smart-affiliated hospitals and research</p>
              </div>
              <div className="flex items-center">
                <GoDotFill className="text-predefineYellow mr-2" />
                <p>Smart Catalyst</p>
              </div>
              <div className="flex items-center">
                <GoDotFill className="text-predefineYellow mr-2" />
                <p>Smart Library Portal</p>
              </div>
              <div className="flex items-center">
                <GoDotFill className="text-predefineYellow mr-2" />
                <p>Smart research programs and departments</p>
              </div>
            </div>

            <button className="bg-predefineYellow text-white px-6 py-3 font-semibold rounded-lg hover:bg-white hover:text-predefineYellow hover:outline hover:outline-predefineYellow transition duration-300">
              Download
            </button>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}
