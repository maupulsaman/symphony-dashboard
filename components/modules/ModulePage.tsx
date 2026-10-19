"use client";

import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { ModuleRecordTable } from "@/components/modules/ModuleRecordTable";
import type { NavigationModule, NavigationPackage } from "@/types/navigation";

interface ModulePageProps {
  packageItem: NavigationPackage;
  moduleItem: NavigationModule;
}

export function ModulePage({ moduleItem }: ModulePageProps) {
  return (
    <Stack spacing={2.5}>
      <Typography variant="h4" component="h1">
        {moduleItem.displayName}
      </Typography>
      <ModuleRecordTable />
    </Stack>
  );
}
