import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import { Provider } from 'react-redux';
import { persistor, store } from './store/store.js';
import { PersistGate } from 'redux-persist/integration/react';
import TermOfService from './components/TermOfService/TermOfService.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: '#6a307d',
            },
          }}>
          <App />
          <TermOfService />
        </ConfigProvider>
      </BrowserRouter>
    </PersistGate>
  </Provider>,
);
