"use client";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import { ArcElement, Chart as ChartJS, Legend, Tooltip, type ChartOptions } from "chart.js";
import { Pie } from "react-chartjs-2";
import { registrationVerifications, type RegistrationVerification } from "@/data/dashboardStats";

ChartJS.register(ArcElement, Tooltip, Legend);

export function RegistrationPieCharts() {
  const theme = useTheme();
  const options: ChartOptions<"pie"> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          color: theme.palette.text.primary,
          boxWidth: 12,
          padding: 16,
        },
      },
    },
  };

  return (
    <Box
      sx={{
        display: "grid",
        gap: 2,
        gridTemplateColumns: {
          xs: "1fr",
          md: "repeat(2, minmax(0, 1fr))",
        },
      }}
    >
      {registrationVerifications.map((item) => (
        <VerificationPie
          key={item.id}
          item={item}
          pendingColor={theme.palette.warning.main}
          registeredColor={theme.palette.success.main}
          options={options}
        />
      ))}
    </Box>
  );
}

function VerificationPie({
  item,
  pendingColor,
  registeredColor,
  options,
}: {
  item: RegistrationVerification;
  pendingColor: string;
  registeredColor: string;
  options: ChartOptions<"pie">;
}) {
  const pendingLabel = `Pending amount: ${item.pending.toLocaleString("en-US")}`;
  const registeredLabel = `Registered: ${item.registered.toLocaleString("en-US")}`;

  return (
    <Card sx={{ height: "100%" }}>
      <CardContent sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <Typography component="h2" variant="subtitle1">
          {item.label}
        </Typography>
        <Box role="img" aria-label={`${item.label}. ${pendingLabel}. ${registeredLabel}.`} sx={{ height: 240 }}>
          <Pie
            data={{
              labels: [pendingLabel, registeredLabel],
              datasets: [
                {
                  data: [item.pending, item.registered],
                  backgroundColor: [pendingColor, registeredColor],
                  borderWidth: 0,
                },
              ],
            }}
            options={options}
          />
        </Box>
      </CardContent>
    </Card>
  );
}
