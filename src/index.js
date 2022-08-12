import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";
import App from './routes/App';

const myClient = new ApolloClient({
  uri: "https://api.hashnode.com/",
  // La uri será el único lugar al cual harás consultas, ahí estará almacenada toda nuestra data
  cache: new InMemoryCache(),
  // InMemoryCache guarda la información ya consultada para evitar el pedir la misma dos o más veces
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ApolloProvider client={myClient}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
);