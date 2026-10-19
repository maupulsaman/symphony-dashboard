"use client";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { moduleHref } from "@/lib/navigation";
import type { NavigationPackage } from "@/types/navigation";

interface ModuleNavigationProps {
  packageItem: NavigationPackage;
  activeModuleId: number | null;
  onNavigate: () => void;
}

export function ModuleNavigation({
  packageItem,
  activeModuleId,
  onNavigate,
}: ModuleNavigationProps) {
  if (packageItem.modules.length === 0) {
    return (
      <Typography variant="body2" color="text.secondary" sx={{ px: 1.5, py: 1 }}>
        No modules are available in this package.
      </Typography>
    );
  }

  return (
    <List aria-label={`${packageItem.displayName} modules`} disablePadding>
      {packageItem.modules.map((moduleItem) => {
        const selected = moduleItem.moduleId === activeModuleId;

        return (
          <ListItem key={moduleItem.moduleId} disablePadding sx={{ mb: 0.25 }}>
            <ListItemButton
              component={Link}
              href={moduleHref(packageItem, moduleItem)}
              selected={selected}
              aria-current={selected ? "page" : undefined}
              onClick={onNavigate}
              sx={{
                pl: 5.5,
                py: 1,
                color: selected ? "primary.main" : "text.primary",
              }}
            >
              <ListItemText
                primary={moduleItem.displayName}
                slotProps={{
                  primary: {
                    sx: { fontWeight: selected ? 700 : 500, fontSize: "0.875rem" },
                  },
                }}
              />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
}
