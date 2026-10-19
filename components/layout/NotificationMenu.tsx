"use client";

import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import { useState } from "react";

export function NotificationMenu() {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const open = Boolean(anchorEl);

  return (
    <>
      <Tooltip title="Notifications">
        <IconButton
          aria-label="Open notifications"
          aria-controls={open ? "notification-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={(event) => setAnchorEl(event.currentTarget)}
          sx={{
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
          <NotificationsNoneIcon />
        </IconButton>
      </Tooltip>
      <Menu
        id="notification-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={() => setAnchorEl(null)}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Typography component="div" sx={{ px: 2, py: 1.5, width: 260 }}>
          <Typography variant="subtitle2" component="p">
            Notifications
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
            No notifications.
          </Typography>
        </Typography>
      </Menu>
    </>
  );
}
