import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { ToastContainer } from 'react-toastify';
import theme from './styles/theme';
import GlobalStyles from './styles/global';
import { Routes } from './routes';
import { MyContext } from './myContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <ToastContainer
        pauseOnFocusLoss={false}
      />
      <MyContext.Provider value={{}}>
        <Routes />
      </MyContext.Provider>
    </ThemeProvider>
  </React.StrictMode>
)