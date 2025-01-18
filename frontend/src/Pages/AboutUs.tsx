import React from "react";

const teamMembers = [
  {
    imgSrc: "km3.jpg",
    name: "John Doe",
    profession: "Software Engineer",
  },
  {
    imgSrc: "km4.jpg",
    name: "Jane Smith",
    profession: "Project Manager",
  },
  {
    imgSrc: "km.jpg",
    name: "Alex Johnson",
    profession: "Data Scientist",
  },
];

const AboutUs: React.FC = () => {
  return (
    <div className="flex flex-col gap-16 p-6 md:p-10 bg-white">
      
      <section className="text-center">
        <h1 className="text-3xl md:text-4xl font-extrabold text-[#0000FF] mb-5">
          About Us
        </h1>
        <p className="text-sm md:text-lg font-medium text-black bg-[#D9D9D9] p-4 rounded-lg shadow-sm">
          Welcome to Kamdhenu, a trusted partner in empowering individuals
          through education, skill development, and career guidance. Our mission
          is to create opportunities for students and professionals by providing
          top-notch distant education, specialized training programs, and
          seamless placement support.
        </p>
      </section>

     
      <section className="text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-black mb-6">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { title: "Accessibility", text: "Bringing opportunities to every corner of the world" },
            { title: "Excellence", text: "Providing the highest quality of support" },
            { title: "Commitment", text: "Guiding you every step of the way toward your goals" },
            { title: "Innovation", text: "Adapting to the latest technologies for your benefit" },
          ].map((value, idx) => (
            <div
              key={idx}
              className="bg-[#D9D9D9] p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <h3 className="text-lg md:text-xl font-semibold text-[#0000FF] mb-2">
                {value.title}
              </h3>
              <p className="text-sm md:text-base text-black">{value.text}</p>
            </div>
          ))}
        </div>
      </section>

     
      <section>
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-5 text-black">
          Our Goals
        </h2>
        <div className="text-sm md:text-lg text-black">
          <p className="mb-4">
            Our Goal at <span className="text-[#0000FF]">Kamdhenu</span> is to empower youth with
            our services of training, placement, and distance education.
          </p>
          <p className="text-lg font-semibold text-[#0000FF] mb-3">Key Features:</p>
          <ul className="list-disc list-inside space-y-2">
            {[
              "Comprehensive career assistance, from resume building to interviews, connecting you with top companies.",
              "Empower your skills with practical, job-oriented courses designed by industry-leading experts.",
              "Learn at your own pace with our accredited programs, offering recorded lectures and study materials.",
              "Receive guidance from experienced faculty and mentors, available 24/7 to support your learning and career goals.",
              "Earn certifications that open doors to opportunities worldwide, making you stand out in the job market.",
            ].map((feature, idx) => (
              <li key={idx}>{feature}</li>
            ))}
          </ul>
        </div>
      </section>

      
      <section className="text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-black mb-6">Our Team</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {teamMembers.map((member, idx) => (
            <div
              key={idx}
              className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow w-60"
            >
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden mx-auto mb-4">
                <img
                  src={member.imgSrc}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold text-black">{member.name}</h3>
              <p className="text-sm text-gray-500">{member.profession}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutUs;