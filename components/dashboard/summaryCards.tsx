import AssignmentIndOutlinedIcon from "@mui/icons-material/AssignmentIndOutlined";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import HourglassEmptyOutlinedIcon from "@mui/icons-material/HourglassEmptyOutlined";
import MarkEmailUnreadOutlinedIcon from "@mui/icons-material/MarkEmailUnreadOutlined";
import TagOutlinedIcon from "@mui/icons-material/TagOutlined";
import ViewModuleOutlinedIcon from "@mui/icons-material/ViewModuleOutlined";
import Box from "@mui/material/Box";
import type { ReactNode } from "react";
import type { ModuleCountSummary } from "@/lib/counts";
import type { AppIcon } from "@/lib/icons";

export interface SummaryCardModel {
  key: string;
  label: string;
  value: number;
  detail: string;
  icon: AppIcon;
}

export function buildSummaryCards(summary: ModuleCountSummary): SummaryCardModel[] {
  const cards: SummaryCardModel[] = [
    {
      key: "modules",
      label: "Modules",
      value: summary.moduleCount,
      detail: "Available in this catalog view",
      icon: ViewModuleOutlinedIcon,
    },
  ];

  if (summary.implemented > 0) {
    cards.push({
      key: "implemented",
      label: "Registered workspaces",
      value: summary.implemented,
      detail: "Modules marked as implemented",
      icon: CheckCircleOutlinedIcon,
    });
  }

  if (summary.totalCount > 0) {
    cards.push({
      key: "total",
      label: "Catalog total",
      value: summary.totalCount,
      detail: "Sum of module count values",
      icon: TagOutlinedIcon,
    });
  }

  if (summary.pending > 0) {
    cards.push({
      key: "pending",
      label: "Pending count",
      value: summary.pending,
      detail: "Sum of pending count values",
      icon: HourglassEmptyOutlinedIcon,
    });
  }

  if (summary.assigned > 0) {
    cards.push({
      key: "assigned",
      label: "Assigned to me",
      value: summary.assigned,
      detail: "Sum of assigned-to-me values",
      icon: AssignmentIndOutlinedIcon,
    });
  }

  if (summary.notify > 0) {
    cards.push({
      key: "notify",
      label: "Notify to",
      value: summary.notify,
      detail: "Sum of notify-to values",
      icon: MarkEmailUnreadOutlinedIcon,
    });
  }

  return cards;
}

export function SummaryGrid({ children }: { children: ReactNode }) {
  return (
    <Box
      sx={{
        display: "grid",
        gap: 2,
        gridTemplateColumns: {
          xs: "1fr",
          sm: "repeat(2, minmax(0, 1fr))",
          lg: "repeat(4, minmax(0, 1fr))",
        },
      }}
    >
      {children}
    </Box>
  );
}
