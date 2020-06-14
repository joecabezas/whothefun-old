import {Provider} from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import store from './redux/store';

import 'typeface-roboto';

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('app'),
);
