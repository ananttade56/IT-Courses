import React from 'react';

const InformationSection = () => {
  return (
    <section className="py-16 bg-gray-50 border-b border-gray-100">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Free Resources */}
          <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex flex-col h-full">
            <h3 className="text-lg font-bold text-gray-900 mb-6">Free Resources</h3>
            <div className="space-y-4 flex-grow">
              <div className="flex items-start">
                <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 mr-3 flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"></path></svg>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-900">Interview Questions</h4>
                  <p className="text-xs text-gray-500">Prepare for your next interview</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-10 h-10 bg-purple-50 rounded-lg flex items-center justify-center text-purple-600 mr-3 flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-900">Resume Template</h4>
                  <p className="text-xs text-gray-500">Create a professional resume</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center text-green-600 mr-3 flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-900">Roadmaps</h4>
                  <p className="text-xs text-gray-500">Step-by-step learning paths</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-10 h-10 bg-yellow-50 rounded-lg flex items-center justify-center text-yellow-600 mr-3 flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-900">E-books</h4>
                  <p className="text-xs text-gray-500">Free guides & ebooks</p>
                </div>
              </div>
            </div>
            <button className="w-full mt-6 py-2 border border-blue-200 text-blue-600 rounded-md text-sm font-semibold hover:bg-blue-50">
              View All Resources
            </button>
          </div>

          {/* Upcoming Batches */}
          <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex flex-col h-full">
            <h3 className="text-lg font-bold text-gray-900 mb-6">Upcoming Batches</h3>
            <div className="space-y-4 flex-grow">
              <div className="border border-gray-100 p-3 rounded-lg flex justify-between items-center bg-gray-50">
                <div>
                  <h4 className="text-sm font-bold text-gray-900">MERN Stack Development</h4>
                  <p className="text-xs text-gray-500">20th May 2025 • 10:00 AM - 12:00 PM</p>
                </div>
                <span className="bg-red-100 text-red-600 text-[10px] font-bold px-2 py-1 rounded">11 Seats Left</span>
              </div>
              <div className="border border-gray-100 p-3 rounded-lg flex justify-between items-center bg-gray-50">
                <div>
                  <h4 className="text-sm font-bold text-gray-900">React.js Development</h4>
                  <p className="text-xs text-gray-500">1st June 2025 • 10:00 AM - 12:00 PM</p>
                </div>
                <span className="bg-orange-100 text-orange-600 text-[10px] font-bold px-2 py-1 rounded">15 Seats Left</span>
              </div>
              <div className="border border-gray-100 p-3 rounded-lg flex justify-between items-center bg-gray-50">
                <div>
                  <h4 className="text-sm font-bold text-gray-900">Python Programming</h4>
                  <p className="text-xs text-gray-500">5th June 2025 • 7:00 PM - 9:00 PM</p>
                </div>
                <span className="bg-green-100 text-green-600 text-[10px] font-bold px-2 py-1 rounded">20 Seats Left</span>
              </div>
            </div>
            <button className="w-full mt-6 py-2 border border-blue-200 text-blue-600 rounded-md text-sm font-semibold hover:bg-blue-50">
              View All Batches
            </button>
          </div>

          {/* Student Projects */}
          <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex flex-col h-full">
            <h3 className="text-lg font-bold text-gray-900 mb-6">Student Projects</h3>
            <div className="space-y-4 flex-grow">
              <div className="flex items-center">
                <div className="w-16 h-12 bg-blue-100 rounded mr-3 overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-r from-cyan-500 to-blue-500 opacity-80"></div>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-900">E-Commerce Website</h4>
                  <p className="text-xs text-gray-500">MERN Stack</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-16 h-12 bg-purple-100 rounded mr-3 overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-r from-purple-500 to-indigo-500 opacity-80"></div>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-900">Task Management App</h4>
                  <p className="text-xs text-gray-500">React.js</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-16 h-12 bg-green-100 rounded mr-3 overflow-hidden flex items-center justify-center">
                  <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path></svg>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-900">AI Chat Application</h4>
                  <p className="text-xs text-gray-500">Python</p>
                </div>
              </div>
            </div>
            <button className="w-full mt-6 py-2 border border-blue-200 text-blue-600 rounded-md text-sm font-semibold hover:bg-blue-50">
              View All Projects
            </button>
          </div>

          {/* Latest Blog */}
          <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex flex-col h-full">
            <h3 className="text-lg font-bold text-gray-900 mb-6">Latest Blog</h3>
            <div className="space-y-4 flex-grow">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-blue-900 text-blue-400 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                   <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 7l10 5 10-5-10-5zm0 7.5L4.5 7 12 4.5l7.5 2.5-7.5 2.5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-900 leading-tight">Top 10 React Interview Questions in 2025</h4>
                  <p className="text-[10px] text-gray-400 mt-1">May 10, 2025</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-12 h-12 bg-blue-100 overflow-hidden rounded-lg mr-3 flex-shrink-0">
                  <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: 'linear-gradient(to right, #4facfe 0%, #00f2fe 100%)' }}></div>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-900 leading-tight">How to Become a Full Stack Developer</h4>
                  <p className="text-[10px] text-gray-400 mt-1">May 5, 2025</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-12 h-12 bg-blue-800 text-blue-300 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-900 leading-tight">Top IT Skills to Learn in 2025</h4>
                  <p className="text-[10px] text-gray-400 mt-1">April 28, 2025</p>
                </div>
              </div>
            </div>
            <button className="w-full mt-6 py-2 border border-blue-200 text-blue-600 rounded-md text-sm font-semibold hover:bg-blue-50">
              Read All Blogs
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};

export default InformationSection;
