import {createStore} from 'redux';

import {devToolsEnhancer} from 'redux-devtools-extension';

export default createStore(
    () => {
      return {};
    },
    devToolsEnhancer({}),
);
