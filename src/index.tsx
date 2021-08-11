import React from 'react';
import ReactDOM from 'react-dom';
import { createServer } from 'miragejs';
import { App } from './App';

import { transactionsMock } from './__mocks__/requests/transactions';

createServer({
  routes() {
    this.namespace = 'api';
    this.get('/transactions', () => transactionsMock)
  }
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);