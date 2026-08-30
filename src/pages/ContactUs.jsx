import React from 'react';
import FaqAndContact from '../components/FaqAndContact';

const ContactUs = () => {
  return (
    <div className="bg-gray-50 pt-16">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 mb-4">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Get In Touch</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Have questions about our courses or want to discuss your career goals? We're here to help. Reach out to us today!
          </p>
        </div>
      </div>
      <FaqAndContact />
    </div>
  );
};

export default ContactUs;
