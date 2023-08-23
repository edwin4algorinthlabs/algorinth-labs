"use client"
import React from "react";
import { useEffect, useState } from 'react';
import Header from "../components/header-component/Header";
import ServiceOverview from "../components/service-overview-component/ServiceOverview";
// import CTAMobile from "../components/mobile-call-to-action-component/CTAMobile";
import CTA from "../components/call-to-action-component/CTA";
import Footer from "../components/footer-component/Footer";
import MobileFooter from "../components/mobile-footer-component/MobileFooter";
import DisplayPrices from "../components/price-display-component/DisplayPrices";
import MobilePriceDisplay from "../components/mobile-price-display-component/MobilePriceDisplay";
import MobileServiceOverview from "../components/mobile-service-overview-component/MobileServiceOverview";


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
    // <div className="">
    // <Header />
    // {!isMobile && <ServiceOverview />}
    // {!isMobile && <CTA />}
    // {!isMobile && <DisplayPrices />}
    // {!isMobile && <Footer />}
    
    // </div>
    
    <div className="">
      <Header />
      {isMobile ? <MobileServiceOverview /> : <ServiceOverview />}
      {!isMobile && <CTA />}
      {isMobile? <MobilePriceDisplay /> : <DisplayPrices />}
      {isMobile? <MobileFooter /> : <Footer />}
    </div>
  );
};

export default HomePage;
