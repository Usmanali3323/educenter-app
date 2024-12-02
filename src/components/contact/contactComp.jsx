export default function ContactComp() {
    return (
        <section className="px-5 md:px-10 py-10 bg-gray-100 font-font1 text-textColor">
            <div className="xl:container mx-auto">
                {/* Title */}
                <div className="mb-8">
                    <h1 className="text-defineBlue text-3xl md:text-4xl font-bold">Contact Us</h1>
                </div>

                {/* Form and Contact Details */}
                <div className="grid md:grid-cols-5 gap-10">
                    {/* Form Section */}
                    <div className=" rounded-lg md:col-span-3">
                        <form>
                            <div className="mb-4">
                                <input 
                                    type="text" 
                                    placeholder="Your Name"
                                    className="w-full p-5 border rounded-md focus:outline-none focus:ring-2 focus:ring-predefineYellow"
                                />
                            </div>
                            <div className="mb-4">
                                <input 
                                    type="email" 
                                    placeholder="Your Email"
                                    className="w-full p-5 border rounded-md focus:outline-none focus:ring-2 focus:ring-predefineYellow"
                                />
                            </div>
                            <div className="mb-4">
                                <input 
                                    type="email" 
                                    placeholder="Subject"
                                    className="w-full p-5 border rounded-md focus:outline-none focus:ring-2 focus:ring-predefineYellow"
                                />
                            </div>
                            <div className="mb-4">
                                <textarea 
                                    placeholder="Your Message"
                                    className="w-full min-h-60 p-5 border rounded-md focus:outline-none focus:ring-2 focus:ring-predefineYellow"
                                ></textarea>
                            </div>
                            <button className="md:px-7 md:py-3 bg-predefineYellow text-white rounded-md hover:bg-white hover:border-2 hover:border-predefineYellow hover:text-predefineYellow transition duration-300">Send Message</button>
                        </form>
                    </div>

                    {/* Contact Information */}
                    <div className="text-gray-700 md:col-span-2">
                        <p className="mb-6 leading-relaxed tracking-wider">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit recusandae voluptates doloremque veniam temporibus porro culpa ipsa, nisi soluta minima saepe laboriosam debitis nesciunt. Dolore, labore. Accusamus nulla sed cum aliquid exercitationem debitis error harum porro maxime quo iusto aliquam dicta modi earum fugiat, vel possimus commodi, deleniti et veniam, fuga ipsum praesentium. Odit unde optio nulla ipsum quae obcaecati! Quod esse natus quibusdam asperiores quam vel, tempore itaque architecto ducimus expedita
                        </p>
                        <div className="mb-6">
                            <p className="text-lg font-bold leading-relaxed tracking-wider">+92 3180526027</p>
                            <p className="text-lg font-bold leading-relaxed tracking-wider">usman@gmail.com</p>
                        </div>
                        <div>
                            <p className="leading-relaxed tracking-wider">71 Shelton Street</p>
                            <p className="leading-relaxed tracking-wider">London WC2H 9JQ, England</p>
                        </div>
                    </div>
                </div>

                {/* Google Map */}
                <div className="mt-10">
                    <h2 className="text-2xl font-bold mb-4">Find Us Here</h2>
                    <div className="w-full min-h-screen bg-gray-300 rounded-lg overflow-hidden shadow-lg">
                        {/* Google Map Embed */}
                        <iframe
                            title="Google Map"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345092335!2d144.95373631590437!3d-37.81627974202116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf57766f63a71d7d8!2s71%20Shelton%20St%2C%20London%20WC2H%209JQ%2C%20UK!5e0!3m2!1sen!2suk!4v1648441366617!5m2!1sen!2suk"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
}
