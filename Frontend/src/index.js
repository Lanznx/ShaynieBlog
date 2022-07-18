import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./Pages/Home/HomePage";
import About from "./Pages/About/AboutPage";
import ArticleList from "./Pages/ArticleList/ArticleListPage";
import Article from "./Pages/Article/ArticlePage";
import Header from "./Pages/components/Header";
import Footer from "./Pages/components/Footer";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Box } from "@mui/material";

const root = ReactDOM.createRoot(document.getElementById("root"));

const theme = createTheme({
  palette: {
    primary: {
      main: "#AAC7C4",
      contrastText: "#000",
    },
    secondary: {
      main: "#fff",
      contrastText: "#000",
    },
  },
  typography: {
    allVariants: {
      fontFamily: [
        '"Noto Sans TC"',
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(","),
    },
  },
});

root.render(
  <React.Fragment>
    <ThemeProvider theme={theme}>
      <Header />
      <Box mt={10} bgcolor="inherit">
        <BrowserRouter>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/articles" element={<ArticleList />} />
            <Route path="/articles/:id" element={<Article />} />
          </Routes>
        </BrowserRouter>
      </Box>

      <Footer />
    </ThemeProvider>
  </React.Fragment>
);
