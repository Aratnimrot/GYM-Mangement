import React from "react";
import { Button, Box, Container, Typography, Paper } from "@mui/material";
import { Download } from "@mui/icons-material";

const ReportExport = () => {
  const members = [
    { id: 1, name: "John Doe", feePackage: "Basic Package", amount: "$50" },
    {
      id: 2,
      name: "Jane Smith",
      feePackage: "Premium Package",
      amount: "$200",
    },
    {
      id: 3,
      name: "Mary Johnson",
      feePackage: "Standard Package",
      amount: "$100",
    },
  ];

  const exportToCSV = () => {
    const csvData = [
      ["ID", "Name", "Fee Package", "Amount"], // Header row
      ...members.map((member) => [
        member.id,
        member.name,
        member.feePackage,
        member.amount,
      ]),
    ];

    const csvContent = csvData.map((row) => row.join(",")).join("\n");

    // Create a Blob and download
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    if (link.download !== undefined) {
      const url = URL.createObjectURL(blob);
      link.setAttribute("href", url);
      link.setAttribute("download", "members_report.csv");
      link.click();
    }
  };

  return (
    <Container>
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Export Report
        </Typography>

        <Paper
          sx={{
            padding: 3,
            backgroundColor: "#f9f9f9",
            boxShadow: 2,
            borderRadius: 2,
            marginBottom: 3,
          }}
        >
          <Typography variant="h6" align="center" gutterBottom>
            Member Report Details
          </Typography>
          <ul>
            {members.map((member) => (
              <li key={member.id}>
                <Typography variant="body1" align="center">
                  {member.name} - {member.feePackage} - {member.amount}
                </Typography>
              </li>
            ))}
          </ul>
        </Paper>

        <Button
          variant="contained"
          color="primary"
          onClick={exportToCSV}
          sx={{
            width: "100%",
            backgroundColor: "#1976d2",
            ":hover": { backgroundColor: "#1565c0" },
            boxShadow: 2,
            borderRadius: 2,
          }}
          startIcon={<Download />}
        >
          Export Report as CSV
        </Button>
      </Box>
    </Container>
  );
};

export default ReportExport;
