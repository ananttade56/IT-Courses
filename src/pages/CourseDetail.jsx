import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import api from '../services/api';

const CourseDetail = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showEnrollModal, setShowEnrollModal] = useState(false);

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);

    const fetchCourse = async () => {
      try {
        const response = await api.get(`/api/public/courses/${id}`);
        setCourse(response.data.course);
      } catch (error) {
        console.error('Error fetching course:', error);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchCourse();
    }
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center bg-gray-50">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!course) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center bg-gray-50">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Course Not Found</h2>
        <Link to="/" className="text-blue-600 hover:underline">Return to Home</Link>
      </div>
    );
  }

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="bg-[#1a1f36] py-20 border-b border-gray-700">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-white">
            <div className="inline-block px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full text-sm font-semibold mb-6">
              {course.level || 'All Levels'}
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-white leading-tight">
              {course.title}
            </h1>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl">
              {course.description}
            </p>
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-300">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                <span className="font-semibold text-white">{course.rating || '4.5'}</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                <span>{course.duration || 'Flexible Duration'}</span>
              </div>
            </div>
          </div>
          <div className="w-48 h-48 bg-white rounded-full flex items-center justify-center shadow-2xl p-8 shrink-0 relative overflow-hidden group">
            <div className="absolute inset-0 bg-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
            <div className="relative z-10 transform group-hover:scale-110 transition-transform duration-300">
              {course.icon ? (
                course.icon.startsWith('<svg') ? (
                  <div dangerouslySetInnerHTML={{ __html: course.icon }} />
                ) : (
                  <img src={`${api.defaults.baseURL}${course.icon}`} alt={course.title} className="w-20 h-20 object-contain" />
                )
              ) : (
                <svg className="w-20 h-20 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14v6m-3-11v5a3 3 0 006 0v-5"></path>
                </svg>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col lg:flex-row gap-12">

          <div className="flex-1 space-y-12">
            {/* Syllabus Section */}
            {course.syllabus && course.syllabus.length > 0 && (
              <section>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Course Curriculum</h2>
                <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
                  {course.syllabus.map((item, index) => (
                    <div key={index} className="flex items-start p-5 border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-sm mr-4 mt-0.5">
                        {index + 1}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800">{item}</h3>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Features Section */}
            {course.features && course.features.length > 0 && (
              <section>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">What You Will Get</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {course.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3 p-4 bg-blue-50 rounded-lg border border-blue-100">
                      <svg className="w-6 h-6 text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                      <span className="font-medium text-gray-800">{feature}</span>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Sticky Sidebar */}
          <div className="lg:w-[400px]">
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 sticky top-28">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Enroll in this course</h3>

              <div className="mb-6">
                <div className="text-sm text-gray-500 mb-1">Pricing</div>
                <div className="text-2xl font-extrabold text-blue-600">{course.price || 'Contact Us'}</div>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex justify-between text-gray-600 border-b border-gray-100 pb-3">
                  <span>Duration</span>
                  <span className="font-semibold text-gray-900">{course.duration || 'Flexible Duration'}</span>
                </div>
                <div className="flex justify-between text-gray-600 border-b border-gray-100 pb-3">
                  <span>Skill Level</span>
                  <span className="font-semibold text-gray-900">{course.level || 'All Levels'}</span>
                </div>
              </div>

              <button
                onClick={() => setShowEnrollModal(true)}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-600/30 transition-all hover:-translate-y-1"
              >
                Enroll Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Enroll Modal */}
      {showEnrollModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-[fadeIn_0.2s_ease-in-out]">
          <div className="bg-white rounded-2xl p-8 max-w-sm w-full relative shadow-2xl transform transition-all">
            <button
              onClick={() => setShowEnrollModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-800 transition-colors bg-gray-100 hover:bg-gray-200 p-1.5 rounded-full"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>

            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
            </div>

            <h3 className="text-2xl font-extrabold text-gray-900 mb-2 text-center">Ready to Enroll?</h3>
            <p className="text-gray-600 text-center mb-6 text-sm">
              Contact us directly to get started with <span className="font-semibold text-gray-800">{course.title}</span>. Our team will guide you!
            </p>

            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 rounded-xl p-5 text-center shadow-inner">
              <span className="block text-xs uppercase tracking-wider text-blue-600 font-bold mb-1">Call / WhatsApp us at</span>
              <span className="block text-2xl font-black text-blue-900 tracking-wide">+91 9403183323</span>
            </div>

            <button
              onClick={() => setShowEnrollModal(false)}
              className="mt-6 w-full py-2.5 rounded-md text-blue-600 font-semibold border border-blue-200 hover:bg-blue-600 hover:text-white transition-colors"
            >
              Close Window
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CourseDetail;
