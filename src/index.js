import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import './index.css';
import Game from './containers/Game/Game';
import reducer from './reducers';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

const store = configureStore({
  reducer,
});

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <Game />
  </Provider>
);

serviceWorkerRegistration.register();
