"use client"
import React from "react";
import { useEffect, useState } from 'react';
import Header from "../components/header-component/Header";
import  MobileHeader from "../components/mobile-header-component/MobileHeader";
import CTA from "../components/call-to-action-component/CTA";
import Footer from "../components/footer-component/Footer";
import MobileFooter from "../components/mobile-footer-component/MobileFooter";
import DisplayPrices from "../components/price-display-component/DisplayPrices";
import MobilePriceDisplay from "../components/mobile-price-display-component/MobilePriceDisplay";
import ServiceOverview from "../components/service-overview-component/ServiceOverview";
import MobileServiceOverview from "../components/mobile-service-overview-component/MobileServiceOverview";


const HomePage = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function handleResize() {
      // setIsMobile(window.innerWidth <= 768);
      setIsMobile(window.innerWidth <= 410);
    }

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    
    <div className="">
      {isMobile ? <MobileHeader /> : <Header />}
      {isMobile ? <MobileServiceOverview /> : <ServiceOverview />}
      {!isMobile && <CTA />}
      {isMobile? <MobilePriceDisplay /> : <DisplayPrices />}
      {isMobile? <MobileFooter /> : <Footer />}
    </div>
  );
};

export default HomePage;
