import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import { useStyles } from './small_card_useStyles';

export const Small_Card = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  
  const Key = props.Key;
  const iD = props.iD;
  const Title = props.Title;
  const SubTitle = props.SubTitle;
  const Image = props.Image;
  const ImageTitle = props.ImageTitle;
  
  

  return (
    <Card className={classes.root}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography Title={Title} component="h5" variant="h5">
           {Title}
          </Typography>
          <Typography SubTitle={SubTitle} variant="subtitle1" color="textSecondary">
           {SubTitle}
          </Typography>
        </CardContent>
        {/* <div className={classes.controls}>
          <IconButton aria-label="previous">
            {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
          </IconButton>
          <IconButton aria-label="play/pause">
            <PlayArrowIcon className={classes.playIcon} />
          </IconButton>
          <IconButton aria-label="next">
            {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
          </IconButton>
        </div> */}
      </div>
      <CardMedia
        className={classes.cover}
        image={Image}
        title={ImageTitle}
        Image={Image}
        ImageTitle={ImageTitle}
      />
    </Card>
  );
}
