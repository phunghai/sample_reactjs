import React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import App from './App';
import * as serviceWorker from './serviceWorker';
import theme from './theme';

const rootId = document.getElementById("root");
ReactDOM.render(  <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <App />
                  </ThemeProvider>, rootId);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
if (module.hot && process.env.NODE_ENV === "development") {
  module.hot.accept("./LoadableApp", () => {
    const NextApp = require("./LoadableApp").default;
    ReactDOM.render(
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <NextApp />
      </ThemeProvider>
      , rootId);
  });
}