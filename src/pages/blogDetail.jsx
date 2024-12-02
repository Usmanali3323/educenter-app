import { HiOutlineBookOpen } from 'react-icons/hi';
import { FaRegShareSquare, FaRegCommentAlt } from 'react-icons/fa';
import BlogImg from '../assets/blogDetail.jpg';
import Main from '../components/main';

export default function BlogDetail() {
  return (
    <div className='xl:container mx-auto mb-10 md:mb-32'>
      <Main
        title={'Blog Details'}
        parent={'Our Blog'}
        description='Our courses offer a good compromise between the continuous assessment favoured by some universities and the emphasis placed on final exams by others.'
      />
      <div className="font-font1 text-textColor px-5 md:px-10">
        {/* Blog Image and Info Section */}
        <div className="max-w-7xl mx-auto mb-8">
          <img src={BlogImg} alt="blog-detail" className="w-full h-auto rounded-lg shadow-lg" />
          <div className="mt-4 flex flex-col md:flex-row md:items-center text-sm text-gray-600">
            <div className="flex flex-col md:flex-row items-center space-x-2 mb-2 md:mb-0">
              <h1 className="font-semibold text-defineBlue">Post:</h1>
              <p>Somrat</p>
            </div>
            <p className="mb-2 md:mb-0 ml-4">August 28, 2017</p>
            <div className="flex items-center space-x-2 mb-2 md:mb-0 ml-4">
              <HiOutlineBookOpen className="text-predefineYellow text-lg" />
              <p>Read 289</p>
            </div>
            <div className="flex items-center ml-4 space-x-2 mb-2 md:mb-0">
              <FaRegShareSquare className="text-predefineYellow text-lg" />
              <p>289</p>
            </div>
            <div className="flex items-center space-x-2 ml-4">
              <FaRegCommentAlt className="text-predefineYellow text-lg" />
              <p>265</p>
            </div>
          </div>
        </div>

        {/* Blog Content */}
        <div className="max-w-7xl mx-auto">
          <h1 className="text-2xl md:text-3xl font-bold text-defineBlue mb-4">
            Lorem ipsum dolor amet, consectetur adipisicing eiusmod tempor
          </h1>
          <p className="text-justify leading-loose mb-4">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
          </p>
          <p className="text-justify leading-loose mb-4">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem s
           </p>
          <p className="text-justify leading-loose mb-4">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
          </p>
        </div>

        {/* Comment Form */}
        <div className="max-w-7xl mx-auto mt-8">
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-predefineYellow"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-predefineYellow"
            />
            <textarea
              placeholder="Comment Here..."
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-predefineYellow h-32 resize-none"
            ></textarea>
            <button
              type="submit"
              className="bg-predefineYellow text-white font-semibold py-3 px-6 rounded-lg hover:bg-white hover:text-predefineYellow hover:border-2 hover:border-predefineYellow transition"
            >
              Post Comment
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
