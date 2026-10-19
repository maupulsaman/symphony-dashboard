export interface DashboardStat {
  id: string;
  label: string;
  value: number;
  tone: "primary" | "success" | "error";
  chart: "line" | "bar";
  labels: string[];
  series: number[];
}

const weekDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

export const dashboardStats: DashboardStat[] = [
  {
    id: "total-registrations",
    label: "Total user registrations",
    value: 12486,
    tone: "primary",
    chart: "line",
    labels: weekDays,
    series: [148, 176, 162, 191, 184, 210, 198],
  },
  {
    id: "successful-logins",
    label: "Successful logins today",
    value: 342,
    tone: "success",
    chart: "bar",
    labels: ["6a", "8a", "10a", "12p", "2p", "4p", "6p"],
    series: [18, 42, 67, 54, 61, 58, 42],
  },
  {
    id: "failed-registrations",
    label: "Failed registrations today",
    value: 18,
    tone: "error",
    chart: "bar",
    labels: ["6a", "8a", "10a", "12p", "2p", "4p", "6p"],
    series: [1, 3, 2, 4, 2, 3, 3],
  },
];

export interface RegistrationVerification {
  id: string;
  label: string;
  pending: number;
  registered: number;
}

export const registrationVerifications: RegistrationVerification[] = [
  {
    id: "mobile-banking",
    label: "Mobile banking customer registration",
    pending: 186,
    registered: 942,
  },
  {
    id: "internet-banking",
    label: "Internet banking customer registration",
    pending: 124,
    registered: 1108,
  },
];

export const transactionVolumeByDay = {
  labels: ["13 Oct", "14 Oct", "15 Oct", "16 Oct", "17 Oct", "18 Oct", "19 Oct"],
  successAmount: [1284500, 1412200, 1367800, 1520400, 1498600, 1184300, 980200],
  failedAmount: [18400, 22100, 15600, 19800, 17300, 14200, 9100],
};
