const axios = require('axios');

// Function to fetch crypto prices
async function getCryptoPrices(cryptos = ['bitcoin', 'ethereum', 'dogecoin']) {
  const url = `https://api.coingecko.com/api/v3/simple/price?ids=${cryptos.join(',')}&vs_currencies=usd`;
  try {
    const response = await axios.get(url);
    const prices = response.data;
    
    console.log('Current Prices:');
    for (const [crypto, priceInfo] of Object.entries(prices)) {
      console.log(`${crypto}: $${priceInfo.usd}`);
    }
  } catch (error) {
    console.error('Error fetching prices:', error);
  }
}

// Track the prices every 10 seconds
setInterval(() => {
  console.log('Fetching latest prices...');
  getCryptoPrices();
}, 10000);
