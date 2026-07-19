import React from 'react';

const Header = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-20 pb-16 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <div className="max-w-2xl">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-medium text-sm mb-6">
              <span className="mr-2">🏆</span> #1 IT Training Institute
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6 tracking-tight">
              Learn IT Skills.<br />
              Build <span className="text-blue-600">Your Future.</span>
            </h1>

            <p className="text-lg text-gray-600 mb-8 max-w-xl">
              Industry-focused IT courses with live projects, expert trainers and 100% placement assistance.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a href="#courses" className="bg-blue-700 text-white px-8 py-3.5 rounded-md font-semibold text-center hover:bg-blue-800 transition shadow-lg">
                Explore Courses
              </a>
              <a href="#demo" className="bg-white text-blue-700 border border-blue-200 px-8 py-3.5 rounded-md font-semibold text-center hover:bg-blue-50 transition shadow-sm">
                Book Free Demo
              </a>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-2 sm:flex sm:flex-wrap items-center gap-4 sm:gap-8 border-t border-gray-200 pt-8">
              <div className="flex flex-col">
                <span className="text-xl font-bold flex items-center text-gray-900">
                  <svg className="w-5 h-5 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20"><path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path></svg>
                  500+
                </span>
                <span className="text-sm text-gray-500">Students Trained</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold flex items-center text-gray-900">
                  <svg className="w-5 h-5 text-purple-600 mr-2" fill="currentColor" viewBox="0 0 20 20"><path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"></path></svg>
                  20+
                </span>
                <span className="text-sm text-gray-500">Expert Trainers</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold flex items-center text-gray-900">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                  95%
                </span>
                <span className="text-sm text-gray-500">Placement Assistance</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold flex items-center text-gray-900">
                  <svg className="w-5 h-5 text-blue-500 mr-2" fill="currentColor" viewBox="0 0 20 20"><path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"></path></svg>
                  30+
                </span>
                <span className="text-sm text-gray-500">Courses Available</span>
              </div>
            </div>
          </div>

          {/* Right Image / Graphic */}
          <div className="relative h-[350px] sm:h-[400px] lg:h-[500px] mt-12 lg:mt-0">
            {/* Abstract Background Shapes */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
            <div className="absolute top-0 right-32 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>

            {/* Image Frame */}
            <div className="absolute top-0 right-0 w-full max-w-lg h-full bg-transparent flex flex-col items-center justify-end relative">
              <img src="/asset/Student.png" alt="Students" className="w-full h-auto max-h-full object-contain relative z-10" />

              {/* Floating Badges */}
              <div className="absolute top-10 -left-16 z-20 bg-white px-4 py-3 rounded-lg shadow-xl border border-gray-100 hidden sm:flex items-center -rotate-2">
                <div className="bg-yellow-100 p-2 rounded-full mr-3">
                  <svg className="w-5 h-5 text-yellow-600" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-semibold">Industry</p>
                  <p className="text-sm font-bold text-gray-900">Expert Trainers</p>
                </div>
              </div>

              {/* <div className="absolute bottom-20 -right-6 bg-white px-4 py-3 rounded-lg shadow-xl border border-gray-100 flex items-center -rotate-2">
                 <div className="bg-green-100 p-2 rounded-full mr-3">
                   <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                 </div>
                 <div>
                   <p className="text-sm font-bold text-gray-900">100%</p>
                   <p className="text-xs text-gray-500 font-semibold">Practical Learning</p>
                 </div>
               </div> */}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Header;
