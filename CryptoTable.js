import { useSelector, useDispatch } from 'react-redux';
import { selectAssets, setSort } from '../features/cryptoSlice';
import Chart from './Chart';

const CryptoTable = () => {
  const dispatch = useDispatch();
  const assets = useSelector(selectAssets);

  const formatNumber = (num, decimals = 2) => {
    if (!num) return 'N/A';
    return num.toLocaleString('en-US', { maximumFractionDigits: decimals });
  };

  const formatPercent = (num) => {
    if (num === undefined || num === null) return 'N/A';
    return (
      <span className={num >= 0 ? 'text-green-500' : 'text-red-500'}>
        {num.toFixed(2)}%
      </span>
    );
  };

  const formatSupply = (num, symbol) => {
    if (!num) return 'N/A';
    return `${(num / 1000000).toFixed(2)}M ${symbol}`;
  };

  const handleSort = (key) => {
    dispatch(setSort({
      key,
      order: assets[0][key] > assets[assets.length - 1][key] ? 'asc' : 'desc',
    }));
  };

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm text-left">
        <thead className="bg-gray-100">
          <tr>
            {['#', 'Name', 'Price', '1h %', '24h %', '7d %', 'Market Cap', 'Volume(24h)', 'Circulating Supply', 'Last 7 Days'].map((header) => {
              const sortable = ['price', 'change1h', 'change24h', 'change7d', 'marketCap', 'volume24h'].includes(header.toLowerCase().replace(' ', ''));
              return (
                <th
                  key={header} // Fixed: Use header string as key
                  className={`py-2 px-4 ${sortable ? 'cursor-pointer' : ''}`}
                  onClick={() => sortable && handleSort(header.toLowerCase().replace(' ', ''))}
                >
                  {header}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {assets.map(asset => (
            <tr key={asset.id} className="border-b">
              <td className="py-2 px-4">{asset.id}</td>
              <td className="py-2 px-4 flex items-center">
  <img
    src={asset.logo}
    alt={asset.name}
    className="w-[4px] h-[4px] mr-0.5 object-contain"
  />
  <span className="font-bold">{asset.name}</span>
  <span> </span>
  <span className="text-gray-500 font-normal">{asset.symbol}</span>
</td>

              <td className="py-2 px-4">${formatNumber(asset.price)}</td>
              <td className="py-2 px-4">{formatPercent(asset.change1h)}</td>
              <td className="py-2 px-4">{formatPercent(asset.change24h)}</td>
              <td className="py-2 px-4">{formatPercent(asset.change7d)}</td>
              <td className="py-2 px-4">${formatNumber(asset.marketCap, 0)}</td>
              <td className="py-2 px-4">${formatNumber(asset.volume24h, 0)}</td>
              <td className="py-2 px-4">{formatSupply(asset.circulatingSupply, asset.symbol)}</td>
              <td className="py-2 px-4">
                <Chart data={asset.priceHistory} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CryptoTable;