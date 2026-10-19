import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export function DashboardFooter() {
  return (
    <Box
      component="footer"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        gap: 1.5,
        mt: 4,
        pt: 2.5,
        borderTop: "1px solid",
        borderColor: "divider",
      }}
    >
      <Box
        component="img"
        src="/symphony-footer-logo.png"
        alt=""
        sx={{ height: 20, width: "auto", display: "block" }}
      />
      <Typography variant="body2" color="text.secondary">
        2019-2026, All Rights Reserved
      </Typography>
    </Box>
  );
}
