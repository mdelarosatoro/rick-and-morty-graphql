import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
    ApolloClient,
    ApolloProvider,
    HttpLink,
    InMemoryCache,
} from '@apollo/client';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import App from './App';

// Instantiate required constructor fields
const cache = new InMemoryCache();
const link = new HttpLink({
    uri: 'https://rickandmortyapi.com/graphql',
});

export const client = new ApolloClient({
    cache,
    link,
});

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <ApolloProvider client={client}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </ApolloProvider>
    </React.StrictMode>
);

reportWebVitals();
