import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setAssets } from './features/cryptoSlice';
import sampleAssets from './components/sampleAssets';

const CryptoDataFetcher = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setAssets(sampleAssets));
  }, [dispatch]);

  return null;
};

export default CryptoDataFetcher;