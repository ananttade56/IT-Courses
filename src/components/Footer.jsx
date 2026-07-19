import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#1a1f36] text-gray-300 pt-16 pb-8 border-t border-gray-800">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">

          {/* Logo and About */}
          <div className="lg:col-span-1 space-y-6">
            <a href="/">
              {/* Keeping the logo from earlier */}
              <img src="/asset/csrLogo.png" alt="CSR Logo" className=" p-1 rounded w-auto object-contain" />
            </a>
            <p className="text-xs text-gray-400 leading-relaxed">
              Empowering students with industry-relevant skills and helping them build successful careers in IT.
            </p>
            {/* <div className="flex space-x-3"> */}
            {/* Social Icons */}
            {/* <a href="#" className="w-8 h-8 rounded-full bg-[#2a3045] flex items-center justify-center hover:bg-blue-600 transition-colors text-white text-xs"><i className="fab fa-facebook-f">f</i></a>
              <a href="#" className="w-8 h-8 rounded-full bg-[#2a3045] flex items-center justify-center hover:bg-blue-400 transition-colors text-white text-xs"><i className="fab fa-twitter">t</i></a>
              <a href="#" className="w-8 h-8 rounded-full bg-[#2a3045] flex items-center justify-center hover:bg-blue-700 transition-colors text-white text-xs"><i className="fab fa-linkedin-in">in</i></a>
              <a href="#" className="w-8 h-8 rounded-full bg-[#2a3045] flex items-center justify-center hover:bg-pink-600 transition-colors text-white text-xs"><i className="fab fa-instagram">ig</i></a>
              <a href="#" className="w-8 h-8 rounded-full bg-[#2a3045] flex items-center justify-center hover:bg-red-600 transition-colors text-white text-xs"><i className="fab fa-youtube">yt</i></a>
            </div> */}
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#courses" className="hover:text-white transition-colors">Courses</a></li>
              <li><a href="#trainers" className="hover:text-white transition-colors">Trainers</a></li>
              <li><a href="#placements" className="hover:text-white transition-colors">Placements</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h4 className="text-white font-bold mb-6">Courses</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              {/* <li><a href="#" className="hover:text-white transition-colors">React.js</a></li> */}
              {/* <li><a href="#" className="hover:text-white transition-colors">MERN Stack</a></li> */}
              <li><a href="#" className="hover:text-white transition-colors">Python</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Data Science</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Java Fullstack</a></li>
              <li><a href="#" className="hover:text-white transition-colors">View All Courses</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white font-bold mb-6">Support</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Refund Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Career</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Sitemap</a></li>
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
