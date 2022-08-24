import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";

export default function Widget3() {
  function handleSubmit(event) {
    const formData = new FormData(event.target);
    console.log(formData);
    event.preventDefault();
  }

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 3,
      }}
    >
      <Typography variant="h6" gutterBottom>
        Widget 3
      </Typography>
      <TextField label="First Name" />
      <Button type="submit" variant="contained">
        Submit
      </Button>
    </Box>
  );
}
