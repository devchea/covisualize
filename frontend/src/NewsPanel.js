import React from "react";
import cx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import TextInfoContent from "@mui-treasury/components/content/textInfo";
import { useBlogTextInfoContentStyles } from "@mui-treasury/styles/textInfoContent/blog";
import { useOverShadowStyles } from "@mui-treasury/styles/shadow/over";
import moment from "moment"; 
import textInfo from "@mui-treasury/components/content/textInfo";
import defaultCardImg from "./default_card_image.jpg"

const useStyles = makeStyles(({ breakpoints, spacing }) => ({
  root: {
    margin: "10px",
    borderRadius: spacing(2), // 16px
    transition: "0.3s",
    boxShadow: "0px 19px 80px rgba(0, 0, 0, 0.3)",
    position: "relative",
    maxWidth: 500,
    maxHeight: 300,
    marginLeft: "auto",
    overflow: "initial",
    background: "#ffffff",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingBottom: spacing(2),
    [breakpoints.up("md")]: {
      flexDirection: "row",
      paddingTop: spacing(2),
    },
  },
  media: {
    boxShadow: "0 14px 28px rgba(0,0,0,0.25)",
    width: "80%",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: spacing(-3),
    height: 0,
    paddingBottom: "48%",
    borderRadius: spacing(2),
    backgroundColor: "#fff",
    position: "relative",
    [breakpoints.up("md")]: {
      width: "100%",
      marginLeft: spacing(-3),
      marginTop: 0,
      transform: "translateX(-8px)",
    },
    "&:after": {
      content: '" "',
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: spacing(2), // 16
      opacity: 0.5,
    },
  },
  content: {
    padding: 24,
    lineHeight: 0

  },
  cta: {
    marginTop: 24,
    textTransform: "initial",
  },
  infoContent: {
    lineHeight: 1
  }
}));

export const NewsPanel = React.memo(function BlogCard(props) {
  const styles = useStyles();
  const {
    button: buttonStyles,
    ...contentStyles
  } = useBlogTextInfoContentStyles();
  const shadowStyles = useOverShadowStyles();
  //remove '<b> </b>' from description
  const description = props.description.replace(/<b>/g, "").replace(/<\/b>/g, "").substr(0,200).concat('...');
  //remove '<b> </b>' from title
  const title = props.title.replace(/<b>/g, "").replace(/<\/b>/g, "").substr(0, 100).concat('...');
  //get date for card
  const imageUrl = props.image
  console.log(imageUrl)
  const todaysDate = moment().format("MM/DD/YYYY");
  return (
    <Card className={cx(styles.root, shadowStyles.root)}>
      {imageUrl ? (
        <CardMedia className={styles.media} image={imageUrl} />
      ) : (
        <CardMedia
          className={styles.media}
          image={"https://www.nationalgeographic.com/content/dam/science/2020/03/13/coronavirus_og/01_coronavirus_cdc_2871.adapt.1900.1.jpg"}
        />
      )}
      <CardContent>
        <TextInfoContent
          // classes={contentStyles}
          className={textInfo}
          overline={todaysDate}
          heading={title}
          body={description}
        />
        <Button
          href={props.url}
          target="_blank"
          rel="noopener noreferrer"
          className={buttonStyles}
        >
          Read more
        </Button>
      </CardContent>
    </Card>
  );
});

export default NewsPanel;