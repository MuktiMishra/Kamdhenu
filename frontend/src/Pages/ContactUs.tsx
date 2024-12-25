const ContactUs = () => {
  return (
    <div>
      <div className="text-3xl md:text-5xl font-extrabold text-center mt-5 text-[#0000FF]">
        Contact Us
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 mt-2 md:ml-20">
        <div className="flex flex-col text-left gap-4 mt-24 place-items-start m-5 md:ml-12">
          <div className="text-lg lg:text-xl font-semibold text-left text-black">
            Whether you have a question about our programs,<br className="hidden md:block" />
            need support, or want opportunities, the <br className="hidden md:block" />
            Kamdhenu team is here to assist you.<br className="hidden md:block" />
          </div>

          <div className="text-xl lg:text-2xl font-bold text-center lg:text-left text-black text-nowrap">
            We’d love to hear from you!
          </div>
        </div>
        <div className="w-full h-full hidden lg:flex justify-center items-center mt-5">
          <img
            src="./contactHero.png"
            className="w-[60%] object-cover"
            alt="Hero"
          />
        </div>
      </div>

      <div className="text-2xl md:text-3xl font-bold text-center mt-5 text-[#0000FF]">
        Get in Touch
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 mt-2 md:ml-20">
        <div className="w-full h-full flex justify-center items-center mt-5">
          <img
            src="./contactus.png"
            className="w-[60%] object-cover"
            alt="Contact Us"
          />
        </div>
        <div className="flex flex-col text-left gap-4 mt-10 place-items-start m-5 md:ml-12">
          <div className="text-xl lg:text-2xl font-bold text-left text-black text-nowrap">
            📍 Address :
          </div>
          <div className="text-lg lg:text-xl font-semibold text-left text-black">
            Kamdhenu Education & Career Solutions
          </div>

          <div className="text-xl lg:text-2xl font-bold text-left text-black text-nowrap">
            📞 Contact us :
          </div>
          <div className="text-lg lg:text-xl font-semibold text-left text-black">
            +91 468901830-2
          </div>

          <div className="text-xl lg:text-2xl font-bold text-left text-black text-nowrap">
            📧 Mail us at :
          </div>
          <div className="text-lg lg:text-xl font-semibold text-left text-black">
            kamdhenu@gmail.com
          </div>
        </div>
      </div>

      <div className='flex flex-col md:flex-row gap-6 justify-between mt-10'>
        <div className='flex flex-col items-center justify-center w-full md:w-1/2'>
          <div className="text-xl lg:text-3xl font-bold text-center text-[#0000ff] text-nowrap">
            Have a Question ?
          </div>
          <div className="text-lg lg:text-xl font-normal text-center text-[#000000] text-nowrap mt-5">
            Fill out the form below, and we’ll <br />
            get back to you as soon as possible
          </div>
        </div>

        <div className='flex items-center justify-center w-full md:w-1/2 md:mt-20 mb-4'>
          <form className='w-[80%]'>
            <input type="text" placeholder="Name" className="p-3 w-full rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-600" />
            <input type="text" placeholder="Email" className="p-3 w-full mt-3 rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-600" />
            <textarea placeholder="Message" className="p-3 w-full mt-3 rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-600" rows={5} />
            <button type="submit" className="p-3 w-full mt-3 rounded-md bg-blue-600 text-white font-bold">Submit</button>
          </form>
        </div>
      </div>
    </div>
  )};


export default ContactUs;
