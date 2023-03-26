import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import GlobalStyle from './components/GlobalStyles/GlobalStyle';

import { Provider } from 'react-redux';
import { store } from './Redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <GlobalStyle>
        <Provider store={store}>
            <App />
        </Provider>
    </GlobalStyle>,
);
