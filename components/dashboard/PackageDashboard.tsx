"use client";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { ModuleCard } from "@/components/dashboard/ModuleCard";
import { PageHeader } from "@/components/dashboard/PageHeader";
import type { NavigationPackage } from "@/types/navigation";

export function PackageDashboard({ packageItem }: { packageItem: NavigationPackage }) {
  return (
    <Stack spacing={3}>
      <Typography variant="h4" component="h1">
        {packageItem.displayName} Dashboard
      </Typography>
      {packageItem.modules.length === 0 ? (
        <Paper variant="outlined" sx={{ p: 3 }}>
          <Typography color="text.secondary">
            No modules are available in this package.
          </Typography>
        </Paper>
      ) : (
        <Box
          sx={{
            display: "grid",
            gap: 2,
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, minmax(0, 1fr))",
              lg: "repeat(3, minmax(0, 1fr))",
            },
          }}
        >
          {packageItem.modules.map((moduleItem) => (
            <ModuleCard
              key={moduleItem.moduleId}
              moduleItem={moduleItem}
              packageItem={packageItem}
            />
          ))}
        </Box>
      )}
    </Stack>
  );
}

export function UnknownPackage({ packageId }: { packageId: string }) {
  return (
    <Stack spacing={2}>
      <PageHeader
        title="Package not found"
        description={`“${packageId}” is not in the navigation catalog.`}
      />
      <Button component={Link} href="/" variant="contained" sx={{ alignSelf: "flex-start" }}>
        Back to dashboard
      </Button>
    </Stack>
  );
}
