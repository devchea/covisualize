import React from "react";
import Button from "@material-ui/core/Button";

export default function Home(props) {

  const handleClick = (props) => {
    props.history.push('/login')
  }

  return (
        <Button
          variant="contained"
          color="primary"
          onClick = {() => handleClick(props)}
          >
          Enter
        </Button>
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

