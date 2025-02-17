import React from "react";
import { AppBar, Toolbar, Typography, Button, IconButton, Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

const Navbar = ({ handleDrawerToggle }) => {
  return (
    <AppBar position="static">
      <Toolbar>
        {/* Mobile Menu Button */}
        <IconButton
          color="inherit"
          edge="start"
          sx={{ display: { xs: "block", sm: "none" } }}
          onClick={handleDrawerToggle}
        >
          <MenuIcon />
        </IconButton>

        {/* App Title */}
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          My App
        </Typography>

        {/* Navigation Links (Desktop View) */}
        <Box sx={{ display: { xs: "none", sm: "block" } }}>
          <Button color="inherit" component={Link} to="/chat">
            Chat
          </Button>
          <Button color="inherit" component={Link} to="/email">
            Email
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
