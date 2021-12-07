import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.scss';
import App from './App';
import { ModalProvider } from './contexts/ModalContext/ModalContextProvider';

const rootElement = document.querySelector('#root');

ReactDOM.render(
  <BrowserRouter>
    <ModalProvider>
      <App />
    </ModalProvider>
  </BrowserRouter>,
  rootElement,
);
