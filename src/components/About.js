import React from "react";
import Card from "@mui/material/Card";

function About() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "66% 33%",
        height: "calc(100vh - 66px)",
        fontFamily: "Roboto, sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div>
          <h1>My name is Matt Evans</h1>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Card
          sx={{ boxShadow: 3, backgroundColor: "white" }}
          style={{
            height: "80%",
            width: "75%",
            display: "flex",

            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div>Grid 2</div>
        </Card>
      </div>
    </div>
  );
}

export default About;
