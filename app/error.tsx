"use client";

import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

export default function AppError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <Stack spacing={2} role="alert">
      <Typography variant="h4" component="h1">
        Something went wrong
      </Typography>
      <Typography color="text.secondary">
        {error.message || "The dashboard could not load this view."}
      </Typography>
      <Button variant="contained" onClick={reset} sx={{ alignSelf: "flex-start" }}>
        Try again
      </Button>
    </Stack>
  );
}
