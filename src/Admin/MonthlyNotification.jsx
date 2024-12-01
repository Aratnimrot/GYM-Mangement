import React, { useState, useEffect } from "react";
import { Button, Typography, Box, Container, Paper } from "@mui/material";
import { Notifications } from "@mui/icons-material";

const MonthlyNotification = () => {
  const [isNotified, setIsNotified] = useState(false);

  // Simulate monthly notification (setInterval)
  useEffect(() => {
    const notificationInterval = setInterval(() => {
      alert("Monthly notification sent!");
      setIsNotified(true);
    }, 10000); // Simulate 10 seconds for testing, replace with 30 days

    // Cleanup interval when component is unmounted
    return () => clearInterval(notificationInterval);
  }, []);

  return (
    <Container>
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Monthly Notifications
        </Typography>

        <Typography variant="h6" align="center" gutterBottom>
          Notifications will be sent automatically every month.
        </Typography>

        {/* Card-like box for a clean look */}
        <Paper
          sx={{
            padding: 3,
            backgroundColor: "#f9f9f9",
            boxShadow: 3,
            borderRadius: 2,
            marginBottom: 3,
          }}
        >
          <Typography variant="h6" align="center" sx={{ marginBottom: 2 }}>
            Simulate Monthly Notification
          </Typography>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            sx={{
              backgroundColor: "#1976d2",
              ":hover": { backgroundColor: "#1565c0" },
              boxShadow: 2,
            }}
            startIcon={<Notifications />}
            onClick={() => setIsNotified(true)}
          >
            Send Notification Now
          </Button>
        </Paper>

        {/* Success message */}
        {isNotified && (
          <Typography
            variant="body1"
            color="success.main"
            align="center"
            sx={{ mt: 2 }}
          >
            Monthly notification has been sent!
          </Typography>
        )}
      </Box>
    </Container>
  );
};

export default MonthlyNotification;
