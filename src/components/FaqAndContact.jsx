import React, { useState } from 'react';

const faqs = [
  { question: 'Do I need coding knowledge to join?', answer: 'No prior coding knowledge is required for our beginner courses.' },
  { question: 'Is placement guaranteed?', answer: 'We provide 100% placement assistance, but guarantee depends on your performance.' },
  { question: 'What is the mode of training?', answer: 'We offer both online training modes.' },
  { question: 'Will I get a certificate after course completion?', answer: 'Yes, you will receive an industry-recognized certificate upon completion.' },
  // { question: 'Is EMI available?', answer: 'Yes, we offer flexible EMI options for all our long-term courses.' }
];

const FaqAndContact = () => {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <section className="py-16 bg-white border-b border-gray-100">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-12">

          {/* FAQ Section */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                  <button
                    className="w-full px-6 py-4 text-left flex justify-between items-center bg-white hover:bg-gray-50"
                    onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                  >
                    <span className="font-semibold text-gray-900">{faq.question}</span>
                    <span className="text-blue-600 font-bold text-xl">{openFaq === index ? '-' : '+'}</span>
                  </button>
                  {openFaq === index && (
                    <div className="px-6 pb-4 text-gray-600 text-sm">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Contact Section */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Contact Us</h2>
            <div className="flex flex-col md:flex-row gap-8">

              {/* Contact Info */}
              <div className="flex-1 space-y-6">
                <div className="flex items-start">
                  <div className="mt-1 mr-3 text-gray-400">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">+91 9403183323</p>
                  </div>
                </div>
                {/* <div className="flex items-start">
                  <div className="mt-1 mr-3 text-gray-400">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">info@techedu.com</p>
                  </div>
                </div> */}
                {/* <div className="flex items-start">
                  <div className="mt-1 mr-3 text-gray-400">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">TechEdu IT Training Institute<br/>2nd Floor, ABC Complex,<br/>Baner, Pune - 411045</p>
                  </div>
                </div> */}
                <div className="flex items-start">
                  <div className="mt-1 mr-3 text-gray-400">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Mon - Sat: 7:00 PM onwords..<br />Sunday: Closed</p>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="flex-1">
                <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert("message send succefully"); e.target.reset(); }}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input type="text" required placeholder="Your Name" className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 text-sm" />
                    <input type="email" required placeholder="Your Email" className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 text-sm" />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input type="tel" required placeholder="Your Phone" className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 text-sm" />
                    <select required className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 text-sm text-gray-500">
                      <option value="">Select Course</option>
                      <option value="java">Java</option>
                      <option value="python">Python</option>
                      <option value="mern">MERN Stack</option>
                    </select>
                  </div>
                  <textarea required placeholder="Your Message" rows="3" className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 text-sm"></textarea>
                  <button type="submit" className="w-full bg-blue-700 text-white font-semibold py-3 rounded-md hover:bg-blue-800 transition-colors shadow-md">
                    Send Message
                  </button>
                </form>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default FaqAndContact;
