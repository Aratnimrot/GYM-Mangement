import React, { useState } from "react";
import {
  TextField,
  Button,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Container,
  Box,
  Typography,
  Paper,
} from "@mui/material";
import { Assignment } from "@mui/icons-material";

const AssignFeePackage = () => {
  const [memberId, setMemberId] = useState("");
  const [feePackage, setFeePackage] = useState("");

  const feePackages = [
    { id: 1, name: "Basic Package", price: "$50" },
    { id: 2, name: "Standard Package", price: "$100" },
    { id: 3, name: "Premium Package", price: "$200" },
  ];

  const handleAssignPackage = () => {
    if (memberId && feePackage) {
      alert(`Assigned ${feePackage} to Member ID: ${memberId}`);
      // Logic to save the assignment (could be localStorage, API, etc.)
    } else {
      alert("Please select a member and fee package");
    }
  };

  return (
    <Container>
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Assign Fee Package
        </Typography>

        {/* Paper container for better separation */}
        <Paper
          sx={{
            padding: 3,
            backgroundColor: "#f9f9f9",
            boxShadow: 3,
            borderRadius: 2,
          }}
        >
          <TextField
            label="Member ID"
            variant="outlined"
            fullWidth
            value={memberId}
            onChange={(e) => setMemberId(e.target.value)}
            sx={{ mb: 3 }}
          />

          <FormControl fullWidth sx={{ mb: 3 }}>
            <InputLabel>Fee Package</InputLabel>
            <Select
              value={feePackage}
              onChange={(e) => setFeePackage(e.target.value)}
              label="Fee Package"
            >
              {feePackages.map((pkg) => (
                <MenuItem key={pkg.id} value={pkg.name}>
                  {pkg.name} - {pkg.price}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <Button
            variant="contained"
            color="primary"
            onClick={handleAssignPackage}
            fullWidth
            sx={{
              backgroundColor: "#1976d2",
              ":hover": { backgroundColor: "#1565c0" },
              boxShadow: 2,
            }}
            startIcon={<Assignment />}
          >
            Assign Package
          </Button>
        </Paper>
      </Box>
    </Container>
  );
};

export default AssignFeePackage;
