// import React from 'react';
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, IconButton, Button } from "@mui/material";
import { PersonAdd, Person, AdminPanelSettings } from "@mui/icons-material";

function Navbar() {
  return (
    <AppBar position="sticky" sx={{ backgroundColor: "green" }}>
      <Toolbar>
        {/* Logo */}
        <Typography variant="h5" sx={{ flexGrow: 2, marginLeft: 20 }}>
          GYM Mangement
        </Typography>

        {/* Navbar Links */}
        <IconButton
          component={Link}
          to="/member/login"
          color="inherit"
          sx={{ marginRight: 2 }}
        >
          <PersonAdd sx={{ marginRight: 1 }} />
          Member
        </IconButton>

        <IconButton
          component={Link}
          to="/user/login"
          color="inherit"
          sx={{ marginRight: 2 }}
        >
          <Person sx={{ marginRight: 1 }} />
          User
        </IconButton>

        <IconButton component={Link} to="/admin/login" color="inherit">
          <AdminPanelSettings sx={{ marginRight: 1 }} />
          Admin
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
