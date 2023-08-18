import React from "react";
import ServiceOverview from "../components/service-overview-component/ServiceOverview";
import Header from "../components/header-component/Header";
import Rider from "../components/call-to-action-component/CTA";
import Footer from "../components/footer-component/Footer";
import DisplayPrices from "../components/price-display-component/DisplayPrices";

const HomePage = () => {
  return (
    <div className="">
      <Header />
      <ServiceOverview />
      <Rider />
      <DisplayPrices />
      <Footer />
    </div>
  );
};

export default HomePage;
