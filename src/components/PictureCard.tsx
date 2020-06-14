import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import React, {useState} from 'react';
import ReactCardFlip from 'react-card-flip';
import deepPurple from '@material-ui/core/colors/deepPurple';

import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
  card: {
    width: 150,
    height: 200,
  },
  back: {
    backgroundColor: deepPurple[800],
  },
  media: {
    height: 0,
    paddingTop: '100%',
  },
  cardContent: {
    '&:last-child': {
      paddingBottom: theme.spacing(2),
    },
  },
  typography: {
    textTransform: 'capitalize',
  },
}));

const PictureCard: React.FC = () => {
  const classes = useStyles();

  const [isFlipped, setIsFlipped] = useState(false);

  const onClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <Grid
      item
    >
      <ReactCardFlip
        isFlipped={isFlipped}
        flipDirection="vertical"
        flipSpeedBackToFront={0.15}
        flipSpeedFrontToBack={0.15}
      >
        <Card
          className={classes.card}
          onClick={onClick}
        >
          <CardMedia
            className={classes.media}
            image="https://i.imgur.com/tGLwK5K.png"
          />
          <CardContent
            className={classes.cardContent}
          >
            <Typography
              className={classes.typography}
              align="center"
            >
              zafrada
            </Typography>
          </CardContent>
        </Card>
        <Card
          className={clsx(classes.card, classes.back)}
          onClick={onClick}
        >
        </Card>
      </ReactCardFlip>
    </Grid>
  );
};

export default PictureCard;
