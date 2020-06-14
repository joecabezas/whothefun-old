import * as React from 'react';

import {hot} from 'react-hot-loader/root';
import PictureCard from './components/PictureCard';

const App: React.FC = () => {
  return (
    <PictureCard />
  );
};

export default hot(App);
