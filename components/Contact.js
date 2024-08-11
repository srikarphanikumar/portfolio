const Contact = () => {
    return (
        <section id="contact" className="bg-gray-100 py-20">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8">Contact Me</h2>
                <form className="max-w-lg mx-auto">
                    <div className="mb-4">
                        <label htmlFor="name" className="block mb-2">Name</label>
                        <input type="text" id="name" className="w-full p-2 border rounded" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block mb-2">Email</label>
                        <input type="email" id="email" className="w-full p-2 border rounded" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="message" className="block mb-2">Message</label>
                        <textarea id="message" rows="4" className="w-full p-2 border rounded"></textarea>
                    </div>
                    <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;