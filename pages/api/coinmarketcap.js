import axios from 'axios';

const NodeCache = require('node-cache');
const cache = new NodeCache({ stdTTL: 600 }); // Set the cache to expire after 600 seconds (10 minutes)

export default async function CoinMarketCap(req, res) {
  try {
    // Check if the data is already in the cache
    const cachedData = cache.get('coinMarketData');
    if (cachedData) {
      return res.status(200).json(cachedData);
    }

    const response = await axios.get(
      'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest',
      {
        headers: {
          'X-CMC_PRO_API_KEY': process.env.NEXT_PUBLIC_COINMARKETCAP_KEY,
        },
      }
    );

    const coins = ["ETH", "BNB", "TRX", "ADA", "USDC", "USDT"];
    const prices = {};
    const json = response.data;
    const price = json.data
    const api_coins = price.slice(0,10)
    console.log(api_coins[0].quote)
    api_coins.forEach((item,index)=>{
       if(coins.includes(item.symbol)){
        
        const coin_price = api_coins[index].quote.USD.price
        const percent_change_24h = api_coins[index].quote.USD.percent_change_24h
        const info_price_pair = [coin_price.toFixed(4),percent_change_24h]
        const symbol = item.symbol;
        prices[symbol] = info_price_pair
       }
    })
    
    console.log(prices)
    // Cache the data for 10 minutes
    cache.set('coinMarketData', prices);

    res.status(200).json(prices);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while fetching data from CoinMarketCap.' });
  }
}


// import axios from 'axios';

// // export default async function CoinMarketCap(req, res) {
// export default async function CoinMarketCap(req, res) {
//   try {
//     const response = await axios.get(
//       'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest',
//       {
//         headers: {
//           'X-CMC_PRO_API_KEY': process.env.NEXT_PUBLIC_COINMARKETCAP_KEY,
//         },
//       }
//     );
//     const coins = ["USDT","ETH","BNB","TRX","ADA","USDC"]
//     const prices = {};
//     const json = response.data;
//     const price = json.data
//     const api_coins = price.slice(0,10)
//     api_coins.forEach((item,index)=>{
//        if(coins.includes(item.symbol)){
//         const coin_price = api_coins[index].quote.USD.price
//         const symbol = item.symbol;
//         prices[symbol] = coin_price.toFixed(4)
//        }
//     })

//     res.status(200).json(prices);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'An error occurred while fetching data from CoinMarketCap.' });
//   }
// };
