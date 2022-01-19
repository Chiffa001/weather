import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Normalize } from 'styled-normalize';
import App from './components/App';
import Global from './components/ui/Global';
import store from './store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Normalize />
      <Global />
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
