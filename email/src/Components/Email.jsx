import React, { useState } from "react";
import {
  Container,
  TextField,
  Button,
  Typography,
  Card,
  CardContent,
} from "@mui/material";
import { Send } from "@mui/icons-material";

const Email = () => {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleSendEmail = () => {
    if (!email || !subject || !message) {
      setStatus("Please fill all fields.");
      return;
    }
    setStatus(`Email sent to ${email}`);
    setEmail("");
    setSubject("");
    setMessage("");
  };

  return (
    <>
    
    <Container
      // maxWidth="lg"
      sx={{
        mt: { xs: 2, sm: 4 },
        display: "flex",
        justifyContent: "center",
        // alignItems: "center",
        // minHeight: "100vh",
        // background:"#417f74"

      }}
    >
      <Card
        sx={{
          width: "100%",
          // maxWidth: { xs: "95%", sm: "80%", md: "60%", lg: "50%" },
         
          // p: { xs: 3, sm: 4 },
          boxShadow: 4,
          borderRadius: 2,
        }}
      >
        <CardContent>
          <Typography
            variant="h5"
            gutterBottom
            sx={{
              fontSize: { xs: "1.8rem", sm: "2.2rem" },
              textAlign: "center",
            }}
          >
            Email Application
          </Typography>
          <TextField
            fullWidth
            label="Recipient Email"
            variant="outlined"
            margin="normal"
            value={email}
            size="medium"
            onChange={(e) => setEmail(e.target.value)}
            sx={{ fontSize: "1rem" }}
          />
          <TextField
            fullWidth
            label="Subject"
            variant="outlined"
            margin="normal"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            sx={{ fontSize: "1rem" }}
          />
          <TextField
            fullWidth
            label="Message"
            variant="outlined"
            margin="normal"
            multiline
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            sx={{ fontSize: "1rem" }}
          />
          <Button
            variant="contained"
            color="primary"
            startIcon={<Send />}
            sx={{
              mt: 3,
              width: "100%",
              fontSize: { xs: "1rem", sm: "1.2rem" },
              padding: { xs: "10px", sm: "12px" },
            }}
            onClick={handleSendEmail}
          >
            Send Email
          </Button>
          {status && (
            <Typography
              color="secondary.main"
              sx={{
                mt: 2,
                fontSize: { xs: "1rem", sm: "1.2rem" },
                textAlign: "center",
              }}
            >
              {status}
            </Typography>
          )}
        </CardContent>
      </Card>
    </Container>
    </>
  );
};

export default Email;
