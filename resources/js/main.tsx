import 'react-toastify/dist/ReactToastify.css';
import './main.css';

import 'dayjs/locale/ru';
import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './app';
import { Provider } from 'react-redux';
import { store } from './store';
import { checkAuthAction } from './store/auth-slice/auth-api-actions';
import dayjs from 'dayjs';
import { ToastContainer } from 'react-toastify';

store.dispatch(checkAuthAction());
dayjs.locale('ru');

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <ToastContainer position="bottom-right" />
      <App />
    </Provider>
  </StrictMode>,
);
