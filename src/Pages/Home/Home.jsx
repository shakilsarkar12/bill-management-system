import React from "react";
import HeroSlider from "../../Component/HeroSlider/HeroSlider";
import OrganizationSection from "../../Component/OrganizationSection/OrganizationSection";
import BankSection from "../../Component/BankSection/BankSection";
import Services from "../../Component/Services/Services";
import HighlightsSection from "../../Component/HighlightsSection/HighlightsSection";
import TestimonialSection from "../../Component/TestimonialSection/TestimonialSection";
import AppDownload from "../../Component/AppDownload/AppDownload";

const Home = () => {
  return (
    <div>
      <HeroSlider />
      <OrganizationSection />
      <BankSection />
      <Services />
      <HighlightsSection />
      <TestimonialSection />
      <AppDownload />
    </div>
  );
};

export default Home;
