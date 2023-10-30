import React from "react";
import "./MobilePriceDisplay.css";
import Image from 'next/image';

const MobilePriceDisplay = async () => {
  try {
    const response = await axios.get('/api/coinmarketcap');
    console.log(response.data);
  } catch (error) {
    setError(true);
    console.log(error);
  }

// const MobilePriceDisplay = () => {
//   try{
//     const response =await axios.get('/api/coinmarketcap')
//     console.log(response.data)
//     //response.data is an object like so : {ETH:'1867.784'}
//   }catch(error){
//     setError(true)
//     console.log(error)
//   }
// }
  return (
    <div className="m-div-display">
    <div className="m-div-coin-marquee">
      <div className="m-link-wrapper">
        <div className="m-link">
          <a className="m-text-wrapper" href="https://coinmarketcap.com/" rel="noopener noreferrer" target="_blank">
            Powered by
          </a>
          <Image className="m-SVG" alt="Svg" src="/images/SVG.svg" width={94}
 height={18}/>
        </div>
      </div>
      <div className="m-div-coin-marquee-wrapper">
        <div className="m-div">
          <div className="m-div-2">
            <div className="m-link-2">
              <Image className="m-element-png" alt="Element png" src="/images/825-png.png" width={11}
 height={20}/>
              <div className="m-div-3">
                <div className="m-div-4">
                  <div className="m-div-wrapper">
                    <a
                      className="m-text-wrapper-2"
                      href="https://coinmarketcap.com/currencies/tether"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Tether USDt
                    </a>
                  </div>
                  <div className="m-div-wrapper">
                    <a
                      className="m-text-wrapper-2"
                      href="https://coinmarketcap.com/currencies/tether"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      $0.998902
                    </a>
                  </div>
                </div>
                <div className="m-div-4">
                  <div className="m-div-wrapper-2">
                    <a
                      className="m-text-wrapper-3"
                      href="https://coinmarketcap.com/currencies/tether"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      USDT
                    </a>
                  </div>
                  <div className="m-div-5">
                    <div className="m-span-coin-marquee" />
                    <a
                      className="m-text-wrapper-4"
                      href="https://coinmarketcap.com/currencies/tether"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      -0.03%
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="m-pseudo" />
          </div>
          <div className="m-div-2">
            <div className="m-link-2">
              <Image className="m-img" alt="Element png" src="/images/1027-png.png" width={20}
 height={20}/>
              <div className="m-div-6">
                <div className="m-div-4">
                  <div className="m-div-wrapper">
                    <a
                      className="m-text-wrapper-2"
                      href="https://coinmarketcap.com/currencies/ethereum"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Ethereum
                    </a>
                  </div>
                  <div className="m-div-wrapper">
                    <a
                      className="m-text-wrapper-2"
                      href="https://coinmarketcap.com/currencies/ethereum"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      $1,847.51
                    </a>
                  </div>
                </div>
                <div className="m-div-7">
                  <div className="m-div-wrapper-2">
                    <div className="m-text-wrapper-3">ETH</div>
                  </div>
                  <div className="m-div-8">
                    <div className="m-span-coin-marquee" />
                    <div className="m-text-wrapper-4">-0.07%</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="m-pseudo" />
          </div>
          <div className="m-div-2">
            <div className="m-link-2">
              <Image className="m-element-png-2" alt="Element png" src="/images/1839-png.png" width={20}
 height={11}/>
              <div className="m-div-9">
                <div className="m-div-4">
                  <div className="m-div-wrapper">
                    <a
                      className="m-text-wrapper-2"
                      href="https://coinmarketcap.com/currencies/bnb"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      BNB
                    </a>
                  </div>
                  <div className="m-div-wrapper">
                    <a
                      className="m-text-wrapper-2"
                      href="https://coinmarketcap.com/currencies/bnb"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      $240.55
                    </a>
                  </div>
                </div>
                <div className="m-div-4">
                  <div className="m-div-wrapper-2">
                    <a
                      className="m-text-wrapper-3"
                      href="https://coinmarketcap.com/currencies/bnb"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      BNB
                    </a>
                  </div>
                  <div className="m-div-10">
                    <div className="m-span-coin-marquee" />
                    <a
                      className="m-text-wrapper-4"
                      href="https://coinmarketcap.com/currencies/bnb"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      -1.08%
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="m-pseudo" />
          </div>
          <div className="m-div-2">
            <div className="m-link-2">
              <Image className="m-element-png-3" alt="Element png" src="/images/1958-png.png" width={20}
 height={20}/>
              <div className="m-div-11">
                <div className="m-div-4">
                  <div className="m-div-wrapper">
                    <a
                      className="m-text-wrapper-2"
                      href="https://coinmarketcap.com/currencies/tron"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      TRON
                    </a>
                  </div>
                  <div className="m-div-wrapper">
                    <a
                      className="m-text-wrapper-2"
                      href="https://coinmarketcap.com/currencies/tron"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      $0.077192
                    </a>
                  </div>
                </div>
                <div className="m-div-4">
                  <div className="m-div-wrapper-2">
                    <a
                      className="m-text-wrapper-3"
                      href="https://coinmarketcap.com/currencies/tron"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      TRX
                    </a>
                  </div>
                  <div className="m-div-wrapper-3">
                    <a
                      className="m-text-wrapper-5"
                      href="https://coinmarketcap.com/currencies/tron"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      1.02%
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="m-pseudo" />
          </div>
          <div className="m-div-2">
            <div className="m-link-2">
              <Image className="m-element-png-4" alt="Element png" src="/images/2010-png.png" width={20}
 height={20}/>
              <div className="m-div-6">
                <div className="m-div-4">
                  <div className="m-div-wrapper">
                    <a
                      className="m-text-wrapper-2"
                      href="https://coinmarketcap.com/currencies/cardano"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Cardano
                    </a>
                  </div>
                  <div className="m-div-wrapper">
                    <a
                      className="m-text-wrapper-2"
                      href="https://coinmarketcap.com/currencies/cardano"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      $0.296526
                    </a>
                  </div>
                </div>
                <div className="m-div-4">
                  <div className="m-div-wrapper-2">
                    <a
                      className="m-text-wrapper-3"
                      href="https://coinmarketcap.com/currencies/cardano"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      ADA
                    </a>
                  </div>
                  <div className="m-div-12">
                    <div className="m-span-coin-marquee" />
                    <a
                      className="m-text-wrapper-4"
                      href="https://coinmarketcap.com/currencies/cardano"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      -0.92%
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="m-pseudo" />
          </div>
          <div className="m-div-2">
            <div className="m-link-2">
              <Image className="m-element-png-5" alt="Element png" src="/images/3408-png.png" width={20}
 height={20}/>
              <div className="m-div-13">
                <div className="m-div-4">
                  <div className="m-div-wrapper">
                    <a
                      className="m-text-wrapper-2"
                      href="https://coinmarketcap.com/currencies/usd-coin"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      USD Coin
                    </a>
                  </div>
                  <div className="m-div-wrapper">
                    <a
                      className="m-text-wrapper-2"
                      href="https://coinmarketcap.com/currencies/usd-coin"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      $1.00
                    </a>
                  </div>
                </div>
                <div className="m-div-4">
                  <div className="m-div-wrapper-2">
                    <a
                      className="m-text-wrapper-3"
                      href="https://coinmarketcap.com/currencies/usd-coin"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      USDC
                    </a>
                  </div>
                  <div className="m-div-14">
                    <div className="m-span-coin-marquee" />
                    <a
                      className="m-text-wrapper-4"
                      href="https://coinmarketcap.com/currencies/usd-coin"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      0%
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="m-pseudo" />
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};
export default MobilePriceDisplay;