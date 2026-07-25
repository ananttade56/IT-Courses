import React, { useState } from 'react';
import { FcBarChart } from "react-icons/fc";
import { FaJava } from "react-icons/fa";

const courses = [
  {
    id: 4,
    icon: (
      <div className="text-[#3776AB]">
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="100" viewBox="0 0 48 48">
          <path fill="#0277BD" d="M24.047,5c-1.555,0.005-2.633,0.142-3.936,0.367c-3.848,0.67-4.549,2.077-4.549,4.67V14h9v2H15.22h-4.35c-2.636,0-4.943,1.242-5.674,4.219c-0.826,3.417-0.863,5.557,0,9.125C5.851,32.005,7.294,34,9.931,34h3.632v-5.104c0-2.966,2.686-5.896,5.764-5.896h7.236c2.523,0,5-1.862,5-4.377v-8.586c0-2.439-1.759-4.263-4.218-4.672C27.406,5.359,25.589,4.994,24.047,5z M19.063,9c0.821,0,1.5,0.677,1.5,1.502c0,0.833-0.679,1.498-1.5,1.498c-0.837,0-1.5-0.664-1.5-1.498C17.563,9.68,18.226,9,19.063,9z"></path><path fill="#FFC107" d="M23.078,43c1.555-0.005,2.633-0.142,3.936-0.367c3.848-0.67,4.549-2.077,4.549-4.67V34h-9v-2h9.343h4.35c2.636,0,4.943-1.242,5.674-4.219c0.826-3.417,0.863-5.557,0-9.125C41.274,15.995,39.831,14,37.194,14h-3.632v5.104c0,2.966-2.686,5.896-5.764,5.896h-7.236c-2.523,0-5,1.862-5,4.377v8.586c0,2.439,1.759,4.263,4.218,4.672C19.719,42.641,21.536,43.006,23.078,43z M28.063,39c-0.821,0-1.5-0.677-1.5-1.502c0-0.833,0.679-1.498,1.5-1.498c0.837,0,1.5,0.664,1.5,1.498C29.563,38.32,28.899,39,28.063,39z"></path>
        </svg>
      </div>
    ),
    title: 'Python Programming',
    duration: '3 to 5 Months',
    level: 'Beginner to Advance',
    rating: '4.7 (110)',
    price: 'At An Attractive Prices'
  },
  {
    id: 5,
    icon: (
      <div className="flex w-full">
        <FcBarChart className='w-72 h-10' />
      </div>
    ),
    title: 'Data Science',
    duration: '3 to 5 Months',
    level: 'Beginner to Advance',
    rating: '4.8 (132)',
    price: 'At An Attractive Prices'
  },
  {
    id: 7,
    icon: (
      <div className="text-[#FF9900] flex items-center justify-center">
        <FaJava className="w-12 h-12" />
      </div>
    ),
    title: 'Java Fullstack',
    duration: '4 Months',
    level: 'Beginner to Advance',
    rating: '4.6 ( 80)',
    price: 'At An Attractive Prices'
  }
];

const Courses = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);

  return (
    <section id="courses" className="py-16 bg-gray-50 border-b border-gray-100">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex flex-col sm:flex-row justify-between items-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 sm:mb-0">Popular Courses</h2>
          {/* <a href="#all-courses" className="text-sm font-semibold text-blue-600 border border-blue-600 rounded-md px-5 py-2 hover:bg-blue-50 transition-colors">
            View All Courses
          </a> */}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map(course => (
            <div key={course.id} className="bg-white rounded-xl border border-gray-100 p-6 flex flex-col items-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">

              <div className="h-16 flex items-center justify-center mb-4">
                {course.icon}
              </div>

              <h3 className="text-lg font-bold text-gray-900 mb-3">{course.title}</h3>

              <div className="flex items-center text-xs text-gray-500 mb-3 space-x-2">
                <span>{course.duration}</span>
                <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                <span>{course.level}</span>
              </div>

              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {'★★★★★'.split('').map((star, i) => <span key={i}>{star}</span>)}
                </div>
                <span className="text-xs text-gray-500 ml-2">{course.rating}</span>
              </div>

              <div className="flex items-center space-x-3 mb-6">
                <span className="px-4 py-1.5 text-sm font-extrabold text-black bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full shadow-lg shadow-orange-500/40 hover:scale-105 transition-transform duration-300 border border-orange-400/50">
                  {course.price}
                </span>
                {/* <span className="text-sm text-gray-400 line-through">{course.oldPrice}</span> */}
              </div>

              <button
                onClick={() => setSelectedCourse(course)}
                className="w-full py-2.5 rounded-md text-blue-600 font-semibold border border-blue-200 hover:bg-blue-600 hover:text-white transition-colors"
              >
                Enroll Now
              </button>

            </div>
          ))}
        </div>

      </div>

      {selectedCourse && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-[fadeIn_0.2s_ease-in-out]">
          <div className="bg-white rounded-2xl p-8 max-w-sm w-full relative shadow-2xl transform transition-all">
            <button
              onClick={() => setSelectedCourse(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-800 transition-colors bg-gray-100 hover:bg-gray-200 p-1.5 rounded-full"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>

            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
            </div>

            <h3 className="text-2xl font-extrabold text-gray-900 mb-2 text-center">Ready to Enroll?</h3>
            <p className="text-gray-600 text-center mb-6 text-sm">
              Contact us directly to get started with <span className="font-semibold text-gray-800">{selectedCourse.title}</span>. Our team will guide you!
            </p>

            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 rounded-xl p-5 text-center shadow-inner">
              <span className="block text-xs uppercase tracking-wider text-blue-600 font-bold mb-1">Call / WhatsApp us at</span>
              <span className="block text-2xl font-black text-blue-900 tracking-wide">+91 9403183323</span>
            </div>

            <button
              onClick={() => setSelectedCourse(null)}
              className="mt-6 w-full py-2.5 rounded-md text-blue-600 font-semibold border border-blue-200 hover:bg-blue-600 hover:text-white transition-colors"
            >
              Close Window
            </button>
          </div>
        </div>
      )}

    </section>
  );
};

export default Courses;
