import research1 from '../../assets/research/research1.jpg';
import research2 from '../../assets/research/research2.jpg';
import research3 from '../../assets/research/research3.jpg';
import research4 from '../../assets/research/research4.jpg';
import research5 from '../../assets/research/research5.jpg';
import research6 from '../../assets/research/research6.jpg';

const ResearchComp = () => {
    const research = [
        {
            image: research1,
            title: "Geography",
            description: "Some quick example text to build on the card title and make up the bulk of the card's content."
        },
        {
            image: research2,
            title: "Mathematics",
            description: "Some quick example text to build on the card title and make up the bulk of the card's content."
        },
        {
            image: research3,
            title: "Humanities",
            description: "Some quick example text to build on the card title and make up the bulk of the card's content."
        },
        {
            image: research4,
            title: "Physical & Sciences",
            description: "Some quick example text to build on the card title and make up the bulk of the card's content."
        },
        {
            image: research5,
            title: "Biological Sciences",
            description: "Some quick example text to build on the card title and make up the bulk of the card's content."
        },
        {
            image: research6,
            title: "Archaeology",
            description: "Some quick example text to build on the card title and make up the bulk of the card's content."
        },
    ];

    return (
        <section className="py-8 px-4 bg-gray-100">
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {research.map((item, index) => (
                    <div key={index} className="bg-white rounded-lg hover:shadow-lg overflow-hidden">
                        <img src={item.image} alt={item.title} className="w-full h-60 object-cover" />
                        <div className="p-5">
                            <h1 className="text-xl font-bold mb-2">{item.title}</h1>
                            <p className="text-gray-600">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ResearchComp;
