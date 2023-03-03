import React from 'react';
import ReactDOM from 'react-dom/client';
import GlobalStyles from './styles/GlobalStyles';
import './styles/font.css'
import App from './App';
import PlayerContextProvider from './PlayerContext';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <PlayerContextProvider>
            <GlobalStyles />
            <App />
        </PlayerContextProvider>
    </React.StrictMode>
);