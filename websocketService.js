// src/features/websocketService.js
import { setCryptoData } from './cryptoSlice';

const connectWebSocket = (dispatch) => {
  const ws = new WebSocket('wss://stream.binance.com:9443/ws/!ticker@arr');

  ws.onmessage = (event) => {
    const tickers = JSON.parse(event.data);
    const formattedData = tickers.map(ticker => ({
      symbol: ticker.s,
      price: parseFloat(ticker.c),
      change1h: parseFloat(ticker.p),
      change24h: parseFloat(ticker.P),
      // Add other needed fields
    }));
    dispatch(setCryptoData(formattedData));
  };

  ws.onerror = (error) => {
    console.error('WebSocket error:', error);
    // Reconnect logic here
  };

  return ws;
};

export default connectWebSocket;