"use client"
import React from "react";
import { useEffect, useState } from 'react';
import Header from "../components/landing-page-components/header-component/Header";
import  MobileHeader from "../components/landing-page-components/header-component/MobileHeader";
import CTA from "../components/landing-page-components/call-to-action-component/CTA";
import Footer from "../components/landing-page-components/footer-component/Footer";
import MobileFooter from "../components/landing-page-components/footer-component/MobileFooter";
import DisplayPrices from "../components/landing-page-components/price-display-component/DisplayPrices";
import ServiceOverview from "../components/landing-page-components/service-overview-component/ServiceOverview";
import MobileServiceOverview from "../components/landing-page-components/service-overview-component/MobileServiceOverview";

const HomePage = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 640);
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
      <DisplayPrices />
      {isMobile? <MobileFooter /> : <Footer />}
    </div>
  );
};

export default HomePage;
