import { Provider } from 'react-redux';
import { useState } from 'react';
import store from './store';
import CryptoTable from './components/CryptoTable';
import CryptoUpdater from './components/CryptoUpdater';
import CryptoDataFetcher from './CryptoDataFetcher';
import ErrorBoundary from './components/ErrorBoundary';
import './App.css';

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <Provider store={store}>
      <div className={`App ${theme}`}>
        <div className="header">
          <h1 className="title">Crypto Price Tracker</h1>
          <div className="theme-control">
            <span className="theme-label">Light</span>
            <label className="theme-switch">
              <input type="checkbox" checked={theme === 'dark'} onChange={toggleTheme} />
              <span className="slider"></span>
            </label>
            <span className="theme-label">Dark</span>
          </div>
        </div>
        <CryptoDataFetcher />
        <CryptoUpdater />
        <ErrorBoundary>
          <CryptoTable />
        </ErrorBoundary>
      </div>
    </Provider>
  );
}

export default App;