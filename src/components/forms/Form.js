import React from "react";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";

function Form() {
  return (
    <form
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TextField required id="outlined-required" label="First Name" />
      <TextField required id="outlined-required" label="Last Name" />
      <TextField
        required
        multiline
        rows={5}
        id="outlined-required"
        label="Message"
        style={{ width: "14.5vw" }}
      />
      <Button>Submit</Button>
    </form>
  );
}

export default Form;
