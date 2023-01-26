import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import client from '@src/apolloServer';
import { ApolloProvider } from '@apollo/client';
import App from './App';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
  .render(
    <ApolloProvider client={client}>
      <React.StrictMode>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </React.StrictMode>
    </ApolloProvider>,
  );
