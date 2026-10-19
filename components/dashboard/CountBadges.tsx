import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import { alpha } from "@mui/material/styles";
import { meaningfulCount, totalCount } from "@/lib/counts";
import type { NavigationModule } from "@/types/navigation";

function CountLabel({ text, amount }: { text: string; amount: number }) {
  return (
    <>
      {text}{" "}
      <Box component="span" sx={{ fontWeight: 700, fontSize: "14px" }}>
        {amount.toLocaleString("en-US")}
      </Box>
    </>
  );
}

const countChipPadding = {
  fontWeight: 400,
  "& .MuiChip-label": {
    px: "10px",
  },
} as const;

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
        label={<CountLabel text="Total" amount={total} />}
        aria-label={`Total count ${total}`}
        sx={(theme) => ({
          ...countChipPadding,
          bgcolor: alpha(theme.palette.primary.main, 0.12),
          color: theme.palette.primary.dark,
        })}
      />
      {pending !== null ? (
        <Chip
          size="small"
          label={<CountLabel text="Pending" amount={pending} />}
          aria-label={`Pending count ${pending}`}
          sx={(theme) => ({
            ...countChipPadding,
            bgcolor: alpha(theme.palette.warning.main, 0.22),
            color: theme.palette.warning.dark,
          })}
        />
      ) : null}
      {assigned !== null ? (
        <Chip
          size="small"
          label={<CountLabel text="Assigned to me" amount={assigned} />}
          aria-label={`Assigned to me ${assigned}`}
          sx={(theme) => ({
            ...countChipPadding,
            bgcolor: alpha(theme.palette.success.main, 0.16),
            color: theme.palette.success.dark,
          })}
        />
      ) : null}
      {notify !== null ? (
        <Chip
          size="small"
          label={<CountLabel text="Notify to" amount={notify} />}
          aria-label={`Notify to ${notify}`}
          sx={(theme) => ({
            ...countChipPadding,
            bgcolor: alpha(theme.palette.secondary.main, 0.14),
            color: theme.palette.secondary.dark,
          })}
        />
      ) : null}
    </Box>
  );
}
