"use client"
import React from "react";
import { useEffect, useState } from 'react';
import Header from "../components/header-component/Header";
import ServiceOverview from "../components/service-overview-component/ServiceOverview";
import CTAMobile from "../components/call-to-action-component/CTAMobile";
import CTA from "../components/call-to-action-component/CTA";
import Footer from "../components/footer-component/Footer";
import DisplayPrices from "../components/price-display-component/DisplayPrices";

const HomePage = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 768);
    }

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    
    <div className="">
      {/* {isMobile ? <CTAMobile /> : <CTA />} */}
      <Header />
      <ServiceOverview />
      <CTA />
      <DisplayPrices />
      <Footer />
    </div>
  );
};

export default HomePage;
