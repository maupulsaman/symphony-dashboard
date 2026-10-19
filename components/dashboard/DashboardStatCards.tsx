"use client";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Filler,
  LinearScale,
  LineElement,
  PointElement,
  Tooltip,
  type ChartOptions,
} from "chart.js";
import { Bar, Line } from "react-chartjs-2";
import { dashboardStats, type DashboardStat } from "@/data/dashboardStats";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Tooltip, Filler);

const lineOptions: ChartOptions<"line"> = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { display: false },
    tooltip: { enabled: true },
  },
  scales: {
    x: { display: false },
    y: { display: false, beginAtZero: true },
  },
};

const barOptions: ChartOptions<"bar"> = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { display: false },
    tooltip: { enabled: true },
  },
  scales: {
    x: { display: false },
    y: { display: false, beginAtZero: true },
  },
};

export function DashboardStatCards() {
  const theme = useTheme();
  const tones = {
    primary: theme.palette.primary.main,
    success: theme.palette.success.main,
    error: theme.palette.error.main,
  };

  return (
    <Box
      sx={{
        display: "grid",
        gap: 2,
        gridTemplateColumns: {
          xs: "1fr",
          md: "repeat(3, minmax(0, 1fr))",
        },
      }}
    >
      {dashboardStats.map((stat) => (
        <StatCard key={stat.id} stat={stat} color={tones[stat.tone]} />
      ))}
    </Box>
  );
}

function StatCard({ stat, color }: { stat: DashboardStat; color: string }) {
  const dataset = {
    labels: stat.labels,
    datasets: [
      {
        label: stat.label,
        data: stat.series,
        borderColor: color,
        backgroundColor: stat.chart === "line" ? `${color}22` : color,
        pointRadius: 0,
        borderWidth: 2,
        fill: stat.chart === "line",
        tension: 0.35,
      },
    ],
  };

  return (
    <Card sx={{ height: "100%" }}>
      <CardContent sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <Box>
          <Typography component="h2" variant="subtitle1">
            {stat.label}
          </Typography>
          <Typography variant="h4" component="p" sx={{ mt: 0.75 }}>
            {stat.value.toLocaleString("en-US")}
          </Typography>
        </Box>
        <Box role="img" aria-label={`${stat.label} trend`} sx={{ height: 112 }}>
          {stat.chart === "line" ? (
            <Line data={dataset} options={lineOptions} />
          ) : (
            <Bar data={dataset} options={barOptions} />
          )}
        </Box>
      </CardContent>
    </Card>
  );
}
