import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updateAssets } from '../features/cryptoSlice';

const CryptoUpdater = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    let interval;
    interval = setInterval(() => {
      const updates = Array(5)
        .fill(null)
        .map((_, idx) => ({
          id: idx + 1,
          price: Math.random() * 100000,
          change1h: (Math.random() - 0.5) * 2,
          change24h: (Math.random() - 0.5) * 5,
          change7d: (Math.random() - 0.5) * 10,
          volume24h: Math.random() * 10000000000,
          priceHistory: Array(7)
            .fill(null)
            .map(() => (Math.random() * 100000)),
        }));
      dispatch(updateAssets(updates));
    }, 1500);

    const mockWebSocket = {
      interval,
      close: function () {
        clearInterval(interval);
      },
    };

    return () => mockWebSocket.close();
  }, [dispatch]);

  return null;
};

export default CryptoUpdater;