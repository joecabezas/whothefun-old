import * as React from 'react';

import {hot} from 'react-hot-loader/root';

import Board from './Board';

const App: React.FC = () => {
  return (
    <Board />
  );
};

export default hot(App);
