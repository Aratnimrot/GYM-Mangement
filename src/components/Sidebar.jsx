import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ListItemIcon, Divider } from "@mui/material";
import {
  Home,
  Dashboard,
  Receipt,
  LocalDrink,
  Fastfood,
  Login,
  FileDownload, // Icon for Report Export
  Assignment, // Icon for Assign Fee Package
  Search, // Icon for Search Records
  Notifications, // Icon for Monthly Notification
  People, // Icon for Member List
} from "@mui/icons-material"; // MUI Icons
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Typography,
} from "@mui/material";
import { Menu as MenuIcon, Close as CloseIcon } from "@mui/icons-material";

const Sidebar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  // Function to toggle the sidebar open/close
  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      <Drawer
        anchor="left"
        open={isSidebarOpen}
        onClose={toggleSidebar}
        sx={{
          width: 250,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: 250,
            backgroundColor: "#1976d2",
            color: "#fff",
            paddingTop: "16px",
            borderRight: "none",
          },
        }}
      >
        <div className="sidebar-header">
          <Typography
            variant="h5"
            sx={{ textAlign: "center", marginBottom: "20px" }}
          >
            Menu
          </Typography>
        </div>
        <List>
          <Divider style={{ backgroundColor: "white" }} />

          <ListItem
            button
            component={Link}
            to="/"
            style={{ color: "white", textDecoration: "none" }}
          >
            <ListItemIcon style={{ color: "white" }}>
              <Home />
            </ListItemIcon>
            <ListItemText primary="Home" style={{ color: "white" }} />
          </ListItem>
          <ListItem
            button
            component={Link}
            to="/dashboard"
            style={{ color: "white", textDecoration: "none" }}
          >
            <ListItemIcon style={{ color: "white" }}>
              <Dashboard />
            </ListItemIcon>
            <ListItemText primary="Dashboard" style={{ color: "white" }} />
          </ListItem>
          <ListItem
            button
            component={Link}
            to="/member-list"
            style={{ color: "white", textDecoration: "none" }}
          >
            <ListItemIcon style={{ color: "white" }}>
              <People />
            </ListItemIcon>
            <ListItemText primary="Member List" style={{ color: "white" }} />
          </ListItem>

          {/* Bills Item */}
          <ListItem
            button
            component={Link}
            to="/bills"
            style={{ color: "white", textDecoration: "none" }}
          >
            <ListItemIcon style={{ color: "white" }}>
              <Receipt />
            </ListItemIcon>
            <ListItemText primary="Bills" style={{ color: "white" }} />
          </ListItem>

          {/* Supplements Item */}
          <ListItem
            button
            component={Link}
            to="/supplements"
            style={{ color: "white", textDecoration: "none" }}
          >
            <ListItemIcon style={{ color: "white" }}>
              <LocalDrink />
            </ListItemIcon>
            <ListItemText primary="Supplements" style={{ color: "white" }} />
          </ListItem>

          {/* Diet Details Item */}
          <ListItem
            button
            component={Link}
            to="/diet-details"
            style={{ color: "white", textDecoration: "none" }}
          >
            <ListItemIcon style={{ color: "white" }}>
              <Fastfood />
            </ListItemIcon>
            <ListItemText primary="Diet Details" style={{ color: "white" }} />
          </ListItem>

          <Divider style={{ backgroundColor: "white" }} />

          {/* Report Export Item */}
          <ListItem
            button
            component={Link}
            to="/report-export"
            style={{ color: "white", textDecoration: "none" }}
          >
            <ListItemIcon style={{ color: "white" }}>
              <FileDownload />
            </ListItemIcon>
            <ListItemText primary="Report Export" style={{ color: "white" }} />
          </ListItem>

          {/* Assign Fee Package Item */}
          <ListItem
            button
            component={Link}
            to="/assign-fee-package"
            style={{ color: "white", textDecoration: "none" }}
          >
            <ListItemIcon style={{ color: "white" }}>
              <Assignment />
            </ListItemIcon>
            <ListItemText
              primary="Assign Fee Package"
              style={{ color: "white" }}
            />
          </ListItem>

          {/* Search Records Item */}
          <ListItem
            button
            component={Link}
            to="/search-records"
            style={{ color: "white", textDecoration: "none" }}
          >
            <ListItemIcon style={{ color: "white" }}>
              <Search />
            </ListItemIcon>
            <ListItemText primary="Search Records" style={{ color: "white" }} />
          </ListItem>

          {/* Monthly Notification Item */}
          <ListItem
            button
            component={Link}
            to="/monthly-notification"
            style={{ color: "white", textDecoration: "none" }}
          >
            <ListItemIcon style={{ color: "white" }}>
              <Notifications />
            </ListItemIcon>
            <ListItemText
              primary="Monthly Notification"
              style={{ color: "white" }}
            />
          </ListItem>
        </List>
      </Drawer>
      {/* Content */}
      <div className={`content ${isSidebarOpen ? "sidebar-open" : ""}`} />

      {/* Button to toggle sidebar */}
      <IconButton
        edge="start"
        color="inherit"
        aria-label="menu"
        onClick={toggleSidebar}
        sx={{
          position: "fixed",
          top: "16px",
          left: "16px",
          backgroundColor: "#1976d2",
          borderRadius: "50%",
          zIndex: 1300, // Ensure button is on top of the sidebar
        }}
      >
        {isSidebarOpen ? <CloseIcon /> : <MenuIcon />}
      </IconButton>
    </div>
  );
};

export default Sidebar;
