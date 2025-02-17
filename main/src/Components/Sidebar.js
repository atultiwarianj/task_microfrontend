import React from "react";
import { Box, Drawer, List, ListItem, ListItemText } from "@mui/material";
import { Link } from "react-router-dom";

const Sidebar = ({ mobileOpen, handleDrawerToggle }) => {
  return (
    <Drawer open={mobileOpen} onClose={handleDrawerToggle}>
      <Box
        sx={{
          width: 250,
          bgcolor: "#417f74",
          height: "100vh",
          color: "white",
        }}
      >
        <List>
          <ListItem button component={Link} to="/chat" onClick={handleDrawerToggle}>
            <ListItemText primary="Chat" />
          </ListItem>
          <ListItem button component={Link} to="/email" onClick={handleDrawerToggle}>
            <ListItemText primary="Email" />
          </ListItem>
        </List>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
