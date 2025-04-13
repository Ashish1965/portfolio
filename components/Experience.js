import React from "react";


const Experience = () => {
  return (
    <div id="experience" className="w-full p-4 flex items-center mt-24">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        

        {/* Textual Experience Content */}
        <div
         
          className="col-span-2"
        >
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">Experience</p>
          <h2 className="py-4 text-gray-700 dark:text-gray-600">Where I’ve Worked</h2>

          {/* Newgen Software */}
          <div className="mb-8">
            <h4 className="text-gray-700 dark:text-gray-600">
              Newgen Software – Software Engineer Intern
            </h4>
            <p className="text-sm italic text-gray-600 dark:text-gray-500 mb-2">
              Feb 2025 – Present
            </p>
            <p className="text-gray-700 dark:text-gray-500">
              During my internship at Newgen Software, I worked on core products such as Omnidocs,
              IBPS, BAM, BRMS, and NewgenONE, gaining valuable insights into enterprise content and
              process automation platforms. My role involved contributing to the backend using Java
              and implementing dynamic client-side features using JavaScript. I also participated in
              creating real-time web interfaces that streamlined user interactions and enhanced
              customer experience.
            </p>
          </div>

          {/* Jobsdoor360 */}
          <div className="mb-8">
            <h4 className="text-gray-700 dark:text-gray-600">
              Jobsdoor360 – Software Engineer Intern
            </h4>
            <p className="text-sm italic text-gray-600 dark:text-gray-500 mb-2">
              Jan 2025 – Feb 2025
            </p>
            <p className="text-gray-700 dark:text-gray-500">
              At Jobsdoor360, I was responsible for developing the website interface using HTML, EJS,
              and Firebase. I implemented dynamic rendering to enhance interactivity and user
              engagement. I worked on both the client and server sides to ensure responsiveness and
              seamless data handling. The integration with Firebase Authentication helped in managing
              secure logins and user data efficiently.
            </p>
          </div>

          {/* Bluestock Fintech */}
          <div className="mb-8">
            <h4 className="text-gray-700 dark:text-gray-600">
              Bluestock Fintech – Frontend Developer Intern
            </h4>
            <p className="text-sm italic text-gray-600 dark:text-gray-500 mb-2">
              Jul 2024 – Aug 2024
            </p>
            <p className="text-gray-700 dark:text-gray-500">
              As a frontend developer intern at Bluestock Fintech, I built responsive and accessible
              interfaces using HTML5, CSS3, and JavaScript. I contributed to the development of
              user-centric fintech dashboards, ensuring intuitive layouts and high usability. This
              experience helped me understand real-world design principles and gave me practical
              exposure to front-end development in a fintech environment.
            </p>
          </div>
        </div>
        {/* Animated Image */}
        <div
          className="w-full h-auto my-8 md:m-auto shadow-xl hover-scale-effect  shadow-gray-400 dark:shadow-gray-700 rounded-xl flex items-center justify-center p-4 hover:scale-105 transform transition duration-500 ease-in-out"
        >
          <img
            src="/assets/Experience.jpg"
            className="rounded-xl w-full h-full object-cover"
            alt="Experience"
          />
        </div>
      </div>
    </div>
  );
};

export default Experience;
