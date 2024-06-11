import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import { Provider } from 'react-redux';
import TermOfService from './components/TermOfService/TermOfService.jsx';
import { store } from './store/store.js';
import { configureApiCaller } from './axios/client.js';
configureApiCaller(store);
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
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
  </Provider>,
);
