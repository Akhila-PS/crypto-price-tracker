// Import the images from src/assets/
import btcLogo from '../assets/btc.png';
import ethLogo from '../assets/eth.png';
import usdtLogo from '../assets/usdt.png';
import xrpLogo from '../assets/xrp.png';
import bnbLogo from '../assets/bnb.png';

const sampleAssets = [
  {
    id: 1,
    name: 'Bitcoin',
    symbol: 'BTC',
    logo: btcLogo, // Use the imported image
    price: 93759.48,
    change1h: -0.43,
    change24h: -0.93,
    change7d: -11.11,
    marketCap: 1861618202186,
    volume24h: 43874590447,
    circulatingSupply: 19850000,
    maxSupply: 21000000,
    priceHistory: [93759, 92000, 91000, 92500, 93000, 94000, 93759],
  },
  {
    id: 2,
    name: 'Ethereum',
    symbol: 'ETH',
    logo: ethLogo,
    price: 1802.46,
    change1h: -0.60,
    change24h: -3.21,
    change7d: -13.68,
    marketCap: 217581279327,
    volume24h: 23547469307,
    circulatingSupply: 120710000,
    maxSupply: null,
    priceHistory: [1802, 1750, 1700, 1780, 1820, 1790, 1802],
  },
  {
    id: 3,
    name: 'Tether',
    symbol: 'USDT',
    logo: usdtLogo,
    price: 1.00,
    change1h: 0.00,
    change24h: -0.00,
    change7d: -0.04,
    marketCap: 145320022085,
    volume24h: 928882007,
    circulatingSupply: 145270000000,
    maxSupply: null,
    priceHistory: [1.00, 1.00, 1.00, 1.00, 1.00, 1.00, 1.00],
  },
  {
    id: 4,
    name: 'XRP',
    symbol: 'XRP',
    logo: xrpLogo,
    price: 2.22,
    change1h: -0.46,
    change24h: -0.54,
    change7d: -6.18,
    marketCap: 130073814966,
    volume24h: 5131481491,
    circulatingSupply: 58390000000,
    maxSupply: 100000000000,
    priceHistory: [2.22, 2.15, 2.10, 2.18, 2.25, 2.20, 2.22],
  },
  {
    id: 5,
    name: 'BNB',
    symbol: 'BNB',
    logo: bnbLogo,
    price: 606.65,
    change1h: 0.00,
    change24h: -1.12,
    change7d: -7.73,
    marketCap: 85471956947,
    volume24h: 1874281784,
    circulatingSupply: 140900000,
    maxSupply: 200000000,
    priceHistory: [606, 590, 580, 600, 610, 605, 606],
  },
];

export default sampleAssets;