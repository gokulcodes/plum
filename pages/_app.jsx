import React from "react";
import PropTypes from "prop-types";
import "../styles/globals.css";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/styles";
import theme from "../customTheme";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;

MyApp.propTypes = {
  Component: PropTypes.shape(Object).isRequired,
  pageProps: PropTypes.shape(Object).isRequired,
};
