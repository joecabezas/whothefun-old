import {combineReducers, createStore} from 'redux';

import {devToolsEnhancer} from 'redux-devtools-extension';

export default createStore(
    combineReducers({
      board: boardReducer,
    }),
    devToolsEnhancer({}),
);
