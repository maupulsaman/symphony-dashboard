import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

export function ContentFallback() {
  return (
    <Stack spacing={2} aria-busy="true" aria-live="polite">
      <Typography
        sx={{
          position: "absolute",
          width: 1,
          height: 1,
          padding: 0,
          margin: "-1px",
          overflow: "hidden",
          clip: "rect(0, 0, 0, 0)",
          whiteSpace: "nowrap",
          border: 0,
        }}
      >
        Loading
      </Typography>
      <Skeleton variant="rounded" width="42%" height={44} />
      <Skeleton variant="rounded" width="72%" height={24} />
      <Skeleton variant="rounded" height={88} />
      <Skeleton variant="rounded" height={180} />
    </Stack>
  );
}
