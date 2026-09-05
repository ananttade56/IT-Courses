import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import api from '../services/api';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [role, setRole] = useState(localStorage.getItem('role'));
  const [username, setUsername] = useState(localStorage.getItem('username'));
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    localStorage.removeItem('username');
    setRole(null);
    setUsername(null);
    window.dispatchEvent(new Event('auth-change'));
    navigate('/login');
  };

  useEffect(() => {
    const handleAuthChange = () => {
      setRole(localStorage.getItem('role'));
      setUsername(localStorage.getItem('username'));
    };
    window.addEventListener('auth-change', handleAuthChange);
    window.addEventListener('storage', handleAuthChange);

    return () => {
      window.removeEventListener('auth-change', handleAuthChange);
      window.removeEventListener('storage', handleAuthChange);
    };
  }, []);
  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Courses', href: '/#courses' },
    { name: 'Videos', href: '/videos' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="bg-[#1a1f36] shadow-sm sticky top-0 z-50">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="cursor-pointer">
              <img src="/asset/csrLogo.png" alt="TechEdu Logo" className="w-48 sm:w-64 object-contain cursor-pointer" />
            </Link>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center space-x-6 text-sm font-medium text-white">
            {navLinks.map((link) => (
              <Link key={link.name} to={link.href} className="hover:text-blue-600 transition-colors">
                {link.name}
              </Link>
            ))}
            {role === 'Admin' && (
              <Link to="/admin/courses" className="text-yellow-400 hover:text-yellow-300 font-bold transition-colors">
                Admin Dashboard
              </Link>
            )}
          </div>

          {/* Right side contact & button */}
          <div className="hidden lg:flex items-center space-x-4">
            <a href="tel:+918956083323" className="flex items-center text-blue-600 font-semibold text-sm border border-blue-200 rounded-full px-4 py-2 hover:bg-blue-50 cursor-pointer transition-colors">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
              +91 8956083323
            </a>
            {role ? (
              <div className="flex items-center space-x-3">
                {role === 'Admin' && (
                  <Link to="/signup" className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-blue-700 transition-colors shadow-md">
                    Register User
                  </Link>
                )}
                {username && <span className="text-white text-sm font-medium">Hi, {username}</span>}
                <button onClick={handleLogout} className="bg-red-600 text-white px-5 py-2 rounded-md text-sm font-semibold hover:bg-red-700 transition-colors shadow-md cursor-pointer">
                  Logout
                </button>
              </div>
            ) : (
              <>
                <Link to="/login" className="text-white hover:text-blue-400 font-medium text-sm transition-colors">
                  Login
                </Link>
                <Link to="/signup" className="bg-blue-600 text-white px-5 py-2 rounded-md text-sm font-semibold hover:bg-blue-700 transition-colors shadow-md">
                  Sign Up
                </Link>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-blue-600 hover:bg-blue-50 focus:outline-none"
            >
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-xl absolute w-full">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <Link key={link.name} to={link.href} onClick={() => setIsOpen(false)} className="text-gray-700 hover:text-blue-600 hover:bg-blue-50 block px-3 py-2 rounded-md text-base font-medium">
                {link.name}
              </Link>
            ))}
            {role === 'Admin' && (
              <Link to="/admin/courses" onClick={() => setIsOpen(false)} className="text-yellow-600 hover:text-yellow-700 hover:bg-yellow-50 block px-3 py-2 rounded-md text-base font-bold">
                Admin Dashboard
              </Link>
            )}
            <div className="mt-4 pt-4 border-t border-gray-100 flex flex-col space-y-3">
              <a href="tel:+918956083323" className="flex items-center text-blue-600 font-semibold px-3 py-2">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                +91 8956083323
              </a>
              <div className="flex flex-col space-y-2 px-3">
                {role ? (
                  <div className="flex flex-col space-y-2">
                    {role === 'Admin' && (
                      <Link to="/signup" onClick={() => setIsOpen(false)} className="bg-blue-600 text-white text-center w-full py-2.5 rounded-md text-base font-semibold hover:bg-blue-700 transition-colors shadow-sm">
                        Register User
                      </Link>
                    )}
                    {username && <span className="text-center text-gray-800 font-medium py-1">Logged in as {username}</span>}
                    <button onClick={() => { handleLogout(); setIsOpen(false); }} className="bg-red-600 text-white text-center w-full py-2.5 rounded-md text-base font-semibold hover:bg-red-700 transition-colors shadow-sm cursor-pointer">
                      Logout
                    </button>
                  </div>
                ) : (
                  <>
                    <Link to="/login" onClick={() => setIsOpen(false)} className="text-center w-full py-2.5 rounded-md text-base font-medium text-gray-700 bg-gray-50 hover:bg-gray-100 border border-gray-200 transition-colors">
                      Login
                    </Link>
                    <Link to="/signup" onClick={() => setIsOpen(false)} className="bg-blue-600 text-white text-center w-full py-2.5 rounded-md text-base font-semibold hover:bg-blue-700 transition-colors shadow-sm">
                      Sign Up
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
