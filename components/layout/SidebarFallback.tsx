"use client";

import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
import { layout } from "@/theme/theme";

export function SidebarFallback() {
  return (
    <Box
      aria-hidden
      sx={{
        display: { xs: "none", md: "block" },
        width: layout.sidebarWidth,
        flexShrink: 0,
        px: 2,
        pt: 3,
      }}
    >
      <Skeleton variant="rounded" height={36} sx={{ mb: 1.5 }} />
      <Skeleton variant="rounded" height={44} sx={{ mb: 1 }} />
      <Skeleton variant="rounded" height={44} sx={{ mb: 1 }} />
      <Skeleton variant="rounded" height={44} sx={{ mb: 1 }} />
      <Skeleton variant="rounded" height={44} />
    </Box>
  );
}
