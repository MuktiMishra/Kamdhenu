import React from 'react';

interface AboutProps {
  children?: React.ReactNode;
}

const teamMembers = [
  {
    imgSrc: 'km3.jpg',
    name: 'John Doe',
    profession: 'Software Engineer',
  },
  {
    imgSrc: 'km4.jpg',
    name: 'Jane Smith',
    profession: 'Project Manager',
  },
  {
    imgSrc: 'km.jpg',
    name: 'Alex Johnson',
    profession: 'Data Scientist',
  },
];

const AboutUs: React.FC<AboutProps> = () => {
  return (
    <div className="flex flex-col w-screen gap-20">
      {/* About component */}
      <div>
        <div className="text-3xl md:text-4xl font-extrabold text-center mt-5 mb-10 text-[#0000FF]">
          About Us
        </div>
        <div className="justify-center items-center text-center bg-[#D9D9D9] text-sm p-2 md:text-xl font-semibold w-screen">
          Welcome to Kamdhenu, a trusted partner in empowering individuals through
          education, skill development, and career guidance. Our mission is to
          create opportunities for students and professionals by providing top-notch
          distant education, specialized training programs, and seamless placement support.
        </div>

        {/* Values section */}
        <div className="text-2xl md:text-3xl font-bold text-center mt-9 mb-5 text-[#000000]">
          Our Values
        </div>
        <div className="flex flex-col md:flex-row m-4 md:m-7 gap-4 md:gap-10 justify-center items-center">
          {[
            { title: 'Accessibility', text: 'Bringing opportunities to every corner of the world' },
            { title: 'Excellence', text: 'Providing the highest quality of support' },
            { title: 'Commitment', text: 'Guiding you every step of the way toward your goals' },
            { title: 'Innovation', text: 'Adapting to the latest technologies for your benefit' },
          ].map((value, idx) => (
            <div
              key={idx}
              className="bg-[#D9D9D9] flex flex-col justify-center rounded-md w-80 md:w-[40%] p-2 h-28"
            >
              <div className="text-lg lg:text-2xl font-semibold text-center text-[#0000FF] mb-5">
                {value.title}
              </div>
              <div className="text-sm lg:text-xl text-center text-[#000000]">{value.text}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Goals section */}
      <div className="flex flex-col justify-center items-center">
        <div className="text-2xl md:text-3xl font-bold text-center mb-5 text-[#000000]">
          Our Goals
        </div>
        <p className="text-left text-sm md:text-xl font-bold p-2 mb-2 text-black">
          Our Goal at <span className="text-[#0000FF]">Kamdhenu</span> is to empower youth with our services of training, placement, and distance education.
        </p>
        <p className="text-left text-sm md:text-lg italic font-normal p-2 mb-2 text-[#000000] tracking-wide" style={{ wordSpacing: '3px' }}>
          <p className="text-left text-sm md:text-xl font-bold p-2 mb-2 text-[#0000FF]">Key Features :</p>
          {[
            'Comprehensive career assistance, from resume building to interviews, connecting you with top companies.',
            'Empower your skills with practical, job-oriented courses designed by industry-leading experts.',
            'Learn at your own pace with our accredited programs, offering recorded lectures and study materials.',
            'Receive guidance from experienced faculty and mentors, available 24/7 to support your learning and career goals.',
            'Earn certifications that open doors to opportunities worldwide, making you stand out in the job market.',
          ].map((feature, idx) => (
            <div key={idx} className="mt-3 mb-4">
              • {feature}
            </div>
          ))}
        </p>
      </div>

      {/* Team section */}
      <div className="flex flex-col justify-center items-center">
        <div className="text-2xl md:text-3xl font-bold text-center mb-5 text-[#000000]">
          Our Team
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-6">
          {teamMembers.map((member, idx) => (
            <div key={idx} className="flex flex-col items-center space-y-2 p-2 md:p-4 bg-white rounded-lg">
              <div className="w-28 md:w-36 h-28 md:h-36 rounded-full overflow-hidden">
                <img src={member.imgSrc} alt={member.name} className="w-full h-full object-cover" />
              </div>
              <h3 className="text-base md:text-lg font-semibold">{member.name}</h3>
              <p className="text-gray-500 text-xs md:text-sm">{member.profession}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
