export function NoticeComp() {
    const notice = [
        {
            date: "30",
            year: "APR, 2019",
            title: "Teaching Materials and Testing Methods",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt perferendis saepe omnis officia! Doloribus quae maiores laboriosam praesentium enim fugiat ipsam laudantium assumenda!",
        },
        {
            date: "27",
            year: "APR, 2019",
            title: "Biltong sirloin sausage brisket porchetta prosciutto",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt perferendis saepe omnis officia! Doloribus quae maiores laboriosam praesentium enim fugiat ipsam laudantium assumenda!",
        },
        {
            date: "25",
            year: "APR, 2019",
            title: "Teaching Materials and Testing Methods",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt perferendis saepe omnis officia! Doloribus quae maiores laboriosam praesentium enim fugiat ipsam laudantium assumenda!",
        },
        {
            date: "23",
            year: "APR, 2019",
            title: "Biltong sirloin sausage brisket porchetta prosciutto",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt perferendis saepe omnis officia! Doloribus quae maiores laboriosam praesentium enim fugiat ipsam laudantium assumenda!",
        },
    ];

    return (
        <section className="py-8 px-4 font-font1 text-textColor">
            <div className="max-w-6xl mx-auto grid gap-8">
                {notice.map((e, i) => (
                    <div key={i} className="flex flex-col sm:flex-row bg-white rounded-lg shadow-lg overflow-hidden my-4">
                        <div className="bg-predefineYellow text-white flex items-center justify-center p-6 sm:w-1/4 w-full sm:h-auto h-32">
                            <div className="text-center">
                                <h1 className="text-4xl font-bold">{e.date}</h1>
                                <h2 className="text-sm font-medium mt-2">{e.year}</h2>
                            </div>
                        </div>
                        <div className="p-6 sm:flex-1">
                            <h2 className="text-xl font-semibold mb-3">{e.title}</h2>
                            <p className="mb-6 leading-relaxed">{e.description}</p>
                            <button className="bg-predefineYellow text-white px-6 py-3 text-lg font-bold rounded hover:bg-yellow-600 transition duration-200">
                                Read more
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
