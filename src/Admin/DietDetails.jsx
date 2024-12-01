import React, { useState } from "react";
import {
  TextField,
  Button,
  Typography,
  Container,
  Box,
  Grid,
  Card,
  CardContent,
  Divider,
} from "@mui/material";

const DietDetails = () => {
  const [diet, setDiet] = useState({ memberId: "", dietPlan: "" });
  const [diets, setDiets] = useState(
    JSON.parse(localStorage.getItem("diets")) || []
  );

  const addDiet = () => {
    const updatedDiets = [...diets, diet];
    localStorage.setItem("diets", JSON.stringify(updatedDiets));
    setDiets(updatedDiets);
    setDiet({ memberId: "", dietPlan: "" }); // Reset form after adding diet
  };

  const clearDiets = () => {
    localStorage.removeItem("diets"); // Remove diets from localStorage
    setDiets([]); // Clear the diets state
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h2" align="center" gutterBottom>
          Diet Details
        </Typography>

        {/* Input Form Section */}
        <Box sx={{ mb: 4 }}>
          <TextField
            label="Member ID"
            variant="outlined"
            fullWidth
            value={diet.memberId}
            onChange={(e) => setDiet({ ...diet, memberId: e.target.value })}
            sx={{
              mb: 2,
              backgroundColor: "#f9f9f9",
              borderRadius: 2,
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "#888",
                },
              },
            }}
          />
          <TextField
            label="Diet Plan"
            variant="outlined"
            fullWidth
            multiline
            rows={4}
            value={diet.dietPlan}
            onChange={(e) => setDiet({ ...diet, dietPlan: e.target.value })}
            sx={{
              mb: 2,
              backgroundColor: "#f9f9f9",
              borderRadius: 2,
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "#888",
                },
              },
            }}
          />
          <Box sx={{ display: "flex", gap: 2 }}>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={addDiet}
              sx={{
                fontWeight: "bold",
                padding: "12px 20px",
                borderRadius: 2,
                "&:hover": {
                  backgroundColor: "#1976d2", // Primary color
                },
              }}
            >
              Add Diet
            </Button>
          </Box>
        </Box>

        {/* Diet List Section */}
        <Box sx={{ mt: 4 }}>
          <Typography variant="h6" component="h3" gutterBottom>
            Member Diets
          </Typography>
          <Grid container spacing={2}>
            {diets.length === 0 ? (
              <Typography
                variant="body1"
                color="textSecondary"
                sx={{ textAlign: "center", width: "100%" }}
              >
                No diets available.
              </Typography>
            ) : (
              diets.map((dietItem, index) => (
                <Grid item xs={12} key={index}>
                  <Card
                    sx={{
                      backgroundColor: "#f9f9f9",
                      boxShadow: 3,
                      borderRadius: 2,
                      padding: 2,
                    }}
                  >
                    <CardContent>
                      <Typography variant="body1" fontWeight="bold">
                        Member ID: {dietItem.memberId}
                      </Typography>
                      <Divider sx={{ my: 1 }} />
                      <Typography variant="body2" sx={{ color: "#555" }}>
                        {dietItem.dietPlan}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))
            )}
          </Grid>
        </Box>

        {/* Clear Diets Button */}
        {diets.length > 0 && (
          <Box sx={{ mt: 3, textAlign: "center" }}>
            <Button
              variant="outlined"
              color="error"
              onClick={clearDiets}
              sx={{
                fontWeight: "bold",
                padding: "12px 20px",
                borderRadius: 2,
                "&:hover": {
                  backgroundColor: "#f44336",
                  color: "#fff",
                },
              }}
            >
              Clear All Diets
            </Button>
          </Box>
        )}
      </Box>
    </Container>
  );
};

export default DietDetails;
