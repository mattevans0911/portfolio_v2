import React from "react";
import { useNavigate } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

function NavBar() {
  const navigate = useNavigate();
  return (
    <div
      style={{
        width: "100%",
        height: "65px",
        display: "flex",
        alignItems: "center",
        color: "white",
        borderBottom: "1px solid white",
      }}
    >
      <Avatar
        alt="M.E."
        src="https://media-exp1.licdn.com/dms/image/D4E03AQFktndjQAco0w/profile-displayphoto-shrink_800_800/0/1666292116902?e=1673481600&v=beta&t=KzxVlpOhtvmBRg8FaR5VihiUQkcveGKeCC8f3ggw-V4"
        style={{
          marginLeft: "15px",
          marginRight: "15px",
          height: "55px",
          width: "55px",
        }}
      />

      <Button
        variant="text"
        style={{
          color: "white",
          border: "1px solid white",
          borderRadius: "5px",
          marginRight: "15px",
        }}
        onClick={() => navigate("/")}
      >
        <Typography variant="h5" style={{ fontFamily: "'Oxygen', sans-serif" }}>
          About Me
        </Typography>
      </Button>

      <Button
        variant="text"
        style={{
          color: "white",
          border: "1px solid white",
          borderRadius: "5px",
          marginRight: "15px",
        }}
        onClick={() => navigate("/projects")}
      >
        <Typography variant="h5" style={{ fontFamily: "'Oxygen', sans-serif" }}>
          Projects
        </Typography>
      </Button>

      <Button
        variant="text"
        style={{
          color: "white",
          border: "1px solid white",
          borderRadius: "5px",
          marginRight: "15px",
        }}
        onClick={() => navigate("/contact")}
      >
        <Typography variant="h5" style={{ fontFamily: "'Oxygen', sans-serif" }}>
          Contact
        </Typography>
      </Button>
    </div>
  );
}

export default NavBar;
