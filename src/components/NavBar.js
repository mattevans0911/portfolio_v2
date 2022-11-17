import React from "react";
import { useNavigate } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

function NavBar() {
  const navigate = useNavigate();
  return (
    <div className="nav-wrapper">
      <div style={{ marginLeft: "15px" }}>
        <Button
          className="nav-button"
          variant="text"
          onClick={() => navigate("/")}
        >
          <Typography className="button-font" variant="h5">
            About Me
          </Typography>
        </Button>

        <Button
          className="nav-button"
          variant="text"
          onClick={() => navigate("/projects")}
        >
          <Typography className="button-font" variant="h5">
            Projects
          </Typography>
        </Button>

        <Button
          className="nav-button"
          variant="text"
          onClick={() => navigate("/contact")}
        >
          <Typography className="button-font" variant="h5">
            Contact
          </Typography>
        </Button>
      </div>
    </div>
  );
}

export default NavBar;
