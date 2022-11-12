import React from "react";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Button } from "@mui/material";
import Modal from "@mui/material/Modal";
import resume from "../images/resume.png";

function About() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className="about-wrapper">
      <div className="left-centering-wrapper">
        <div className="main-body-wrapper">
          <div className="name-wrapper">
            <Typography className="hi" variant="h2">
              Hi, I'm
            </Typography>
            <Typography className="Matt" variant="h2">
              Matt.
            </Typography>
          </div>

          <Typography variant="h6" className="subtitle">
            I am a passionate Full Stack Developer with experience building Web
            Applications in Reactjs and Python.
          </Typography>

          <div className="social-wrapper">
            <Avatar className="linkedin">
              <a
                className="linkedin-img"
                href="https://www.linkedin.com/in/mevans0911"
                target="_blank"
              >
                <LinkedInIcon style={{ marginTop: "3px" }} />
              </a>
            </Avatar>
            <Avatar className="github">
              <a
                className="github-img"
                href="https://github.com/mattevans0911"
                target="_blank"
              >
                <GitHubIcon fontSize="large" />
              </a>
            </Avatar>
          </div>
          <Button
            onClick={handleOpen}
            variant="contained"
            // href="https://drive.google.com/file/d/1Q6XDyhT_3P2vFQMioFGoSSPZsT25kYWu/view?usp=sharing"
            // target={"_blank"}
            style={{
              backgroundColor: "#fee36e",
              color: "black",
              marginTop: "25px",
            }}
          >
            Resume
            <Modal
              open={open}
              onClose={handleClose}
              style={{
                display: "flex",
                justifyContent: "center",
                marginBottom: "20px",
                marginTop: "20px",
              }}
            >
              <img src={resume} alt="resume" />
            </Modal>
          </Button>
        </div>
      </div>
      <div className="right-centering-wrapper">
        <Card
          className="projects"
          sx={{
            boxShadow: 3,
            backgroundColor: "#2f2f89",
          }}
        >
          <div>Grid 2</div>
        </Card>
      </div>
    </div>
  );
}

export default About;
