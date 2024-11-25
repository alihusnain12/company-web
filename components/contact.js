"use client";

const ContactForm = () => {
  return (
    <section className="py-8 md:py-12 lg:py-16 bg-[#170057]">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white text-center mb-4">
          Need Help to get Quote?
        </h2>
        <p className="text-white text-center mb-12">Our support team will get back to you ASAP via email.</p>
        <div className="max-w-5xl mx-auto bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg p-8 rounded-lg shadow-2xl shadow-slate-600">
          <form>
            <div className="mb-6">
              <label htmlFor="name" className="block text-gray-200 font-semibold mb-2">
                Name
              </label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-white bg-transparent backdrop-filter backdrop-blur-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                placeholder="Your Name"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block text-gray-200 font-semibold mb-2">
                Email
              </label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-white bg-transparent backdrop-filter backdrop-blur-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                placeholder="Your Email"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-200 font-semibold mb-2">
                Your Message
              </label>
              <textarea 
                id="message" 
                name="message" 
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-white bg-transparent backdrop-filter backdrop-blur-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                placeholder="Your Message"
                rows="6"
              ></textarea>
            </div>
            <div className="text-center">
              <button 
                type="submit" 
                className="bg-gradient-to-r from-blue-500 to-green-400 text-white font-bold py-3 px-8 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 hover:from-blue-600 hover:to-green-500 transition-all duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
