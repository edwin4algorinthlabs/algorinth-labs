"use client"
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./DisplayPrices.css";
import Image from 'next/image';

const DisplayPrices = () => {
  const [data, setData] = useState({});
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = () => {
      axios
        .get('/api/coinmarketcap')
        .then((response) => {
          setData(response.data);
        })
        .catch((err) => {
          setError(true);
          console.log(err);
        });
    };

    fetchData();
  }, []);

  const renderCryptocurrencyData = () => {
    return Object.keys(data).map((symbol) => {
      const name = symbol;
      const price = data[symbol][0];
      const change = data[symbol][1]

      return (
        <div key={symbol} className="div-coin-marquee-2">
          <div className="link-2">
            <Image className="img" alt="Element png" src={`/images/${symbol}.png`} width={20} height={20} />
            <div className="div-coin-marquee-3">
              <div className="div-coin-marquee-4">
                <div className="div-wrapper">
                  <a
                    className="text-wrapper-2"
                    href={`https://coinmarketcap.com/currencies/${symbol.toLowerCase()}`}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {name}
                  </a>
                </div>
                <div className="div-wrapper">
                  <a
                    className="text-wrapper-2"
                    href={`https://coinmarketcap.com/currencies/${symbol.toLowerCase()}`}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {`$${price}`}
                  </a>
                </div>
              </div>
              <div className="div-coin-marquee-4">
                <div className="div-coin-marquee-5">
                  <a
                    className="text-wrapper-3"
                    href={`https://coinmarketcap.com/currencies/${symbol.toLowerCase()}`}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {name}
                  </a>
                </div>
                <div className="div-coin-marquee-11">
                  <div className="span-coin-marquee" />
                  <a
                    className="text-wrapper-4"
                    href={`https://coinmarketcap.com/currencies/${symbol.toLowerCase()}`}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {change}
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="pseudo" />
        </div>
      );
    });
  };

  return (
    <div className="div-html-embed">
      <div className="div-coin-marquee">
        <div className="link-wrapper">
          <div className="link">
            <a className="text-wrapper" href="https://coinmarketcap.com/" rel="noopener noreferrer" target="_blank">
              Powered by
            </a>
            <Image className="SVG" alt="Svg" src="/images/SVG.svg" width={94} height={18} />
          </div>
        </div>
        <div className="div-coin-marquee-wrapper">
          <div className="div">
            {renderCryptocurrencyData()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisplayPrices;

