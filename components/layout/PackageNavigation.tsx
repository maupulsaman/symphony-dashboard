"use client";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { PackageIcon } from "@/lib/icons";
import { packageDashboardRoute } from "@/lib/navigation";
import type { NavigationPackage } from "@/types/navigation";

interface PackageNavigationProps {
  packages: NavigationPackage[];
  selectedPackageId: number | null;
  onNavigate: () => void;
  onBack: () => void;
}

export function PackageNavigation({
  packages,
  selectedPackageId,
  onNavigate,
  onBack,
}: PackageNavigationProps) {
  const visiblePackages = selectedPackageId
    ? packages.filter((packageItem) => packageItem.packageId === selectedPackageId)
    : packages;

  return (
    <List aria-label="Packages" disablePadding>
      {visiblePackages.map((packageItem) => {
        const expanded = packageItem.packageId === selectedPackageId;

        if (expanded) {
          return (
            <ListItem key={packageItem.packageId} disablePadding>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1.5,
                  width: "100%",
                  px: 1.5,
                  py: 1.25,
                  borderRadius: 2,
                  color: "primary.main",
                  bgcolor: "rgba(0, 79, 159, 0.12)",
                }}
              >
                <IconButton
                  aria-label="Back to all packages"
                  onClick={onBack}
                  size="small"
                  sx={{
                    color: "primary.main",
                    p: 0.5,
                    "&:hover": {
                      bgcolor: "rgba(0, 79, 159, 0.12)",
                    },
                  }}
                >
                  <ArrowBackIcon fontSize="small" />
                </IconButton>
                <Typography component="h2" sx={{ flexGrow: 1, fontWeight: 700 }}>
                  {packageItem.displayName}
                </Typography>
                <ExpandMoreIcon fontSize="small" />
              </Box>
            </ListItem>
          );
        }

        return (
          <ListItem key={packageItem.packageId} disablePadding sx={{ mb: 0.5 }}>
            <ListItemButton
              component={Link}
              href={packageDashboardRoute(packageItem.packageId)}
              onClick={onNavigate}
              sx={{
                color: "text.primary",
                py: 1.25,
                "&:hover": {
                  bgcolor: "rgba(0, 79, 159, 0.06)",
                },
                "& .MuiListItemIcon-root": {
                  color: "text.secondary",
                },
                "&:hover .MuiListItemIcon-root": {
                  color: "primary.main",
                },
              }}
            >
              <ListItemIcon sx={{ minWidth: 40 }}>
                <PackageIcon packageName={packageItem.name} fontSize="small" />
              </ListItemIcon>
              <ListItemText
                primary={packageItem.displayName}
                slotProps={{
                  primary: { sx: { fontWeight: 650, fontSize: "0.95rem" } },
                }}
              />
              <ChevronRightIcon fontSize="small" sx={{ color: "text.secondary" }} />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
}
