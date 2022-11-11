import React from "react";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

function About() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "66% 33%",
        height: "calc(100vh - 66px)",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "50%",
            textAlign: "center",
          }}
        >
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Typography
              variant="h2"
              style={{ color: "white", fontFamily: "'Mulish', sans-serif" }}
            >
              Hi! I'm
            </Typography>
            <Typography
              variant="h2"
              style={{
                color: "#fee36e",
                fontFamily: "'Mulish', sans-serif",
                marginLeft: "15px",
              }}
            >
              Matt.
            </Typography>
          </div>
          <div>
            <Typography variant="subtitle1" style={{ color: "white" }}>
              I am a passionate Full Stack Developer with experience building
              Web Applications in Reactjs and Python.
            </Typography>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "25px",
            }}
          >
            <Avatar
              style={{
                color: "white",
                backgroundColor: "#0a66c2",
                marginRight: "10px",
                height: "30px",
                width: "30px",
              }}
            >
              <a
                href="https://www.linkedin.com/in/mevans0911"
                target="_blank"
                style={{ color: "inherit" }}
              >
                <LinkedInIcon style={{ marginTop: "3px" }} />
              </a>
            </Avatar>
            <Avatar
              style={{
                color: "black",
                backgroundColor: "white",
                marginLeft: "10px",
                height: "30px",
                width: "30px",
                textDecoration: "none",
              }}
            >
              <a
                href="https://github.com/mattevans0911"
                target="_blank"
                style={{ color: "inherit" }}
              >
                <GitHubIcon fontSize="large" />
              </a>
            </Avatar>
          </div>
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
