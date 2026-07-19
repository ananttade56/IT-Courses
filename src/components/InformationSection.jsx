import React from 'react';

const InformationSection = () => {
  return (
    <section className="py-16 bg-gray-50 border-b border-gray-100">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">

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
            {/* <button className="w-full mt-6 py-2 border border-blue-200 text-blue-600 rounded-md text-sm font-semibold hover:bg-blue-50">
              View All Resources
            </button> */}
          </div>

          {/* Upcoming Batches */}
          <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex flex-col h-full">
            <h3 className="text-lg font-bold text-gray-900 mb-6">Upcoming Batches</h3>
            <div className="space-y-4 flex-grow">
              <div className="border border-gray-100 p-3 rounded-lg flex justify-between items-center bg-gray-50">
                <div>
                  <h4 className="text-sm font-bold text-gray-900">Java Fullstack Developer </h4>
                  <p className="text-xs text-gray-500">To be informed soon...</p>
                </div>
                <span className="bg-red-100 text-red-600 text-[10px] font-bold px-2 py-1 rounded">11 Seats Left</span>
              </div>
              <div className="border border-gray-100 p-3 rounded-lg flex justify-between items-center bg-gray-50">
                <div>
                  <h4 className="text-sm font-bold text-gray-900">Data Science</h4>
                  <p className="text-xs text-gray-500">To be informed soon...</p>
                </div>
                <span className="bg-orange-100 text-orange-600 text-[10px] font-bold px-2 py-1 rounded">15 Seats Left</span>
              </div>
              <div className="border border-gray-100 p-3 rounded-lg flex justify-between items-center bg-gray-50">
                <div>
                  <h4 className="text-sm font-bold text-gray-900">Python Programming</h4>
                  <p className="text-xs text-gray-500">To be informed soon...</p>
                </div>
                <span className="bg-green-100 text-green-600 text-[10px] font-bold px-2 py-1 rounded">20 Seats Left</span>
              </div>
            </div>
            {/* <button className="w-full mt-6 py-2 border border-blue-200 text-blue-600 rounded-md text-sm font-semibold hover:bg-blue-50">
              View All Batches
            </button> */}
          </div>

        </div>

      </div>
    </section>
  );
};

export default InformationSection;
