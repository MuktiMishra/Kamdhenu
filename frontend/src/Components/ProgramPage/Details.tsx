const Details = () => {
    return (
      <div className="p-2 md:p-5 flex flex-col items-center">
        {/* Distant Education Section */}
        <a href="#education" className="w-full max-w-4xl">
          <div className="flex flex-col text-black p-4 md:p-10 mb-10 md:mb-20 mx-auto bg-slate-100 rounded-lg shadow-lg">
            <div className="text-center text-xl md:text-3xl font-bold m-5">
              Distant Education
            </div>
            <div className="text-start text-sm md:text-xl font-normal ml-4 md:ml-8">
              <div>
                <span className="text-[#0000ff] font-bold">Kamdhenu</span> provides an exceptional platform for pursuing education remotely.
              </div>
              <div className="font-bold mt-4">Key Features:</div>
              <ul className="list-disc ml-5">
                <li>Wide range of accredited courses in diverse fields.</li>
                <li>Access to high-quality study materials and recorded lectures.</li>
                <li>Flexible schedules to balance learning with other commitments.</li>
                <li>24/7 online assistance from faculty and mentors.</li>
                <li>Certification programs recognized globally.</li>
              </ul>
              <div className="font-bold mt-4">Why Choose <span className="text-[#0000ff]">Kamdhenu</span>?</div>
              <div>
                Our programs are designed to make education accessible, affordable, and achievable for all.
              </div>
              <button className="h-10 w-32 bg-blue-400 rounded-xl mt-6 text-white font-bold hover:bg-blue-500">
                Apply Now
              </button>
            </div>
          </div>
        </a>
  
        {/* Training Support Section */}
        <a href="#training" className="w-full max-w-4xl">
          <div className="flex flex-col text-black p-4 md:p-10 mb-10 md:mb-20 mx-auto bg-slate-100 rounded-lg shadow-lg">
            <div className="text-center text-xl md:text-3xl font-bold m-5">
              Training Support
            </div>
            <div className="text-start text-sm md:text-xl font-normal ml-4 md:ml-8">
              <div>We provide specialized training programs to help you excel in your chosen field.</div>
              <div className="font-bold mt-4">Key Offerings:</div>
              <ul className="list-disc ml-5">
                <li>Skill-Based Training: Communication, technical skills, and personality development.</li>
                <li>Industry-Specific Training: Programs tailored for various industries.</li>
                <li>Hands-On Learning: Practical sessions and projects to build expertise.</li>
                <li>Workshops & Webinars: Delivered by industry leaders.</li>
              </ul>
              <button className="h-10 w-32 bg-blue-400 rounded-xl mt-6 text-white font-bold hover:bg-blue-500">
                Apply Now
              </button>
            </div>
          </div>
        </a>
  
        {/* Placement Support Section */}
        <a href="#placement" className="w-full max-w-4xl">
          <div className="flex flex-col text-black p-4 md:p-10 mb-10 md:mb-20 mx-auto bg-slate-100 rounded-lg shadow-lg">
            <div className="text-center text-xl md:text-3xl font-bold m-5">
              Placement Support
            </div>
            <div className="text-start text-sm md:text-xl font-normal ml-4 md:ml-8">
              <div>Landing your dream job is our top priority.</div>
              <div className="font-bold mt-4">What we offer:</div>
              <ul className="list-disc ml-5">
                <li>Partnerships with top companies across industries.</li>
                <li>Resume building and interview preparation assistance.</li>
                <li>Campus placement drives and one-on-one guidance.</li>
                <li>Regular job alerts and career counseling sessions.</li>
              </ul>
              <button className="h-10 w-32 bg-blue-400 rounded-xl mt-6 text-white font-bold hover:bg-blue-500">
                Apply Now
              </button>
            </div>
          </div>
        </a>
      </div>
    );
  };
  
  export default Details;