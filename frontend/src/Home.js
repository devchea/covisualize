import React from "react";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";


import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

export default function Home(props) {

  const handleClick = (props) => {
    props.history.push('/signin')
  }

  return (
    <Box>
      <Button
        variant="contained"
        color="primary"
        onClick={() => handleClick(props)}
      >
        Enter
      </Button>
    </Box>
  );
}