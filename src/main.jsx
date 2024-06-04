import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import { Provider } from 'react-redux';
import { persistor, store } from './store/store.js';
import { PersistGate } from 'redux-persist/integration/react';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { APP_CONFIG } from './config/app.config.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <GoogleOAuthProvider clientId={APP_CONFIG.GOOGLE_CLIENT_ID}>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter>
            <ConfigProvider
              theme={{
                token: {
                  colorPrimary: '#6a307d',
                },
              }}>
              <App />
            </ConfigProvider>
          </BrowserRouter>
        </PersistGate>
      </GoogleOAuthProvider>
    </Provider>
  </StrictMode>,
);
