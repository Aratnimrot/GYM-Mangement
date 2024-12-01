import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Typography, Container, Box } from "@mui/material";

const Dashboard = () => {
  const navigate = useNavigate(); // For navigation handling

  // Logout function
  const logout = () => {
    localStorage.removeItem("loggedIn");
    navigate("/login"); // Redirect to login after logout
  };

  // Navigate to the search records page
  const goToSearchRecords = () => {
    navigate("/search-records"); // Assuming you have a /search-records page
  };
  const goToMemberList = () => {
    navigate("/MemberList");
  };
  const goToassignfeepackage = () => {
    navigate("/assign-fee-package");
  };
  const goToreportexport = () => {
    navigate("/report-export");
  };
  const goTomonthlynotification = () => {
    navigate("/monthly-notification");
  };

  return (
    <Container className="dashboard-container" maxWidth="lg">
      {/* Dashboard Header */}
      <Typography
        variant="h4"
        component="h2"
        align="center"
        gutterBottom
        sx={{ fontWeight: 600, color: "#3c3c3c" }}
      >
        Admin Dashboard
      </Typography>

      {/* Logout Section */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          marginBottom: 3,
          backgroundColor: "#f0f0f0",
          borderRadius: 1,
          padding: 2,
          boxShadow: 2,
        }}
      >
        <Button
          variant="contained"
          color="secondary"
          onClick={logout}
          sx={{ fontWeight: 500 }}
        >
          Logout
        </Button>
      </Box>

      {/* Main Actions Section */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          gap: 2,
          flexWrap: "wrap",
          marginBottom: 4,
        }}
      >
        <Box
          sx={{
            backgroundColor: "#f1f8e9",
            borderRadius: 1,
            padding: 2,
            width: "48%",
            boxShadow: 3,
            transition: "transform 0.3s ease-in-out",
            "&:hover": {
              transform: "scale(1.05)",
              boxShadow: 5,
            },
          }}
        >
          <Typography variant="h6" align="center" gutterBottom>
            Member Management
          </Typography>
          <Button
            variant="outlined"
            component={Link}
            to="/member-list"
            onClick={goToSearchRecords}
            sx={{ width: "100%" }}
          >
            Add Member
          </Button>
        </Box>

        <Box
          sx={{
            backgroundColor: "#fffbf1",
            borderRadius: 1,
            padding: 2,
            width: "48%",
            boxShadow: 3,
            transition: "transform 0.3s ease-in-out",
            "&:hover": {
              transform: "scale(1.05)",
              boxShadow: 5,
            },
          }}
        >
          <Typography variant="h6" align="center" gutterBottom>
            Bills Management
          </Typography>
          <Button
            variant="outlined"
            component={Link}
            to="/bills"
            sx={{ width: "100%" }}
          >
            Manage Bills
          </Button>
        </Box>
      </Box>

      {/* Supplements and Diet Details Section */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          gap: 2,
          flexWrap: "wrap",
          marginBottom: 4,
        }}
      >
        <Box
          sx={{
            backgroundColor: "#e8f5e9",
            borderRadius: 1,
            padding: 2,
            width: "48%",
            boxShadow: 3,
            transition: "transform 0.3s ease-in-out",
            "&:hover": {
              transform: "scale(1.05)",
              boxShadow: 5,
            },
          }}
        >
          <Typography variant="h6" align="center" gutterBottom>
            Supplements Store
          </Typography>
          <Button
            variant="outlined"
            component={Link}
            to="/supplements"
            sx={{ width: "100%" }}
          >
            Supplements Store
          </Button>
        </Box>

        <Box
          sx={{
            backgroundColor: "#f3e5f5",
            borderRadius: 1,
            padding: 2,
            width: "48%",
            boxShadow: 3,
            transition: "transform 0.3s ease-in-out",
            "&:hover": {
              transform: "scale(1.05)",
              boxShadow: 5,
            },
          }}
        >
          <Typography variant="h6" align="center" gutterBottom>
            Diet Details
          </Typography>
          <Button
            variant="outlined"
            component={Link}
            to="/diet-details"
            sx={{ width: "100%" }}
          >
            Diet Details
          </Button>
        </Box>
      </Box>

      {/* Search Records Section */}
      <Box
        sx={{
          backgroundColor: "#fff3e0",
          borderRadius: 1,
          padding: 2,
          boxShadow: 3,
          marginBottom: 4,
        }}
      >
        <Typography variant="h6" align="center" gutterBottom>
          Search Records
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={goToSearchRecords}
          sx={{ width: "100%" }}
        >
          Search Records
        </Button>
      </Box>

      {/* New Action Buttons */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          gap: 2,
          flexWrap: "wrap",
          marginBottom: 4,
        }}
      >
        {/* Monthly Notification */}
        <Box
          sx={{
            backgroundColor: "#fce4ec",
            borderRadius: 1,
            padding: 2,
            width: "48%",
            boxShadow: 3,
            transition: "transform 0.3s ease-in-out",
            "&:hover": {
              transform: "scale(1.05)",
              boxShadow: 5,
            },
          }}
        >
          <Typography variant="h6" align="center" gutterBottom>
            Monthly Notification
          </Typography>
          <Button
            variant="outlined"
            color="secondary"
            onClick={goTomonthlynotification}
            sx={{ width: "100%" }}
          >
            Send Monthly Notification
          </Button>
        </Box>

        {/* Assign Fee Package */}
        <Box
          sx={{
            backgroundColor: "#e8f5e9",
            borderRadius: 1,
            padding: 2,
            width: "48%",
            boxShadow: 3,
            transition: "transform 0.3s ease-in-out",
            "&:hover": {
              transform: "scale(1.05)",
              boxShadow: 5,
            },
          }}
        >
          <Typography variant="h6" align="center" gutterBottom>
            AssignFee Package
          </Typography>
          <Button
            variant="outlined"
            color="primary"
            onClick={goToassignfeepackage}
            sx={{ width: "100%" }}
          >
            AssignFeePackage
          </Button>
        </Box>

        {/* Report Export */}
        <Box
          sx={{
            backgroundColor: "#f3e5f5",
            borderRadius: 1,
            padding: 2,
            width: "48%",
            boxShadow: 3,
            transition: "transform 0.3s ease-in-out",
            "&:hover": {
              transform: "scale(1.05)",
              boxShadow: 5,
            },
          }}
        >
          <Typography variant="h6" align="center" gutterBottom>
            Report Export
          </Typography>
          <Button
            variant="outlined"
            color="warning"
            to="/report-export"
            onClick={goToreportexport}
            sx={{ width: "100%" }}
          >
            ReportExport
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Dashboard;
