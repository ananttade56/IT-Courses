import React from 'react';
import { Link } from 'react-router-dom';
import { courses } from '../data/courses';
import { motion } from 'framer-motion';

const Courses = () => {

  return (
    <motion.section
      id="courses"
      className="py-16 bg-gray-50 border-b border-gray-100"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex flex-col sm:flex-row justify-between items-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 sm:mb-0">Popular Courses</h2>
          {/* <a href="#all-courses" className="text-sm font-semibold text-blue-600 border border-blue-600 rounded-md px-5 py-2 hover:bg-blue-50 transition-colors">
            View All Courses
          </a> */}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map(course => (
            <div key={course.id} className="relative bg-[#f9fafb] rounded-[32px] p-8 flex flex-col items-center shadow-[0_15px_40px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)] transition-all duration-300 transform hover:-translate-y-2 overflow-hidden mx-auto w-full max-w-sm border border-gray-100">

              {/* Background Code Watermarks */}
              <div className="absolute top-12 left-6 text-gray-300 font-mono text-2xl font-bold opacity-30 select-none">{`{...}`}</div>
              <div className="absolute top-32 left-8 text-gray-300 font-mono text-xl font-bold opacity-30 select-none">{`<f>`}</div>
              <div className="absolute top-44 right-6 text-gray-300 font-mono text-3xl font-bold opacity-30 select-none">{`{}`}</div>
              <div className="absolute bottom-32 left-6 text-gray-300 font-mono text-3xl font-bold opacity-30 select-none">{`{}`}</div>
              <div className="absolute bottom-16 right-8 text-gray-300 font-mono text-xl font-bold opacity-30 select-none">{`<f>`}</div>

              {/* Yellow Tape Ribbon */}
              <div className="absolute top-8 -right-12 bg-[#eec662] text-[#111827] font-black text-[13px] py-2 px-14 transform rotate-45 z-20 flex flex-col items-center leading-tight tracking-wide shadow-md">
                <span>At An</span>
                <span>Attractive Price</span>
              </div>

              <div className="relative z-10 h-24 flex items-center justify-center mb-6 mt-4">
                <div className="transform scale-125">
                  {course.icon}
                </div>
              </div>

              <h3 className="relative z-10 text-[22px] font-extrabold text-[#111827] mb-4 text-center tracking-tight">{course.title}</h3>

              <div className="relative z-10 flex items-center text-[15px] text-[#4b5563] mb-4 space-x-2 font-medium">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                <span>{course.duration}</span>
                <span className="w-1.5 h-1.5 bg-gray-300 rounded-full mx-1.5"></span>
                <span>{course.level}</span>
              </div>

              <div className="relative z-10 flex items-center mb-8">
                <div className="flex text-[#fbbf24] text-lg tracking-widest">
                  {'★★★★★'.split('').map((star, i) => <span key={i}>{star}</span>)}
                </div>
                <span className="text-[15px] font-medium text-gray-600 ml-3">{course.rating}</span>
              </div>

              <div className="relative z-10 w-full flex flex-col space-y-4">
                {/* Enroll Now Button */}


                {/* View Details Button */}
                <Link
                  to={`/course/${course.id}`}
                  className="w-full py-3.5 rounded-xl border-[1.5px] border-[#93c5fd] text-[#3b82f6] font-medium text-[17px] flex justify-center items-center hover:bg-blue-50 transition-colors bg-transparent"
                >
                  View Details
                </Link>
              </div>

            </div>
          ))}
        </div>

      </div>



    </motion.section>
  );
};

export default Courses;
