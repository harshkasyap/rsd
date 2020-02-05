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
import HelpRegister from  './HelpRegister';

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
        <HelpRegister />
      </CardActionArea>
      <CardActions>
      <div className="three columns">
        <a target="_blank" href = "https://docs.google.com/spreadsheets/d/1jeKhX0naI78gE-11-ysgaVhDMKThTdOZIC21ZCJXxNg/edit?usp=sharing" class="button-c" size="small" color="primary">Participants</a>
      </div>
      <div className="six columns">
        <a target="_blank" href = "https://drive.google.com/file/d/1l01t8o5jZWxKX9FR7baaYjxHxt2BBOK0/view?usp=sharing" class="button-c" size="small" color="primary">Schedule</a>
      </div>
      </CardActions>
    </Card>
  );
}