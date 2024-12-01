import React, { useState } from "react";
import {
  TextField,
  Button,
  Container,
  Typography,
  Box,
  Grid,
} from "@mui/material";

const SearchRecords = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const records = [
    { id: 1, name: "John Doe", age: 28 },
    { id: 2, name: "Jane Smith", age: 32 },
    { id: 3, name: "Mary Johnson", age: 45 },
    { id: 4, name: "James Williams", age: 40 },
  ];

  const filteredRecords = records.filter((record) =>
    record.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container>
      <Box
        sx={{
          my: 6,
          padding: 4,
          backgroundColor: "#fafafa",
          borderRadius: 2,
          boxShadow: 3,
        }}
      >
        <Typography variant="h4" align="center" gutterBottom color="primary">
          Search Records
        </Typography>

        <TextField
          label="Search by Name"
          fullWidth
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          sx={{
            mb: 3,
            borderRadius: 2,
            "& .MuiOutlinedInput-root": {
              borderRadius: 2,
              borderColor: "#d1d1d1",
            },
          }}
        />

        <Box sx={{ maxHeight: 400, overflowY: "auto", paddingBottom: 2 }}>
          {filteredRecords.length > 0 ? (
            filteredRecords.map((record) => (
              <Box
                key={record.id}
                sx={{
                  backgroundColor: "#ffffff",
                  padding: 3,
                  marginBottom: 2,
                  borderRadius: 2,
                  boxShadow: 2,
                  transition: "0.3s",
                  "&:hover": {
                    boxShadow: 4,
                    backgroundColor: "#e6f7ff",
                  },
                }}
              >
                <Typography variant="h6" color="primary">
                  {record.name}
                </Typography>
                <Typography variant="body1" color="textSecondary">
                  {record.age} years old
                </Typography>
              </Box>
            ))
          ) : (
            <Typography variant="h6" align="center" color="error">
              No records found
            </Typography>
          )}
        </Box>

        {/* Optional: Clear search button */}
        {searchTerm && (
          <Box sx={{ textAlign: "center", marginTop: 2 }}>
            <Button
              variant="outlined"
              color="secondary"
              onClick={() => setSearchTerm("")}
              sx={{
                borderRadius: 2,
                textTransform: "none",
                "&:hover": {
                  backgroundColor: "#fce4ec",
                },
              }}
            >
              Clear Search
            </Button>
          </Box>
        )}
      </Box>
    </Container>
  );
};

export default SearchRecords;
