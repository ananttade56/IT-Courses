import React from 'react';

const RoadmapAndPlacement = () => {
  return (
    <section className="py-16 bg-white border-b border-gray-100">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Left: Your Learning Roadmap */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Your Learning Roadmap</h2>
            <div className="bg-gray-50 rounded-xl p-8 border border-gray-100">
              <div className="flex justify-between items-center relative">
                {/* Connecting Line */}
                <div className="absolute left-0 right-0 h-0.5 bg-blue-100 top-1/2 -translate-y-1/2 z-0 hidden sm:block"></div>
                
                {/* Steps */}
                {[
                  { icon: '📝', label: 'Enroll', color: 'bg-green-100 text-green-600' },
                  { icon: '🔑', label: 'Foundation', color: 'bg-blue-100 text-blue-600' },
                  { icon: '💻', label: 'Projects', color: 'bg-yellow-100 text-yellow-600' },
                  { icon: '👥', label: 'Mock Interviews', color: 'bg-purple-100 text-purple-600' },
                  { icon: '🏢', label: 'Internship', color: 'bg-blue-100 text-blue-600' },
                  { icon: '📈', label: 'Placement', color: 'bg-yellow-100 text-yellow-600' }
                ].map((step, index) => (
                  <div key={index} className="flex flex-col items-center relative z-10">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center text-xl mb-3 shadow-sm ${step.color}`}>
                      {step.icon}
                    </div>
                    <span className="text-xs font-semibold text-gray-600 text-center">{step.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Our Placement Record */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Our Placement Record</h2>
            <div className="bg-white rounded-xl p-6 sm:p-8 border border-gray-100 shadow-sm">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="text-center">
                  <h4 className="text-2xl font-bold text-blue-600">500+</h4>
                  <p className="text-xs text-gray-500">Students Placed</p>
                </div>
                <div className="text-center">
                  <h4 className="text-2xl font-bold text-blue-600">95%</h4>
                  <p className="text-xs text-gray-500">Placement Rate</p>
                </div>
                <div className="text-center">
                  <h4 className="text-2xl font-bold text-blue-600">12 LPA</h4>
                  <p className="text-xs text-gray-500">Highest Package</p>
                </div>
                <div className="text-center">
                  <h4 className="text-2xl font-bold text-blue-600">4.5 LPA</h4>
                  <p className="text-xs text-gray-500">Average Package</p>
                </div>
              </div>
              
              <div className="flex flex-wrap justify-between gap-4 items-center pt-6 border-t border-gray-100 opacity-60 grayscale">
                <div className="text-xl font-bold font-serif text-blue-800">TCS</div>
                <div className="text-xl font-bold font-sans text-blue-500">Infosys</div>
                <div className="text-xl font-bold font-serif text-blue-600">Capgemini</div>
                <div className="text-xl font-bold font-sans text-purple-700">Wipro</div>
                <div className="text-xl font-bold font-sans text-black">accenture</div>
                <div className="text-xl font-bold font-sans text-blue-900">HCL</div>
              </div>
            </div>
          </div>
          
        </div>

      </div>
    </section>
  );
};

export default RoadmapAndPlacement;
