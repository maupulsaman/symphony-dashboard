import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CountBadges } from "@/components/dashboard/CountBadges";
import { PackageIcon } from "@/lib/icons";
import type { NavigationModule, NavigationPackage } from "@/types/navigation";

export function ModuleCard({
  moduleItem,
  packageItem,
}: {
  moduleItem: NavigationModule;
  packageItem: NavigationPackage;
}) {
  return (
    <Card sx={{ height: "100%" }}>
      <CardContent
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          gap: 1.5,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 1.25 }}>
          <Box
            aria-hidden
            sx={{
              width: 36,
              height: 36,
              display: "grid",
              placeItems: "center",
              borderRadius: 1,
              color: "primary.main",
              bgcolor: "rgba(0, 79, 159, 0.08)",
              flexShrink: 0,
            }}
          >
            <PackageIcon packageName={packageItem.name} fontSize="small" />
          </Box>
          <Typography component="h3" variant="subtitle1">
            {moduleItem.displayName}
          </Typography>
        </Box>
        <CountBadges moduleItem={moduleItem} />
      </CardContent>
    </Card>
  );
}
