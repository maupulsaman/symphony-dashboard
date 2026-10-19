import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { DashboardStatCards } from "@/components/dashboard/DashboardStatCards";
import { RegistrationPieCharts } from "@/components/dashboard/RegistrationPieCharts";
import { TransactionVolumeChart } from "@/components/dashboard/TransactionVolumeChart";

export function DefaultDashboard() {
  return (
    <Stack spacing={3}>
      <Typography variant="h4" component="h1">
        Dashboard
      </Typography>
      <DashboardStatCards />
      <TransactionVolumeChart />
      <RegistrationPieCharts />
    </Stack>
  );
}
