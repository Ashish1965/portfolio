import React from "react";
import Link from "next/link";
const Education = () => {
  return (
    <div id="education" className="w-full p-2 flex items-center mt-24">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="w-full h-auto my-8 md:m-auto shadow-xl shadow-gray-400 dark:shadow-gray-700 rounded-xl flex items-center justify-center p-4 hover-scale-effect sm:mb-16">
          <img
            src="/assets/education.jpg"
            className="rounded-xl w-full h-full"
            alt="About"
          />
        </div>
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            Education
          </p>
          <h2 className="py-4 text-gray-700 dark:text-gray-600">What I have learnt</h2>
            <h6 className="text-gray-700 dark:text-gray-600">B-TECH IN COMPUTER SCIENCE & Design</h6>
          <p className="py-2  text-gray-700 dark:text-gray-500">
            Enrolled in a B.Tech program specializing in Computer Science and
            Design, which integrates technical computing skills with innovative
            design concepts. Maintaining a strong CGPA of 8.3, reflecting
            consistent academic excellence and commitment to the field. Studying
            at Madhav Institute of Technology and Science, a reputed institution
            recognized for its high standards in engineering and technology
            education.
          </p>
            <h6 className="dark:text-gray-600 text-gray-700">AISSCE</h6>
          <p className="py-2 text-gray-700 dark:text-gray-500">
            Jawahar Navodaya Vidyalaya, Amarkantaka, A Beacon of Academic
            Excellence Nestled amidst the picturesque hills of Amarkantaka,
            Madhya Pradesh, Jawahar Navodaya Vidyalaya stands as a testament to
            the power of education in transforming lives. In the academic year
            2019-20, Jawahar Navodaya Vidyalaya, Amarkantaka, set a new
            benchmark by achieving an outstanding AISSCE (Class XII) result of
            86.2%. This remarkable feat is a testament to the dedication of the
            school's faculty, the commitment of its students, and the unwavering
            support of the school administration.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Education;
