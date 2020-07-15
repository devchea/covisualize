import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { render } from "react-dom";
import Dashboard from "./Dashboard";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import ButtonBase from '@material-ui/core/ButtonBase';

import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';


export default function Home(props) {
  
  const history = props

  const handleClick = (props) => {
    props.history.push('/dashboard')
  }

  const useStyles = makeStyles(()=> ({
    buttonStyles: {
      flex: 1
    }
  }))

  const classes = useStyles()

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Button
          variant="contained"
          color="primary"
          onClick = {() => handleClick(history)}
          >
          Enter
        </Button>
        <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '70vh' }} />
      </Container>
    </React.Fragment>
  );
}

// export default class App extends React.Component {

//   useStyles = makeStyles((theme) => ({
//     root: {
//       '& > *': {
//         margin: theme.spacing(1),
//       },
//     },
//   }));

//   handleClick = () => {
//     this.props.history.push('/dashboard')
//   }

//   render() {
//     return (
//       <div>
//           <Button
//             variant="contained"
//             color="primary"
//             onClick={this.handleClick}
//             >
//             Enter
//           </Button>
//       </div>
//     );
//   }
// }

