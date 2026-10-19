"use client";

import Button from "@mui/material/Button";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { useEffect, useState } from "react";
import { findModuleById, type ResolvedModule } from "@/lib/navigation";
import { readRecentModuleIds, RECENT_MODULES_EVENT } from "@/lib/recentModules";

export function RecentModules() {
  const [moduleIds, setModuleIds] = useState<string[] | null>(null);

  useEffect(() => {
    const update = () => {
      setModuleIds(readRecentModuleIds());
    };

    update();
    window.addEventListener(RECENT_MODULES_EVENT, update);
    window.addEventListener("storage", update);

    return () => {
      window.removeEventListener(RECENT_MODULES_EVENT, update);
      window.removeEventListener("storage", update);
    };
  }, []);

  const recentModules = (moduleIds ?? [])
    .map((moduleId) => findModuleById(moduleId))
    .filter((item): item is ResolvedModule => item !== null);

  return (
    <Stack spacing={1.5} component="section" aria-labelledby="recent-modules-heading">
      <Typography id="recent-modules-heading" variant="h6" component="h2">
        Recently opened
      </Typography>
      {moduleIds === null ? (
        <Skeleton variant="rounded" height={72} />
      ) : recentModules.length === 0 ? (
        <Typography variant="body2" color="text.secondary">
          Modules you open will be listed here on this browser.
        </Typography>
      ) : (
        <Stack spacing={1}>
          {recentModules.map(({ moduleItem, packageItem }) => (
            <Button
              key={moduleItem.moduleId}
              component={Link}
              href={moduleItem.route}
              variant="outlined"
              sx={{
                justifyContent: "space-between",
                px: 2,
                py: 1.25,
                textAlign: "left",
              }}
            >
              <span>{moduleItem.displayName}</span>
              <Typography component="span" variant="caption" color="text.secondary">
                {packageItem.displayName}
              </Typography>
            </Button>
          ))}
        </Stack>
      )}
    </Stack>
  );
}
