import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import logo from "../../Assets/Images/logo.jpg";
export default function Header() {
  return (
    <header>
      <AppBar sx={{ flexGrow: 1, position: "static", boxShadow: 0 }}>
        <Toolbar
          sx={{
            flexWrap: "wrap",
          }}
        >
          <Grid container sx={{ alignContent: "space-between" }}>
            <IconButton color="inherit" aria-label="menu">
              <img src={logo} alt="smiling_sea" width={30} height={30} />
            </IconButton>
            <Button color="inherit" onClick={() => {
              window.location.href = "/"
            }}>Home</Button>
            <Button color="inherit" onClick={() => {
              window.location.href = "/about"
            }}>About</Button>
            <Button color="inherit" onClick={() => {
              window.location.href = "/articles"
            }}>Articles</Button>
            <Button color="inherit" onClick={() => {
              window.location.href = "/videos"
            }}>Videos</Button>
          </Grid>
        </Toolbar>
      </AppBar>
    </header>
  );
}
