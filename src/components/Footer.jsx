import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../services/api';

const Footer = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await api.get('/api/public/courses');
        setCourses(response.data.courses || []);
      } catch (error) {
        console.error('Error fetching courses in Footer:', error);
      }
    };
    fetchCourses();
  }, []);

  return (
    <footer className="bg-[#1a1f36] text-gray-300 pt-16 pb-8 border-t border-gray-800">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">

          {/* Logo and About */}
          <div className="lg:col-span-1 space-y-6">
            <Link to="/">
              <img src="/asset/csrLogo.png" alt="CSR Logo" className="p-1 rounded w-auto object-contain" />
            </Link>
            <p className="text-xs text-gray-400 leading-relaxed">
              Empowering students with industry-relevant skills and helping them build successful careers in IT.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/courses" className="hover:text-white transition-colors">Courses</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Dynamic Courses from /api/public/courses */}
          <div>
            <h4 className="text-white font-bold mb-6">Courses</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              {courses.length > 0 ? (
                courses.slice(0, 6).map((course) => (
                  <li key={course._id}>
                    <Link to={`/course/${course._id}`} className="hover:text-white transition-colors">
                      {course.title}
                    </Link>
                  </li>
                ))
              ) : (
                <li className="text-xs text-gray-500">Loading courses...</li>
              )}
              {/* <li>
                <Link to="/courses" className="hover:text-white transition-colors text-blue-400 font-medium">
                  View All Courses →
                </Link>
              </li> */}
            </ul>
          </div>

          {/* Subscribe to Newsletter */}
          <div className="lg:col-span-1">
            <h4 className="text-white font-bold mb-6">Subscribe to Newsletter</h4>
            <p className="text-xs text-gray-400 mb-4">
              Get the latest updates about new courses, batches and offers.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-[#2a3045] text-white px-4 py-2 rounded-l-md w-full focus:outline-none text-sm border border-gray-700 focus:border-blue-500"
              />
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-r-md text-white transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </button>
            </form>
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-[#2a3045] text-center text-xs text-gray-500 flex flex-col items-center">
          <p>&copy; {new Date().getFullYear()} TechEdu IT Training Institute. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
