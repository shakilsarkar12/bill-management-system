import React from 'react';
import HeroSlider from '../../Component/HeroSlider/HeroSlider';
import OrganizationSection from '../../Component/OrganizationSection/OrganizationSection';
import BankSection from '../../Component/BankSection/BankSection';
import Services from '../../Component/Services/Services';
import HighlightsSection from '../../Component/HighlightsSection/HighlightsSection';

const Home = () => {
  return (
    <div>
      <HeroSlider />
      <OrganizationSection />
      <BankSection/>
      <Services />
      <HighlightsSection/>
    </div>
  );
};

export default Home;