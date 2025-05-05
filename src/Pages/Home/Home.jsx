import React from 'react';
import HeroSlider from '../../Component/HeroSlider/HeroSlider';
import OrganizationSection from '../../Component/OrganizationSection/OrganizationSection';
import BankSection from '../../Component/BankSection/BankSection';

const Home = () => {
  return (
    <div>
      <HeroSlider />
      <OrganizationSection />
      <BankSection/>
      
    </div>
  );
};

export default Home;