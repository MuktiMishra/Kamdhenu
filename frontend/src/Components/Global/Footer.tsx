import React from 'react';

interface FooterProps {
  children?: React.ReactNode;
}

const Footer: React.FC<FooterProps> = ({ children }) => {
  return (
    <div className="sticky mb-0 z-10 w-screen bg-[#0127ff] opacity-75 flex flex-col mt-2 md:mt-10">
      <div className="flex flex-col lg:flex-row gap-7 justify-between px-5">
        {/*Heading */}
        <div className="flex flex-col justify-start text-white text-2xl md:text-4xl font-bold lg:mr-32">
          <div>Your Success?</div>
          <div>Our Responsibility</div>
          <div className="mt-3 shadow-2xl font-light">Get in touch</div>
        </div>

        {/* Services */}
        <div className="flex flex-col lg:mr-20">
          <div className="text-white text-lg md:text-xl font-semibold mb-3">
            Services
          </div>
          <div className="text-white text-sm md:text-lg font-normal hover:text-gray-400">
            Distant Education
          </div>
          <div className="text-white text-sm md:text-lg font-normal  hover:text-gray-400">
            Training
          </div>
          <div className="text-white text-sm md:text-lg font-normal  hover:text-gray-400">
            Placement
          </div>
        </div>

        {/*Kamdhenu */}
        <div className="flex flex-col lg:mr-20">
          <div className="text-white text-lg md:text-xl font-semibold mb-3">
            Kamdhenu
          </div>
          <div className="text-white text-sm md:text-lg font-normal hover:text-gray-400">About us</div>
          <div className="text-white text-sm md:text-lg font-normal  hover:text-gray-400">
            Testimonials
          </div>
          <div className="text-white text-sm md:text-lg font-normal  hover:text-gray-400">
            Contact Us
          </div>
          <div className="text-white text-sm md:text-lg font-normal hover:text-gray-400">
            Terms of service
          </div>
          <div className="text-white text-sm md:text-lg font-normal hover:text-gray-400">
            Privacy policy
          </div>
        </div>

        {/* Follow us */}
        <div className="flex flex-col lg:mr-20">
          <div className="text-white text-lg md:text-xl font-semibold mb-3">
            Follow us
          </div>
          <div className="flex gap-3">
           
            <div className="text-white text-sm md:text-lg font-normal">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1024 1024"
                id="facebook"
                className="size-8"
              >
                <path
                  fill="#1877f2"
                  d="M1024,512C1024,229.23016,794.76978,0,512,0S0,229.23016,0,512c0,255.554,187.231,467.37012,432,505.77777V660H302V512H432V399.2C432,270.87982,508.43854,200,625.38922,200,681.40765,200,740,210,740,210V336H675.43713C611.83508,336,592,375.46667,592,415.95728V512H734L711.3,660H592v357.77777C836.769,979.37012,1024,767.554,1024,512Z"
                ></path>
                <path
                  fill="#fff"
                  d="M711.3,660,734,512H592V415.95728C592,375.46667,611.83508,336,675.43713,336H740V210s-58.59235-10-114.61078-10C508.43854,200,432,270.87982,432,399.2V512H302V660H432v357.77777a517.39619,517.39619,0,0,0,160,0V660Z"
                ></path>
              </svg>
            </div>

            
            <div className="text-white text-sm md:text-lg font-normal">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 28.87 28.87"
                id="instagram"
                className="size-8"
              >
                <defs>
                  <linearGradient
                    id="linear-gradient"
                    x1="-1.84"
                    x2="32.16"
                    y1="30.47"
                    y2="-3.03"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0" stopColor="#fed576"></stop>
                    <stop offset=".26" stopColor="#f47133"></stop>
                    <stop offset=".61" stopColor="#bc3081"></stop>
                    <stop offset="1" stopColor="#4c63d2"></stop>
                  </linearGradient>
                </defs>
                <g id="Layer_2">
                  <g id="Layer_1-2">
                    <rect
                      width="28.87"
                      height="28.87"
                      rx="6.48"
                      ry="6.48"
                      style={{ fill: "url(#linear-gradient)" }}
                    ></rect>
                    <g id="_Group_">
                      <path
                        id="_Compound_Path_"
                        d="M10 5h9c.2.1.5.1.7.2a4.78 4.78 0 0 1 3.8 3.3 8 8 0 0 1 .3 1.5v8.8a6.94 6.94 0 0 1-1.2 3.1 5.51 5.51 0 0 1-4.5 1.9h-7.5a5.49 5.49 0 0 1-3.7-1.2A5.51 5.51 0 0 1 5 18.14v-7a7.57 7.57 0 0 1 .1-1.5 4.9 4.9 0 0 1 3.8-4.3zm-3.1 9.5v3.9a3.42 3.42 0 0 0 3.7 3.7q3.9.15 7.8 0c2.3 0 3.6-1.4 3.7-3.7q.15-3.9 0-7.8a3.52 3.52 0 0 0-3.7-3.7q-3.9-.15-7.8 0a3.42 3.42 0 0 0-3.7 3.7z"
                        style={{ fill: "#fff" }}
                      ></path>
                      <path
                        id="_Compound_Path_2"
                        d="M9.64 14.54a4.91 4.91 0 0 1 4.9-4.9 5 5 0 0 1 4.9 4.9 4.91 4.91 0 0 1-4.9 4.9 5 5 0 0 1-4.9-4.9zm4.9-3.1a3.05 3.05 0 1 0 3 3 3 3 0 0 0-3-3z"
                        style={{ fill: "#fff" }}
                      ></path>
                      <path
                        id="_Path_"
                        d="M18.34 9.44a1.16 1.16 0 0 1 1.2-1.2 1.29 1.29 0 0 1 1.2 1.2 1.2 1.2 0 0 1-2.4 0z"
                        style={{ fill: "#fff" }}
                      ></path>
                    </g>
                  </g>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>

      
      <div className="text-white text-sm md:text-base font-normal text-center mt-5">
        Kamdhenu@2024. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
