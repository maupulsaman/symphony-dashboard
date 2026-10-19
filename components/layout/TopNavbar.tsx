"use client";

import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import { Logo } from "@/components/brand/Logo";
import { NotificationMenu } from "@/components/layout/NotificationMenu";
import { ProfileMenu } from "@/components/profile/ProfileMenu";
import { layout } from "@/theme/theme";

interface TopNavbarProps {
  onOpenSidebar: () => void;
}

export function TopNavbar({ onOpenSidebar }: TopNavbarProps) {
  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        height: layout.navbarHeight,
        boxShadow: "inset 0 -1px 0 rgba(0, 0, 0, 0.15)",
      }}
    >
      <Toolbar
        sx={{
          height: layout.navbarHeight,
          px: { xs: 1.5, sm: 2.5 },
          gap: 1,
        }}
      >
        <IconButton
          color="inherit"
          aria-label="Open navigation menu"
          onClick={onOpenSidebar}
          sx={{
            display: { xs: "inline-flex", md: "none" },
            color: "common.white",
            "&:hover": {
              backgroundColor: "rgba(255, 255, 255, 0.12)",
            },
            "&:focus-visible": {
              outline: "2px solid #ffffff",
              outlineOffset: 2,
            },
          }}
        >
          <MenuIcon />
        </IconButton>
        <Logo />
        <Box sx={{ flexGrow: 1 }} />
        <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
          <NotificationMenu />
          <ProfileMenu />
        </Box>
      </Toolbar>
    </AppBar>
  );
}
