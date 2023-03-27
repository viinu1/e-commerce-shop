import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { persistor, store } from './Redux/store';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { app } from './firebase.config';
import 'react-toastify/dist/ReactToastify.css';
import App from './App';
import GlobalStyle from './components/GlobalStyles/GlobalStyle';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <GlobalStyle>
        <Provider store={store} app={app}>
            <PersistGate loading={'loading'} persistor={persistor}>
                <App />
            </PersistGate>
        </Provider>
    </GlobalStyle>,
);
