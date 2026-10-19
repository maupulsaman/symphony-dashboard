"use client";

import Box from "@mui/material/Box";
import Link from "next/link";

export function Logo() {
  return (
    <Box
      component={Link}
      href="/"
      aria-label="Symphony home"
      sx={{
        display: "inline-flex",
        alignItems: "center",
        minWidth: 0,
        borderRadius: 1,
        "&:hover": {
          opacity: 0.9,
        },
        "&:focus-visible": {
          outline: "2px solid #ffffff",
          outlineOffset: 4,
        },
      }}
    >
      <Box
        component="img"
        src="/symphony-logo.png"
        alt=""
        sx={{ height: 40, width: "auto", display: "block" }}
      />
    </Box>
  );
}
