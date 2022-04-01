import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { IFormInput } from '../pages/CreateEvent';
import { Link, useHistory } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import moment from 'moment';

interface Props{
  location:string;
  interest:string;
  description:string;
  groupname:string
}


const useStyles = makeStyles({
  root: {
    maxWidth: 300,
  },
  media: {
    height: 100,
  },
  customBox: {
    display: "-webkit-box",
    boxOrient: "vertical",
    lineClamp: 1,
    wordBreak: "break-all",
    overflow: "hidden"
  }
});
export default function EventCard( params:IFormInput) {
  const history = useHistory();
  const classes = useStyles();
  const conversion=()=>{
    let stamp=params.Date.replace("Z","").split("T")
    let m = moment(new Date(stamp[0]+" "+stamp[1]));
    return m.format('MMMM Do, YYYY h:mma');
  }
  return (<>
    <Card sx={{ maxWidth: 300 ,maxHeight:400}}>
    <Link to={`/eventpage/${params.ID}`}>
      <CardMedia
        component="img"
        height="220"
        image={params.Image}
        alt="green iguana"
      />
      </Link>
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {params.Name}
        </Typography>
        <Typography variant="body2" color="text.secondary"  style={{ color: "#4f95cd"}}>
          {conversion()}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {params.Interests}
        </Typography>
        <Typography variant="body2" color="text.secondary"  classes={{root: classes.customBox}}>
          {params.Description}
        </Typography>
      </CardContent>
      <CardActions >
        <Button onClick={()=>{history.push(`/eventpage/${params.ID}`)}} size="small">Learn More</Button>
      </CardActions>
    </Card>
    </>
  );
}