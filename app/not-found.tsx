"use client";

import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Link from "next/link";

export default function NotFound() {
  return (
    <Stack spacing={2}>
      <Typography variant="h4" component="h1">
        Page not found
      </Typography>
      <Typography color="text.secondary">
        This address is not a registered dashboard or module route.
      </Typography>
      <Button component={Link} href="/" variant="contained" sx={{ alignSelf: "flex-start" }}>
        Back to dashboard
      </Button>
    </Stack>
  );
}
