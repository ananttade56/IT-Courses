import React from 'react';
import { motion } from 'framer-motion';

const companies = [
  { name: 'Cognizant', color: 'text-[#0033a0] font-bold text-2xl font-sans' },
  { name: 'DELL', color: 'text-[#007db8] font-black text-3xl tracking-tighter' },
  { name: 'amdocs', color: 'text-[#e5007d] font-bold text-2xl font-sans' },
  { name: 'coditas', color: 'text-[#0072ce] font-semibold text-2xl font-sans' },
  { name: 'Tudip', color: 'text-[#d9232e] font-black text-3xl font-serif italic' },
  { name: 'redbytes', color: 'text-[#e31b23] font-bold text-2xl font-sans' },
  { name: 'Tech Mahindra', color: 'text-[#e31837] font-extrabold text-2xl font-sans' },
  { name: 'HSBC', color: 'text-[#db0011] font-serif font-bold text-2xl' },
  { name: 'ZENSOFT', color: 'text-[#0075c9] font-bold text-2xl tracking-wide' },
  { name: 'Capgemini', color: 'text-[#0070ad] font-bold text-2xl font-serif' },
  { name: 'firstcry.com', color: 'text-[#e83e8c] font-bold text-2xl font-sans' },
  { name: 'DASSAULT SYSTEMES', color: 'text-[#1d3557] font-semibold text-xl tracking-wider' },
  { name: 'SysTools', color: 'text-[#0056b3] font-bold text-2xl font-sans' },
  { name: 'mplussoft', color: 'text-[#ff6b00] font-bold text-2xl font-sans' },
  { name: 'emsphere', color: 'text-[#2a9d8f] font-semibold text-2xl font-sans' },
  { name: 'TCS', color: 'text-[#003366] font-extrabold text-2xl font-serif' },
  { name: 'Infosys', color: 'text-[#007cc3] font-bold text-2xl font-sans' },
  { name: 'Wipro', color: 'text-[#7e22ce] font-bold text-2xl font-sans' },
  { name: 'Accenture', color: 'text-[#000000] font-bold text-2xl font-sans' },
  { name: 'HCL', color: 'text-[#00539c] font-black text-2xl font-sans' },
];

const ClientResources = () => {
  return (
    <section className="py-14 bg-white border-b border-gray-100 overflow-hidden select-none">
      <div className="w-full mx-auto px-4 mb-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
          Client Resources
        </h2>
        <p className="text-sm text-gray-500 mt-2">
          Top multinational companies & technology leaders hiring our graduates
        </p>
      </div>

      {/* Marquee Track Container */}
      <div className="relative w-full overflow-hidden flex items-center py-4">
        {/* Gradient Fades on Left & Right Edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

        {/* Infinite Scrolling Track */}
        <motion.div
          className="flex space-x-12 sm:space-x-16 items-center shrink-0"
          animate={{
            x: ['0%', '-50%'],
          }}
          transition={{
            ease: 'linear',
            duration: 55,
            repeat: Infinity,
          }}
        >
          {/* Double the array to ensure smooth seamless looping */}
          {[...companies, ...companies].map((company, index) => (
            <div
              key={index}
              className="px-6 py-3 bg-gray-50/80 hover:bg-white rounded-xl border border-gray-100/80 hover:border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center shrink-0 cursor-pointer"
            >
              <span className={company.color}>{company.name}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ClientResources;
