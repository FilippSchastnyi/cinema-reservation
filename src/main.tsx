import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import client from '@src/apolloServer';
import { ApolloProvider } from '@apollo/client';
import { setupStore } from '@src/store/store';
import { Provider } from 'react-redux';
import App from './App';

const store = setupStore();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
  .render(
    <Provider store={store}>
      <ApolloProvider client={client}>
        <React.StrictMode>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </React.StrictMode>
      </ApolloProvider>
    </Provider>,
  );
