import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box, Container, Typography } from "@mui/material";
import Chat from "app1/App";
import Email from "app2/App";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";

function App() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Router>
      <Box sx={{ bgcolor: "#417f74", minHeight: "100vh" }}>
        {/* Navbar */}
        <Navbar handleDrawerToggle={handleDrawerToggle} />

        {/* Sidebar Drawer for Mobile */}
        <Sidebar
          mobileOpen={mobileOpen}
          handleDrawerToggle={handleDrawerToggle}
        />
       
        {/* Main Content */}
        <Container sx={{ mt: 4 }}>
        {/* <Box
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            // minHeight: "70vh",
          }}
        >
          <Typography style={{ fontSize: "20px", color: "#fff" }}>
            Micro-Frontend Architecture
          </Typography>
        </Box> */}
          <Routes>
            <Route path="/chat" element={<Chat />} />
            <Route path="/email" element={<Email />} />
          </Routes>
        </Container>
      </Box>
    </Router>
  );
}

export default App;
