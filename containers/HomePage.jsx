import React from "react";
import Image from 'next/image';
import MidPage from "./MidPage";
import Header from "./Header";
import Rider from "./Rider";
import Footer from "./Footer";
import DisplayPrices from "./DisplayPrices";

const HomePage = () => {
  return (
    <div className="">
        <Header />
        <MidPage />
        <Rider /> 
        <DisplayPrices />
        <Footer />          
    </div>    
  );
};

export default HomePage;
