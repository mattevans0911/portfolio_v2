import React, { useRef, useState } from "react";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import emailjs from "@emailjs/browser";

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const emailForm = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_40jf3wj",
        "template_r5x4dda",
        emailForm.current,
        "vfYIgBUH5rg1XKhBI"
      )
      .then(
        (result) => {
          setName("");
          setEmail("");
          setMessage("");
        },
        (error) => {
          console.log(error);
        }
      );
  };

  return (
    <form
      ref={emailForm}
      onSubmit={sendEmail}
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TextField
        value={name}
        onChange={(event) => setName(event.target.value)}
        name="user-name"
        required
        id="outlined-required"
        label="Name"
      />
      <TextField
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        name="user-email"
        required
        id="outlined-required"
        label="Email"
      />
      <TextField
        value={message}
        onChange={(event) => setMessage(event.target.value)}
        name="message"
        required
        multiline
        rows={5}
        id="outlined-required"
        label="Message"
        style={{ width: "14.5vw" }}
      />
      <Button type="submit">Submit</Button>
    </form>
  );
}

export default Form;
