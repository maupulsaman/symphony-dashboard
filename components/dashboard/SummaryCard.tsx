import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { createElement } from "react";
import type { AppIcon } from "@/lib/icons";

interface SummaryCardProps {
  label: string;
  value: number;
  detail: string;
  icon: AppIcon;
}

export function SummaryCard({ label, value, detail, icon }: SummaryCardProps) {
  return (
    <Paper
      variant="outlined"
      sx={{ p: 2.5, height: "100%", boxShadow: 1 }}
    >
      <Box sx={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 2 }}>
        <Box>
          <Typography variant="body2" color="text.secondary">
            {label}
          </Typography>
          <Typography variant="h5" component="p" sx={{ mt: 0.75 }}>
            {value.toLocaleString("en-US")}
          </Typography>
        </Box>
        <Box
          aria-hidden
          sx={{
            width: 40,
            height: 40,
            display: "grid",
            placeItems: "center",
            borderRadius: "50%",
            color: "primary.main",
            bgcolor: "rgba(0, 79, 159, 0.08)",
            flexShrink: 0,
          }}
        >
          {createElement(icon, { fontSize: "small" })}
        </Box>
      </Box>
      <Typography variant="caption" color="text.secondary" sx={{ display: "block", mt: 1.5 }}>
        {detail}
      </Typography>
    </Paper>
  );
}
