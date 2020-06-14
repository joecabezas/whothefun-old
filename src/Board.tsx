import {Grid} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import * as React from 'react';

import {hot} from 'react-hot-loader/root';

import PictureCard from './components/PictureCard';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(5),
  },
}));

const Board: React.FC = () => {
  const classes = useStyles();

  return (
    <>
      <Grid
        container
        spacing={1}
        wrap="wrap"
        className={classes.root}
      >
        <PictureCard />
        <PictureCard />
        <PictureCard />
        <PictureCard />
        <PictureCard />
        <PictureCard />
        <PictureCard />
        <PictureCard />
        <PictureCard />
        <PictureCard />
        <PictureCard />
        <PictureCard />
        <PictureCard />
        <PictureCard />
        <PictureCard />
        <PictureCard />
        <PictureCard />
        <PictureCard />
      </Grid>
    </>
  );
};

export default hot(Board);
