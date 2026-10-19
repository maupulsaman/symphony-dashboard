import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import type { ReactNode } from "react";

export function InfoPage({ title, children }: { title: string; children: ReactNode }) {
  return (
    <Stack spacing={2.5}>
      <Typography variant="h4" component="h1">
        {title}
      </Typography>
      <Paper variant="outlined" sx={{ p: { xs: 2.5, sm: 3 } }}>
        <Typography color="text.secondary">{children}</Typography>
      </Paper>
    </Stack>
  );
}
