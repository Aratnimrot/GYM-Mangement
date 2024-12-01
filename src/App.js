import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import {
//   AppBar,
//   Toolbar,
//   IconButton,
//   Typography,
//   CssBaseline,
// } from "@mui/material";
// import PersonAddIcon from "@mui/icons-material/PersonAdd"; // For member login icon
// import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings"; // For admin icon
// import PersonIcon from "@mui/icons-material/Person"; // For user icon
// import { Login as LoginIcon } from "@mui/icons-material"; // Import Material UI Login Icon
import AdminLogin from "./Admin/AdminLogin";
import UserLogin from "./User/UserLogin";
import Dashboard from "./components/Dashboard";
import Bills from "./Admin/Bills";
import Supplements from "./Admin/Supplements";
import DietDetails from "./Admin/DietDetails";
import SearchRecords from "./User/SearchRecords";
import MonthlyNotification from "./Admin/MonthlyNotification";
import AssignFeePackage from "./Admin/AssignFeePackage";
import ReportExport from "./Admin/ReportExport";
import Sidebar from "./components/Sidebar"; // Import Sidebar
import MemberList from "./Admin/MemberList"; // Import the MemberList component
import ManageMembers from "./Admin/ManageMembers";
import Navbar from "./Navbar";
import HomePage from "./Home";

const App = () => {
  // Sample member data
  const [members, setMembers] = useState([
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      phone: "123-456-7890",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      phone: "987-654-3210",
    },
    {
      id: 3,
      name: "Mary Johnson",
      email: "mary@example.com",
      phone: "555-123-4567",
    },
  ]);

  return (
    <Router>
      <Navbar />
      <Sidebar /> {/* To apply the default MUI styles globally */}{" "}
      {/* Main Layout: Sidebar + Content */}{" "}
      <div style={{ display: "flex" }}>
        <div style={{ marginLeft: "250px", padding: "20px", flexGrow: 1 }}>
          <Routes>
            <Route path="/" element={<HomePage />} />{" "}
            <Route path="/admin/login" element={<AdminLogin />} />{" "}
            <Route path="/user/login" element={<UserLogin />} />{" "}
            <Route path="/dashboard" element={<Dashboard />} />{" "}
            <Route path="/bills" element={<Bills />} />{" "}
            <Route path="/supplements" element={<Supplements />} />{" "}
            <Route path="/diet-details" element={<DietDetails />} />{" "}
            <Route path="/search-records" element={<SearchRecords />} />{" "}
            <Route path="/report-export" element={<ReportExport />} />{" "}
            <Route path="/assign-fee-package" element={<AssignFeePackage />} />{" "}
            <Route path="/manage-member" element={<ManageMembers />} />{" "}
            <Route
              path="/monthly-notification"
              element={<MonthlyNotification />}
            />{" "}
            <Route
              path="/member-list"
              element={<MemberList members={members} setMembers={setMembers} />}
            />{" "}
            {/* Default Route */}{" "}
            <Route
              path="/"
              element={<h2> Welcome to the Gym Management System </h2>}
            />
          </Routes>{" "}
        </div>{" "}
      </div>{" "}
    </Router>
  );
};

export default App;
