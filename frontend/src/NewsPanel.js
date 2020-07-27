import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import ReactImageFallback from "react-image-fallback";
import {Link} from 'react-router-dom'


const useStyles = makeStyles({
  cardContainer: {
    maxWidth: 345,
    padding: "25px",
  },
  media: {
    height: 140,
  }
});

export default function ImgMediaCard(props) {
  const classes = useStyles();
  // console.log('pt',props.title)
  //remove '<b> </b>' from description
  const description = props.description.replace(/<b>/g, "").replace(/<\/b>/g, "");
  //remove '<b> </b>' from title
  const title = props.title.replace(/<b>/g, "").replace(/<\/b>/g, "");
  // console.log('title',title)
  // console.log("url:", props.url)

  const openInNewTab = (url) => {
    const win = window.open(url, '_blank');
    win.focus();
  }
  return (
    <Card className={classes.cardContainer}>
      <CardActionArea onClick={() => openInNewTab(`${props.url}`)}>
        <CardMedia className={classes.media}
          component="img"
          alt="Contemplative Reptile"
          height="140"
          src={props.image.url}
          title="Contemplative Reptile"
        ></CardMedia>

        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
