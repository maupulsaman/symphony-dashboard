"use client";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
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
        gap: 1.25,
        minWidth: 0,
        color: "common.white",
        textDecoration: "none",
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
        aria-hidden
        sx={{
          width: 32,
          height: 32,
          flexShrink: 0,
          display: "grid",
          placeItems: "center",
          borderRadius: 1,
          border: "1px solid rgba(255, 255, 255, 0.5)",
          fontWeight: 700,
          lineHeight: 1,
        }}
      >
        S
      </Box>
      <Typography
        component="span"
        noWrap
        sx={{ fontWeight: 700, fontSize: "1.125rem", letterSpacing: "0.01em" }}
      >
        Symphony
      </Typography>
    </Box>
  );
}
