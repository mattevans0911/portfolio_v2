import React from "react";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import ReactCardFlip from "react-card-flip";
import Form from "./forms/Form";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Button } from "@mui/material";
import Modal from "@mui/material/Modal";
import resume from "../images/resume.png";
import CloseIcon from "@mui/icons-material/Close";

function About() {
  const [open, setOpen] = React.useState(false);
  const [isFlipped, setIsFlipped] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleFlip = (e) => {
    e.preventDefault();
    isFlipped ? setIsFlipped(false) : setIsFlipped(true);
  };
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
            className="resume-button"
            onClick={handleOpen}
            variant="contained"
            // style={{
            //   backgroundColor: "#fee36e",
            //   color: "black",
            //   marginTop: "25px",
            // }}
          >
            Resume
          </Button>
          <Modal
            className="resume-modal"
            open={open}
            onClose={handleClose}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div style={{ position: "relative" }}>
              <img src={resume} alt="resume" style={{ height: "80vh" }} />
              <div>
                <Button
                  href="https://drive.google.com/file/d/1Q6XDyhT_3P2vFQMioFGoSSPZsT25kYWu/view?usp=sharing"
                  target="_blank"
                  variant="contained"
                  size="small"
                  style={{
                    height: "15px",
                    position: "absolute",
                    bottom: "1%",
                    right: "1%",
                  }}
                >
                  Download
                </Button>
                <Button
                  size="small"
                  onClick={handleClose}
                  style={{
                    position: "absolute",
                    top: "1.5%",
                    right: "0",
                    height: "25px",
                  }}
                >
                  <CloseIcon sx={{ height: "100%", marginRight: "-5px" }} />
                </Button>
              </div>
            </div>
          </Modal>
        </div>
      </div>
      <div className="right-centering-wrapper">
        <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
          <Card
            className="projects"
            sx={{
              boxShadow: 3,
              backgroundColor: "#2f2f89",
            }}
          >
            <div style={{ display: "grid", gridTemplateRows: "90% 10%" }}>
              <h1>Front</h1>
              <div>
                <Button variant="contained" onClick={handleFlip}>
                  Contact Me
                </Button>
              </div>
            </div>
          </Card>
          <Card
            className="projects"
            sx={{
              boxShadow: 3,
              backgroundColor: "#2f2f89",
            }}
            style={{ height: "75vh", width: "25vw" }}
          >
            <div style={{ display: "grid", gridTemplateRows: "90% 10%" }}>
              <Form />
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-evenly",
                }}
              >
                <div>
                  <Button variant="contained" onClick={handleFlip}>
                    Flip me
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </ReactCardFlip>
      </div>
    </div>
  );
}

export default About;
