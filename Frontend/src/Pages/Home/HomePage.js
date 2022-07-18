import React from "react";
import smiling_sea from "../../Assets/Images/smiling_sea.jpg";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";

export default function Home() {
  return (
    <div
      style={{
        backgroundColor: "#AAC7C4",
      }}
    >
      <Grid container spacing={3}>
        <Typography variant="h1">哈囉，請叫我 Shaynie ! </Typography>
        <img src={smiling_sea} alt="smiling_sea" width={500} height={350} />
        <Typography variant="h1">哩賀，哇洗蔡紗</Typography>
      </Grid>
    </div>
  );
}
