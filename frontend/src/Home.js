import React from "react";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
// import Background from "./background.webm";
import Background from "./background.gif";
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import theme from "./theme";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 3,
  },
}));


export default function Home(props) {

  const styles = useStyles();

  const handleClick = (props) => {
    props.history.push('/signin')
  }

  const sectionStyle = {
  width: "100%",
  height: "100%",
  backgroundImage: "url(" + { Background } + ")"
  };



  return (
    <Box
      style={{
        backgroundImage: `url(${Background})`,
        width: "1665px",
        height: "955px",
        justifyContent: "center",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div>
        {/* <img src={Background} width="1665px" height="900px"></img> */}
        <Button
          variant="contained"
          color="secondary"
          onClick={() => handleClick(props)}
        >
          ENTER
        </Button>
        {/* <video className={styles.videoAtt} loop autoPlay

      >
        <source src={background} type="video/mp4" />
        <source src={background} type="video/ogg" />
        Your browser does not support the video tag.
      </video> */}
      </div>
    </Box>
  );
}