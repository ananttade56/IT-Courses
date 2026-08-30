import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../components/Header';
import WhyChooseUs from '../components/WhyChooseUs';
import Courses from '../components/Courses';
import RoadmapAndPlacement from '../components/RoadmapAndPlacement';
import ClientResources from '../components/ClientResources';
import Testimonials from '../components/Testimonials';
import Trainers from '../components/Trainers';
import InformationSection from '../components/InformationSection';
import FaqAndContact from '../components/FaqAndContact';

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <>
      <Header />
      <WhyChooseUs />
      <Courses />
      <RoadmapAndPlacement />
      <ClientResources />
      <Testimonials />
      {/* <Trainers /> */}
      <InformationSection />
      <FaqAndContact />
    </>
  );
};

export default Home;
