import React from 'react';

const trainers = [
  {
    name: 'Rahul Mehta',
    role: 'Full Stack Developer',
    experience: '10+ Years Exp.',
    avatar: '👨‍🏫'
  },
  {
    name: 'Anjali Desai',
    role: 'React.js Expert',
    experience: '8+ Years Exp.',
    avatar: '👩‍🏫'
  },
  {
    name: 'Sanjay Kumar',
    role: 'Python Specialist',
    experience: '9+ Years Exp.',
    avatar: '👨‍💻'
  },
  {
    name: 'Vikram Joshi',
    role: 'Cloud Architect',
    experience: '12+ Years Exp.',
    avatar: '👨‍💼'
  }
];

const Trainers = () => {
  return (
    <section className="py-16 bg-white border-b border-gray-100">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900">Meet Our Trainers</h2>
          <button className="text-sm font-semibold text-blue-600 border border-blue-200 rounded-md px-4 py-1.5 hover:bg-blue-50">
            View All Trainers
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trainers.map((trainer, index) => (
            <div key={index} className="flex items-center bg-gray-50 p-4 rounded-xl border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-3xl mr-4 flex-shrink-0">
                {trainer.avatar}
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-sm">{trainer.name}</h4>
                <p className="text-xs text-gray-600 mb-1">{trainer.role}</p>
                <p className="text-[10px] text-gray-500 mb-2">{trainer.experience}</p>
                
                <div className="flex space-x-2 text-gray-400">
                  <a href="#" className="hover:text-blue-600"><svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg></a>
                  <a href="#" className="hover:text-blue-400"><svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg></a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Trainers;
