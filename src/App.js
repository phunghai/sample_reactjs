import React, { Component } from "react";
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import ProTip from './ProTip';
import { hot } from "react-hot-loader";
import './sass/app.scss';

function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://material-ui.com/">
          Your Website
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
}

  
class App extends Component {
    state = {
        counter: 0
    };

    handleClick = () => {
        this.setState(prevState => {
            return { counter: prevState.counter + 1 };
        });
    };
    render() {
        return (
            <Container maxWidth="sm">
              <Box my={4}>
                <Typography variant="h4" component="h1" gutterBottom>
                  Create React App v4-beta example
                </Typography>
                <ProTip />
                <Copyright />
              </Box>
            </Container>
        );
    }
}
export default hot(module)(App);