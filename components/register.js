import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Collage from  './Collage'

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function Register() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="./static/images/winners.jpg"
          title="Register Presentation"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            <Collage name='' msg='' text='Previous Year Winners'/>
          </Typography>

        </CardContent>
      </CardActionArea>
      <CardActions>
      <div className="three columns">
        <a target="_blank" href = "https://www.google.com" class="button-c" size="small" color="primary">Participants</a>
      </div>
      <div className="six columns">
        <a target="_blank" href = "https://drive.google.com/open?id=1u6L1Tjng7HvtTOp5bqdsmoHQVzXwHg5B" class="button-c" size="small" color="primary">Brochure</a>
      </div>
      </CardActions>
    </Card>
  );
}