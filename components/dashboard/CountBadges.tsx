import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import { meaningfulCount, totalCount } from "@/lib/counts";
import type { NavigationModule } from "@/types/navigation";

export function CountBadges({ moduleItem }: { moduleItem: NavigationModule }) {
  const total = totalCount(moduleItem);
  const pending = meaningfulCount(moduleItem.pendingDataCount);
  const assigned = meaningfulCount(moduleItem.assignedToMeCount);
  const notify = meaningfulCount(moduleItem.notifyToCount);

  return (
    <Box
      aria-label={`${moduleItem.displayName} catalog counts`}
      sx={{ display: "flex", flexWrap: "wrap", gap: 0.75 }}
    >
      <Chip
        size="small"
        variant="outlined"
        label={`Total ${total.toLocaleString("en-US")}`}
        aria-label={`Total count ${total}`}
      />
      {pending !== null ? (
        <Chip
          size="small"
          color="primary"
          variant="outlined"
          label={`Pending ${pending.toLocaleString("en-US")}`}
          aria-label={`Pending count ${pending}`}
        />
      ) : null}
      {assigned !== null ? (
        <Chip
          size="small"
          label={`Assigned to me ${assigned.toLocaleString("en-US")}`}
          aria-label={`Assigned to me ${assigned}`}
          sx={{
            bgcolor: "rgba(0, 79, 159, 0.08)",
            color: "primary.main",
          }}
        />
      ) : null}
      {notify !== null ? (
        <Chip
          size="small"
          variant="outlined"
          label={`Notify to ${notify.toLocaleString("en-US")}`}
          aria-label={`Notify to ${notify}`}
          sx={{ borderColor: "text.secondary", color: "text.primary" }}
        />
      ) : null}
    </Box>
  );
}
