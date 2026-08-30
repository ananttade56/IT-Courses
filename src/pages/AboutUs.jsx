import React from 'react';

const AboutUs = () => {
  return (
    <div className="py-16 bg-white">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About Us</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Welcome to our Training Institute, your trusted partner in building a successful career. We are dedicated to providing high-quality, industry-relevant training to help you master the latest technologies and land your dream job.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="flex justify-center">
            <img src="/asset/csrLogo.png" alt="About Us" className="rounded-lg w-full max-w-md object-contain" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-gray-600 mb-4 text-lg">
              Our mission is to bridge the gap between academia and industry by delivering practical, hands-on training that empowers students and professionals to excel in their careers. We believe in learning by doing, which is why our curriculum is designed around real-world projects and case studies.
            </p>
            <p className="text-gray-600 text-lg">
              We strive to create an inclusive and supportive learning environment where everyone has the opportunity to grow, innovate, and achieve their full potential.
            </p>
          </div>
        </div>

        <div className="bg-blue-50 rounded-2xl p-8 md:p-12 mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Why Choose Us?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-blue-100 text-center">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                🎓
              </div>
              <h3 className="text-xl font-bold mb-3">Expert Instructors</h3>
              <p className="text-gray-600">Learn from industry veterans with years of hands-on experience and a passion for teaching.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-blue-100 text-center">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                💼
              </div>
              <h3 className="text-xl font-bold mb-3">100% Placement Assistance</h3>
              <p className="text-gray-600">We don't just train you; we help you get hired with dedicated placement support and interview prep.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-blue-100 text-center">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                💻
              </div>
              <h3 className="text-xl font-bold mb-3">Practical Learning</h3>
              <p className="text-gray-600">Work on live projects and assignments that simulate real-world challenges.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
