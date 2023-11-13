"use client"
import MobileIntro from "@/components/home/mobileIntro";
import Intro from "@/components/home/intro";
import { useEffect, useState } from 'react';
import Services from "@/components/home/services";
import RequestDemo from "@/components/shared/request"

const HomePage = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 600);
    }

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <>
      {isMobile ? <MobileIntro /> : <Intro />}
      <Services />
      <RequestDemo />
    </>
  );
};

export default HomePage;
