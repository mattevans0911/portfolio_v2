import React, { useRef, useState } from "react";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import CircularProgress from "@mui/material/CircularProgress";
import { Button } from "@mui/material";
import emailjs from "@emailjs/browser";

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const inputProps = {
    color: "white",
  };

  const emailForm = useRef();

  const handleClose = () => {
    setOpen(false);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);

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
          setIsLoading(false);
          setOpen(true);
        },
        (error) => {
          console.log(error);
        }
      );
  };

  return (
    <>
      {isLoading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CircularProgress />
        </div>
      ) : (
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
          <Dialog open={open} onClose={handleClose}>
            <DialogTitle>{"Thank You For Reaching Out!"}</DialogTitle>
            <DialogContent>
              <DialogContentText>
                I will get back to you as soon as I can.
              </DialogContentText>
            </DialogContent>
          </Dialog>

          <TextField
            value={name}
            onChange={(event) => setName(event.target.value)}
            name="user-name"
            required
            id="outlined-required"
            label="Name"
            inputProps={inputProps}
            sx={{
              "& .MuiOutlinedInput-root": {
                "& > fieldset": { borderColor: "white" },
              },
            }}
            style={{ marginTop: "10px", marginBottom: "10px" }}
          />
          <TextField
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            name="user-email"
            required
            id="outlined-required"
            label="Email"
            sx={{
              "& .MuiOutlinedInput-root": {
                "& > fieldset": { borderColor: "white" },
              },
            }}
            style={{ marginBottom: "10px" }}
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
            sx={{
              "& .MuiOutlinedInput-root": {
                "& > fieldset": { borderColor: "white" },
              },
            }}
            style={{
              width: "14.5vw",
              marginBottom: "10px",
            }}
          />
          <Button
            type="submit"
            style={{ border: "1px solid white", color: "white" }}
          >
            Submit
          </Button>
        </form>
      )}
    </>
  );
}

export default Form;
