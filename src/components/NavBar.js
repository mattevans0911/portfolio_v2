import React from "react";
import { useNavigate } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

function NavBar() {
  const navigate = useNavigate();
  return (
    <div className="nav-wrapper">
      <Avatar
        className="my-img"
        alt="M.E."
        src="https://media-exp1.licdn.com/dms/image/D4E03AQFktndjQAco0w/profile-displayphoto-shrink_800_800/0/1666292116902?e=1673481600&v=beta&t=KzxVlpOhtvmBRg8FaR5VihiUQkcveGKeCC8f3ggw-V4"
      />

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
  );
}

export default NavBar;
