"use client"
import React from "react";
import { useEffect, useState } from 'react';
import Header from "../../components/other-page-components/header-component/SharedHeader";
import  MobileHeader from "../../components/other-page-components/header-component/SharedMobileHeader";
import Footer from "../../components/other-page-components/footer-component/Footer";
import MobileFooter from "../../components/other-page-components/footer-component/MobileFooter";
import DisplayPrices from "../../components/other-page-components/price-display-component/DisplayPrices";
import Background from "../../components/other-page-components/background-component/Background";
import MobileBackground from "../../components/other-page-components/background-component/MobileBackground";


const Blog = () => {
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
      {isMobile ? <MobileBackground /> : <Background />}
      <DisplayPrices />
      {isMobile? <MobileFooter /> : <Footer />}
    </div>
  );
};

export default Blog;
