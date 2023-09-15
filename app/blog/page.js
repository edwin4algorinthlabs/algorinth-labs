"use client"
import React from "react";
import { useEffect, useState } from 'react';
import Header from "../../components/header-component/SharedHeader";
import  MobileHeader from "../../components/mobile-header-component/MobileHeader";
import Footer from "../../components/footer-component/Footer";
import MobileFooter from "../../components/mobile-footer-component/MobileFooter";
import DisplayPrices from "../../components/price-display-component/DisplayPrices";
import Background from "../../components/background-component/Background";
import MobileBackground from "../../components/background-component/MobileBackground";


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
