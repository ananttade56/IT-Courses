import React from 'react';

const testimonials = [
  {
    name: 'Rohit Sharma',
    course: 'MERN Stack',
    placedAt: 'Infosys',
    review: 'TechEdu gave me the right knowledge and confidence. The trainers are amazing and very supportive!',
    avatar: '👨‍🎓'
  },
  {
    name: 'Sneha Patil',
    course: 'React.js',
    placedAt: 'TCS',
    review: 'The course content is very well structured and practical. I got my dream job with a great package.',
    avatar: '👩‍🎓'
  },
  {
    name: 'Aman Verma',
    course: 'Python',
    placedAt: 'Wipro',
    review: 'Hands-on projects and mock interviews helped me a lot in cracking the interviews.',
    avatar: '👨‍💻'
  },
  {
    name: 'Priya Singh',
    course: 'Data Science',
    placedAt: 'Accenture',
    review: 'Best institute for learning and career growth. Highly recommended!',
    avatar: '👩‍💻'
  }
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-gray-50 border-b border-gray-100 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        <h2 className="text-2xl font-bold text-gray-900 mb-8">What Our Students Say</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          
          {/* Navigation Arrows (Decorative for static design) */}
          <button className="absolute -left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center text-gray-400 hover:text-blue-600 z-10 hidden xl:flex">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
          </button>
          <button className="absolute -right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center text-gray-400 hover:text-blue-600 z-10 hidden xl:flex">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
          </button>

          {testimonials.map((testi, index) => (
            <div key={index} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex flex-col">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-2xl mr-4">
                  {testi.avatar}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm">{testi.name}</h4>
                  <p className="text-xs text-gray-500">{testi.course}</p>
                  <p className="text-xs text-green-600 font-semibold">Placed at {testi.placedAt}</p>
                </div>
              </div>
              <p className="text-sm text-gray-600 italic mb-4 flex-grow">"{testi.review}"</p>
              <div className="flex text-yellow-400 text-xs">
                {'★★★★★'.split('').map((star, i) => <span key={i}>{star}</span>)}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
