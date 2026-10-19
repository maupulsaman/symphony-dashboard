"use client";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Tooltip,
  type ChartOptions,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { transactionVolumeByDay } from "@/data/dashboardStats";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend);

export function TransactionVolumeChart() {
  const theme = useTheme();
  const options: ChartOptions<"line"> = {
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
    scales: {
      x: {
        grid: { display: false },
        ticks: { color: theme.palette.text.secondary },
      },
      y: {
        beginAtZero: true,
        ticks: {
          color: theme.palette.text.secondary,
          callback: (value) => Number(value).toLocaleString("en-US"),
        },
      },
    },
  };

  return (
    <Card>
      <CardContent sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <Typography component="h2" variant="subtitle1">
          Transaction volume by day
        </Typography>
        <Box
          role="img"
          aria-label="Transaction volume by day for success amount and failed amount"
          sx={{ height: 320 }}
        >
          <Line
            data={{
              labels: transactionVolumeByDay.labels,
              datasets: [
                {
                  label: "Success amount",
                  data: transactionVolumeByDay.successAmount,
                  borderColor: theme.palette.success.main,
                  backgroundColor: theme.palette.success.main,
                  pointRadius: 3,
                  borderWidth: 2,
                  tension: 0.3,
                },
                {
                  label: "Failed amount",
                  data: transactionVolumeByDay.failedAmount,
                  borderColor: theme.palette.error.main,
                  backgroundColor: theme.palette.error.main,
                  pointRadius: 3,
                  borderWidth: 2,
                  tension: 0.3,
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
