"use client";

import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { useState } from "react";

const navbarIconSx = {
  color: "common.white",
  "&:hover": {
    backgroundColor: "rgba(255, 255, 255, 0.12)",
  },
  "&:focus-visible": {
    outline: "2px solid #ffffff",
    outlineOffset: 2,
  },
} as const;

export function ProfileMenu() {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const open = Boolean(anchorEl);

  const closeMenu = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Tooltip title="Account">
        <IconButton
          aria-label="Open account menu"
          aria-controls={open ? "account-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={(event) => setAnchorEl(event.currentTarget)}
          sx={navbarIconSx}
        >
          <Avatar
            sx={{
              width: 36,
              height: 36,
              bgcolor: "rgba(255, 255, 255, 0.18)",
              color: "common.white",
            }}
          >
            <PersonOutlineOutlinedIcon />
          </Avatar>
        </IconButton>
      </Tooltip>
      <Menu
        id="account-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={closeMenu}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <MenuItem component={Link} href="/account/profile" onClick={closeMenu}>
          Profile
        </MenuItem>
        <MenuItem component={Link} href="/account/settings" onClick={closeMenu}>
          Account Settings
        </MenuItem>
        <Divider />
        <MenuItem disabled>Logout</MenuItem>
        <Typography
          variant="caption"
          color="text.secondary"
          sx={{ display: "block", px: 2, pt: 0.5, pb: 1.25, maxWidth: 260 }}
        >
          Sign-out is unavailable until authentication is configured.
        </Typography>
      </Menu>
    </>
  );
}
