import React from 'react';
import { FcBarChart } from "react-icons/fc";
import { FaJava } from "react-icons/fa";

const courses = [
  // {
  //   id: 1,
  //   icon: (
  //     <div className="text-[#61DAFB]">
  //       <svg className="w-12 h-12" viewBox="0 0 118 103" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  //         <path d="M59 13.064c18.5 0 35.5 4.862 47.9 12.872 12.6 8.134 10.9 16.536.5 24.331-10.3 7.731-25.9 12.871-48.4 12.871-22.5 0-38.1-5.14-48.4-12.871-10.4-7.795-12.1-16.197.5-24.331 12.4-8.01 29.4-12.872 47.9-12.872zm0 46.241c-22.2 0-39-5-44.5-10.5 5.5-5.5 22.3-10.5 44.5-10.5s39 5 44.5 10.5c-5.5 5.5-22.3 10.5-44.5 10.5z"/>
  //         <path d="M59 39.813a10.6 10.6 0 100 21.2 10.6 10.6 0 000-21.2zm0 18.2a7.6 7.6 0 110-15.2 7.6 7.6 0 010 15.2z"/>
  //         <path d="M47.7 22.1c11.6-14.7 26.6-21.8 37.3-21.8 11.1 0 17 6.4 14.8 15.5-2.2 9.2-12.4 20-24 34.7-11.6 14.7-26.6 21.8-37.3 21.8-11.1 0-17-6.4-14.8-15.5 2.2-9.2 12.4-20 24-34.7zm11.9 29.9c10.4-13.1 19.4-22.8 21.3-30.7 1.8-7.5-2.2-11.9-10.5-11.9-8.5 0-21.6 6.3-32 19.4-10.4 13.1-19.4 22.8-21.3 30.7-1.8 7.5 2.2 11.9 10.5 11.9 8.5 0 21.6-6.3 32-19.4z"/>
  //         <path d="M70.3 22.1c-11.6-14.7-26.6-21.8-37.3-21.8-11.1 0-17 6.4-14.8 15.5 2.2 9.2 12.4 20 24 34.7 11.6 14.7 26.6 21.8 37.3 21.8 11.1 0 17-6.4 14.8-15.5-2.2-9.2-12.4-20-24-34.7zM58.4 52c-10.4-13.1-19.4-22.8-21.3-30.7-1.8-7.5 2.2-11.9 10.5-11.9 8.5 0 21.6 6.3 32 19.4 10.4 13.1 19.4 22.8 21.3 30.7 1.8 7.5-2.2 11.9-10.5 11.9-8.5 0-21.6-6.3-32-19.4z"/>
  //       </svg>
  //     </div>
  //   ),
  //   title: 'React.js Development',
  //   duration: '2 Months',
  //   level: 'Beginner',
  //   rating: '4.8 (120)',
  //   oldPrice: '₹12,999',
  //   price: '₹8,999'
  // },
  // {
  //   id: 2,
  //   icon: (
  //     <div className="text-[#68A063] bg-[#333] rounded p-1 w-12 h-12 flex items-center justify-center font-bold text-xl">
  //       JS
  //     </div>
  //   ),
  //   title: 'Node.js Development',
  //   duration: '2.5 Months',
  //   level: 'Beginner',
  //   rating: '4.7 (95)',
  //   oldPrice: '₹14,999',
  //   price: '₹9,999'
  // },
  // {
  //   id: 3,
  //   icon: (
  //     <div className="flex space-x-1">
  //       <div className="w-6 h-6 bg-[#8CC84B] rounded-full text-white text-[10px] flex items-center justify-center font-bold">M</div>
  //       <div className="w-6 h-6 bg-black rounded-full text-white text-[10px] flex items-center justify-center font-bold">EX</div>
  //       <div className="w-6 h-6 bg-[#61DAFB] rounded-full text-white text-[10px] flex items-center justify-center font-bold">R</div>
  //       <div className="w-6 h-6 bg-[#68A063] rounded-full text-white text-[10px] flex items-center justify-center font-bold">N</div>
  //     </div>
  //   ),
  //   title: 'MERN Stack',
  //   duration: '4 Months',
  //   level: 'Intermediate',
  //   rating: '4.9 (245)',
  //   oldPrice: '₹34,999',
  //   price: '₹24,999'
  // },
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
    oldPrice: '₹19,999',
    price: '₹14,999'
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
    oldPrice: '₹19,999',
    price: '₹14,999'
  },
  // {
  //   id: 6,
  //   icon: (
  //     <div className="text-[#FF9900] font-bold text-3xl">
  //       aws
  //     </div>
  //   ),
  //   title: 'AWS Cloud Essentials',
  //   duration: '1.5 Months',
  //   level: 'Beginner',
  //   rating: '4.6 (80)',
  //   oldPrice: '₹14,999',
  //   price: '₹9,999'
  // },
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
    oldPrice: '₹19,999',
    price: '₹14,999'
  }
];

const Courses = () => {
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
                <span className="text-xl font-bold text-gray-900">{course.price}</span>
                <span className="text-sm text-gray-400 line-through">{course.oldPrice}</span>
              </div>

              <button className="w-full py-2.5 rounded-md text-blue-600 font-semibold border border-blue-200 hover:bg-blue-600 hover:text-white transition-colors">
                Enroll Now
              </button>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Courses;
