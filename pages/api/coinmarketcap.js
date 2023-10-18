import axios from 'axios';

export default async (req, res) => {
  try {
    const response = await axios.get(
      'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest',
      {
        headers: {
          'X-CMC_PRO_API_KEY': process.env.NEXT_PUBLIC_COINMARKETCAP_KEY,
        },
      }
    );
    const coins = ["USDT","ETH","BNB","TRX","ADA","USDC"]
    const prices = {};
    const json = response.data;
    const price = json.data
    const api_coins = price.slice(0,10)
    api_coins.forEach((item,index)=>{
       if(coins.includes(item.symbol)){
        const coin_price = api_coins[index].quote.USD.price
        const symbol = item.symbol;
        prices[symbol] = coin_price.toFixed(4)
       }
    })

    res.status(200).json(prices);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while fetching data from CoinMarketCap.' });
  }
};
