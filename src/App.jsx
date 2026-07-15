import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import WhyChooseUs from './components/WhyChooseUs';
import Courses from './components/Courses';
import RoadmapAndPlacement from './components/RoadmapAndPlacement';
import Testimonials from './components/Testimonials';
import Trainers from './components/Trainers';
import InformationSection from './components/InformationSection';
import FaqAndContact from './components/FaqAndContact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-gray-50">
      <Navbar />
      <main className="flex-grow">
        <Header />
        <WhyChooseUs />
        <Courses />
        <RoadmapAndPlacement />
        <Testimonials />
        <Trainers />
        <InformationSection />
        <FaqAndContact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
