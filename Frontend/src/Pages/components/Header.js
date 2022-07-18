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
          <Grid container  sx={{alignContent: "space-between"}}>
            <IconButton color="inherit" aria-label="menu">
              <img src={logo} alt="smiling_sea" width={30} height={30} />
            </IconButton>
            <Button color="inherit">Home</Button>
            <Button color="inherit">About</Button>
            <Button color="inherit">Articles</Button>
            <Button color="inherit">Video</Button>
          </Grid>
        </Toolbar>
      </AppBar>
    </header>
  );
}
