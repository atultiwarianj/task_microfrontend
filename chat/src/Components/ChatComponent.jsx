import React, { useState } from "react";
import {
  Container,
  Paper,
  TextField,
  IconButton,
  List,
  ListItem,
  Avatar,
  Typography,
  Box,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

const ChatComponent = () => {
  const [messages, setMessages] = useState([
    { text: "Hello! How can I assist you?", sender: "bot" },
  ]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;
    const newMessage = { text: input, sender: "user" };
    setMessages([
      ...messages,
      newMessage,
      { text: "Let me check...", sender: "bot" },
    ]);
    setInput("");
  };

  return (
    <Box
      width="100%"
      sx={{
        display: "flex",
        justifyContent: "center", // Centering
      }}
    >
      <Paper
        elevation={3}
        sx={{
          height: { xs: "80vh", sm: "80vh" },
          width: { xs: "100%", sm: "100%", md: "40%" },
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography variant="h5" align="center" gutterBottom>
          Chat Application
        </Typography>

        <List sx={{ flexGrow: 1, overflowY: "auto" }}>
          {messages.map((msg, index) => (
            <ListItem
              key={index}
              sx={{
                justifyContent:
                  msg.sender === "user" ? "flex-end" : "flex-start",
                display: "flex",
              }}
            >
              {msg.sender === "bot" && (
                <Avatar sx={{ bgcolor: "primary.main", mr: 1 }}>🤖</Avatar>
              )}
              <Paper
                sx={{
                  p: { xs: 0.5, sm: 1 },
                  borderRadius: "12px",
                  maxWidth: { xs: "85%", sm: "75%" },
                  bgcolor: msg.sender === "user" ? "primary.light" : "grey.300",
                }}
              >
                <Typography
                  sx={{ fontSize: { xs: "14px", sm: "16px", md: "18px" } }}
                >
                  {msg.text}
                </Typography>
              </Paper>
            </ListItem>
          ))}
        </List>

        <Paper
          sx={{
            display: "flex",
            alignItems: "center",
            p: { xs: 0.5, sm: 1 },

            borderRadius: 2,
          }}
        >
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Type a message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && sendMessage()}
            sx={{ fontSize: { xs: "20px", sm: "16px" } }}
          />
          <IconButton color="primary" onClick={sendMessage}>
            <SendIcon />
          </IconButton>
        </Paper>
      </Paper>
    </Box>
  );
};

export default ChatComponent;
