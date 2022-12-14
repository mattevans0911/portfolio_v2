import React from "react";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import ReactCardFlip from "react-card-flip";
import Form from "./forms/Form";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Button } from "@mui/material";
import Modal from "@mui/material/Modal";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import CloseIcon from "@mui/icons-material/Close";
import { FaHtml5 } from "react-icons/fa";
import { DiCss3 } from "react-icons/di";
import { FaPython } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import resume from "../images/resume.png";
import me from "../images/me.jpg";

function About() {
  const [open, setOpen] = React.useState(false);
  const [isFlipped, setIsFlipped] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  console.log(process.env);
  const handleFlip = (e) => {
    e.preventDefault();
    isFlipped ? setIsFlipped(false) : setIsFlipped(true);
  };

  const skills = [
    { icon: <FaHtml5 />, name: "HTML" },
    { icon: <DiCss3 />, name: "CSS" },
    { icon: <FaPython />, name: "Python" },
    { icon: <IoLogoJavascript />, name: "JavaScript" },
    { icon: <FaReact />, name: "ReactJs" },
  ];
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
            <div className="card-front">
              <div
                style={{
                  height: "100%",
                  display: "grid",
                  gridTemplateRows: "200px 250px 85px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <Avatar
                    src={me}
                    sx={{ height: "200px", width: "200px", marginTop: "15px" }}
                  />
                </div>
                <div>
                  <Typography
                    variant="h5"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      marginTop: "-5px",
                      marginBottom: "15px",
                      fontFamily: "'Mulish', sans-serif",
                      color: "white",
                    }}
                  >
                    Tools I Have Used
                  </Typography>
                  <div
                    style={{
                      width: "100%",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    {skills.map((s) => {
                      return (
                        <div
                          style={{
                            width: "75px",
                            display: "grid",
                            gridTemplateColumns: "50% 50%",
                            marginRight: "50px",
                          }}
                        >
                          <div style={{ marginTop: "8px", color: "white" }}>
                            {s.icon}
                          </div>
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "center",
                              marginLeft: "40px",
                              color: "white",
                            }}
                          >
                            <Typography
                              variant="h6"
                              style={{ fontFamily: "'Mulish', sans-serif" }}
                            >
                              {s.name}
                            </Typography>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: "-15px",
                }}
              >
                <Button
                  variant="contained"
                  style={{
                    height: "40%",
                    width: "40%",
                    backgroundColor: "#fee36e",
                    color: "black",
                  }}
                  onClick={handleFlip}
                >
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
          >
            <div className="card-back">
              <Form />

              <div className="card-button-back">
                <Button
                  className="button-back"
                  variant="contained"
                  onClick={handleFlip}
                >
                  Flip me
                </Button>
              </div>
            </div>
          </Card>
        </ReactCardFlip>
      </div>
    </div>
  );
}

export default About;
