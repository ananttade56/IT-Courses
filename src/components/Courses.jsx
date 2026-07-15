import React from 'react';

const courses = [
  {
    id: 1,
    icon: (
      <div className="text-[#61DAFB]">
        <svg className="w-12 h-12" viewBox="0 0 118 103" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M59 13.064c18.5 0 35.5 4.862 47.9 12.872 12.6 8.134 10.9 16.536.5 24.331-10.3 7.731-25.9 12.871-48.4 12.871-22.5 0-38.1-5.14-48.4-12.871-10.4-7.795-12.1-16.197.5-24.331 12.4-8.01 29.4-12.872 47.9-12.872zm0 46.241c-22.2 0-39-5-44.5-10.5 5.5-5.5 22.3-10.5 44.5-10.5s39 5 44.5 10.5c-5.5 5.5-22.3 10.5-44.5 10.5z"/>
          <path d="M59 39.813a10.6 10.6 0 100 21.2 10.6 10.6 0 000-21.2zm0 18.2a7.6 7.6 0 110-15.2 7.6 7.6 0 010 15.2z"/>
          <path d="M47.7 22.1c11.6-14.7 26.6-21.8 37.3-21.8 11.1 0 17 6.4 14.8 15.5-2.2 9.2-12.4 20-24 34.7-11.6 14.7-26.6 21.8-37.3 21.8-11.1 0-17-6.4-14.8-15.5 2.2-9.2 12.4-20 24-34.7zm11.9 29.9c10.4-13.1 19.4-22.8 21.3-30.7 1.8-7.5-2.2-11.9-10.5-11.9-8.5 0-21.6 6.3-32 19.4-10.4 13.1-19.4 22.8-21.3 30.7-1.8 7.5 2.2 11.9 10.5 11.9 8.5 0 21.6-6.3 32-19.4z"/>
          <path d="M70.3 22.1c-11.6-14.7-26.6-21.8-37.3-21.8-11.1 0-17 6.4-14.8 15.5 2.2 9.2 12.4 20 24 34.7 11.6 14.7 26.6 21.8 37.3 21.8 11.1 0 17-6.4 14.8-15.5-2.2-9.2-12.4-20-24-34.7zM58.4 52c-10.4-13.1-19.4-22.8-21.3-30.7-1.8-7.5 2.2-11.9 10.5-11.9 8.5 0 21.6 6.3 32 19.4 10.4 13.1 19.4 22.8 21.3 30.7 1.8 7.5-2.2 11.9-10.5 11.9-8.5 0-21.6-6.3-32-19.4z"/>
        </svg>
      </div>
    ),
    title: 'React.js Development',
    duration: '2 Months',
    level: 'Beginner',
    rating: '4.8 (120)',
    oldPrice: '₹12,999',
    price: '₹8,999'
  },
  {
    id: 2,
    icon: (
      <div className="text-[#68A063] bg-[#333] rounded p-1 w-12 h-12 flex items-center justify-center font-bold text-xl">
        JS
      </div>
    ),
    title: 'Node.js Development',
    duration: '2.5 Months',
    level: 'Beginner',
    rating: '4.7 (95)',
    oldPrice: '₹14,999',
    price: '₹9,999'
  },
  {
    id: 3,
    icon: (
      <div className="flex space-x-1">
        <div className="w-6 h-6 bg-[#8CC84B] rounded-full text-white text-[10px] flex items-center justify-center font-bold">M</div>
        <div className="w-6 h-6 bg-black rounded-full text-white text-[10px] flex items-center justify-center font-bold">EX</div>
        <div className="w-6 h-6 bg-[#61DAFB] rounded-full text-white text-[10px] flex items-center justify-center font-bold">R</div>
        <div className="w-6 h-6 bg-[#68A063] rounded-full text-white text-[10px] flex items-center justify-center font-bold">N</div>
      </div>
    ),
    title: 'MERN Stack',
    duration: '4 Months',
    level: 'Intermediate',
    rating: '4.9 (245)',
    oldPrice: '₹34,999',
    price: '₹24,999'
  },
  {
    id: 4,
    icon: (
      <div className="text-[#3776AB]">
        <svg className="w-12 h-12" viewBox="0 0 128 128" fill="currentColor">
          <path d="M63.9 0C28.7 0 30.6 15.2 30.6 15.2v16h34v4.5H23s-17.5-1.9-17.5 17.5 16 18.2 16 18.2h7.8v-18s-.2-10.4 10.4-10.4h28s10.6-.2 10.6 10.6v30.4H63.9s-35.3 1.9-35.3-15.2h-11c0 35.3 35.3 35.3 35.3 35.3s35.3 1.9 35.3-15.2v-16h-34V67.8H97s17.5 1.9 17.5-17.5-16-18.2-16-18.2h-7.8v18s.2 10.4-10.4 10.4h-28s-10.6.2-10.6-10.6V19.8h14.2s35.3-1.9 35.3 15.2h11C128 0 92.7 0 92.7 0z"/>
        </svg>
      </div>
    ),
    title: 'Python Programming',
    duration: '2 Months',
    level: 'Beginner',
    rating: '4.7 (110)',
    oldPrice: '₹12,999',
    price: '₹8,999'
  },
  {
    id: 5,
    icon: (
      <div className="flex">
        <svg className="w-10 h-10 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"></path></svg>
      </div>
    ),
    title: 'Data Science',
    duration: '4 Months',
    level: 'Intermediate',
    rating: '4.8 (132)',
    oldPrice: '₹34,999',
    price: '₹24,999'
  },
  {
    id: 6,
    icon: (
      <div className="text-[#FF9900] font-bold text-3xl">
        aws
      </div>
    ),
    title: 'AWS Cloud Essentials',
    duration: '1.5 Months',
    level: 'Beginner',
    rating: '4.6 (80)',
    oldPrice: '₹14,999',
    price: '₹9,999'
  }
];

const Courses = () => {
  return (
    <section id="courses" className="py-16 bg-gray-50 border-b border-gray-100">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col sm:flex-row justify-between items-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 sm:mb-0">Popular Courses</h2>
          <a href="#all-courses" className="text-sm font-semibold text-blue-600 border border-blue-600 rounded-md px-5 py-2 hover:bg-blue-50 transition-colors">
            View All Courses
          </a>
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
