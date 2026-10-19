"use client";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Suspense, useCallback, useState } from "react";
import { DashboardFooter } from "@/components/layout/DashboardFooter";
import { Sidebar } from "@/components/layout/Sidebar";
import { SidebarFallback } from "@/components/layout/SidebarFallback";
import { TopNavbar } from "@/components/layout/TopNavbar";
import { layout } from "@/theme/theme";
import type { ReactNode } from "react";

export function AppShell({ children }: { children: ReactNode }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeMobile = useCallback(() => setMobileOpen(false), []);
  const openMobile = useCallback(() => setMobileOpen(true), []);

  return (
    <Box sx={{ display: "flex", minHeight: "100vh", bgcolor: "background.default" }}>
      <Button
        href="#main-content"
        variant="contained"
        size="small"
        sx={{
          position: "absolute",
          left: 16,
          top: 8,
          zIndex: (muiTheme) => muiTheme.zIndex.tooltip + 1,
          transform: "translateY(-160%)",
          "&:focus": {
            transform: "none",
          },
        }}
      >
        Skip to content
      </Button>
      <TopNavbar onOpenSidebar={openMobile} />
      <Box
        sx={{
          display: "flex",
          flexGrow: 1,
          pt: `${layout.navbarHeight}px`,
          minWidth: 0,
        }}
      >
        <Suspense fallback={<SidebarFallback />}>
          <Sidebar mobileOpen={mobileOpen} onMobileClose={closeMobile} />
        </Suspense>
        <Box
          component="main"
          id="main-content"
          tabIndex={-1}
          sx={{
            flexGrow: 1,
            minWidth: 0,
            width: "100%",
            minHeight: `calc(100vh - ${layout.navbarHeight}px)`,
            display: "flex",
            flexDirection: "column",
            px: { xs: 2, sm: 3 },
            py: { xs: 2.5, sm: 3.5 },
            "&:focus": {
              outline: "none",
            },
          }}
        >
          <Box sx={{ flexGrow: 1 }}>{children}</Box>
          <DashboardFooter />
        </Box>
      </Box>
    </Box>
  );
}
