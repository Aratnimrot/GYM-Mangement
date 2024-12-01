// export default Bills;
import React, { useState } from "react";
import {
  TextField,
  Button,
  Typography,
  Container,
  Box,
  Grid,
  Paper,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

import "./Bills.css"; // Import custom CSS

const Bills = () => {
  const [newBill, setNewBill] = useState({
    memberId: "",
    amount: "",
    dueDate: "",
  });

  const [bills, setBills] = useState(
    JSON.parse(localStorage.getItem("bills")) || []
  );

  // Function to create a new bill
  const createBill = (e) => {
    e.preventDefault();
    const updatedBills = [...bills, newBill];
    localStorage.setItem("bills", JSON.stringify(updatedBills)); // Save to localStorage
    setBills(updatedBills); // Update state with new bill list
    setNewBill({ memberId: "", amount: "", dueDate: "" }); // Clear form fields after creation
  };

  // Utility function to calculate days left for the due date
  const calculateDaysLeft = (dueDate) => {
    const today = new Date();
    const due = new Date(dueDate);
    const timeDiff = due - today;
    return Math.ceil(timeDiff / (1000 * 3600 * 24)); // Returns number of days left
  };

  // Notification message based on bill due date
  const getNotification = (dueDate) => {
    const daysLeft = calculateDaysLeft(dueDate);
    if (daysLeft > 0) {
      return `Bill due in ${daysLeft} day(s)`;
    } else if (daysLeft === 0) {
      return "Bill is due today!";
    } else {
      return `Bill overdue by ${Math.abs(daysLeft)} day(s)`;
    }
  };

  const clearBills = () => {
    localStorage.removeItem("bills"); // Remove bills from local storage
    setBills([]); // Clear the bills state
  };

  return (
    <Container maxWidth="lg" sx={{ my: 4 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Bills Management
      </Typography>

      {/* Create Bill Section */}
      <Paper sx={{ p: 4, mb: 4 }}>
        <Typography variant="h5" gutterBottom>
          Create Bill
        </Typography>
        <form onSubmit={createBill}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={4}>
              <TextField
                label="Member ID"
                variant="outlined"
                fullWidth
                value={newBill.memberId}
                onChange={(e) =>
                  setNewBill({ ...newBill, memberId: e.target.value })
                }
                required
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                label="Amount"
                variant="outlined"
                type="number"
                fullWidth
                value={newBill.amount}
                onChange={(e) =>
                  setNewBill({ ...newBill, amount: e.target.value })
                }
                required
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                label="Due Date"
                variant="outlined"
                type="date"
                fullWidth
                value={newBill.dueDate}
                onChange={(e) =>
                  setNewBill({ ...newBill, dueDate: e.target.value })
                }
                required
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
          </Grid>
          <Box sx={{ mt: 2, display: "flex", justifyContent: "space-between" }}>
            <Button variant="contained" color="primary" type="submit">
              Create Bill
            </Button>
          </Box>
        </form>
      </Paper>

      {/* Bill Receipts Section */}

      <Paper sx={{ p: 4, mb: 4 }}>
        <Typography variant="h5" gutterBottom>
          Bill Receipts
        </Typography>
        <List>
          {bills.map((bill, index) => (
            <ListItem key={index}>
              <ListItemText
                primary={`Member ID: ${bill.memberId} - $${bill.amount}`}
                secondary={`Due Date: ${bill.dueDate}`}
              />
            </ListItem>
          ))}
        </List>
        {/* Clear All Bills Button */}
        {bills.length > 0 && (
          <Box sx={{ mt: 2, textAlign: "center" }}>
            <Button variant="outlined" color="error" onClick={clearBills}>
              Clear All Bills
            </Button>
          </Box>
        )}
      </Paper>

      {/* Bill Notifications Section */}
      <Paper sx={{ p: 4 }}>
        <Typography variant="h5" gutterBottom>
          Bill Notifications
        </Typography>
        <List>
          {bills.map((bill, index) => (
            <ListItem key={index}>
              <ListItemText
                primary={`Member ID: ${bill.memberId}`}
                secondary={getNotification(bill.dueDate)}
              />
            </ListItem>
          ))}
        </List>
      </Paper>
    </Container>
  );
};

export default Bills;
