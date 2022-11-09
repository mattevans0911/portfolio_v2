import React from "react";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

function NavBar() {
  return (
    <div
      style={{
        width: "100%",
        height: "50px",
        display: "flex",
        alignItems: "center",
        color: "white",
        borderBottom: "1px solid white",
      }}
    >
      <Avatar alt="M.E." src="" />
      <Typography
        variant="h5"
        style={{ marginLeft: "15px", marginRight: "15px" }}
      >
        About Me
      </Typography>

      <Typography variant="h5" style={{ marginRight: "15px" }}>
        Projects
      </Typography>

      <Typography variant="h5">Contact</Typography>
    </div>
  );
}

export default NavBar;
