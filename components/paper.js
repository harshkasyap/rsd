import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function Paper() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="./static/images/3mins.jpeg"
          title="Paper Presentation"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            My Research In 3 Mins
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            <h3>Important Dates!</h3>
            <h5><br />
            Abstract Submission: Feb 15, 2020
            <br />
            Acceptance Notofication: Feb 18, 2020 
            <br />
            Presentation Submission: Feb 25, 2020</h5>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <div className="three columns">
        <a target="_blank" href = "https://easychair.org/conferences/?conf=rsd2020" class="button-c" size="small" color="primary">Register</a>
      </div>
      <div className="six columns">
        <a target="_blank" href = "https://www.google.com" class="button-c" size="small" color="primary">Format</a>
      </div>
      </CardActions>
    </Card>
  );
}