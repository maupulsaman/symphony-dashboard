import type { Metadata } from "next";
import { DefaultDashboard } from "@/components/dashboard/DefaultDashboard";

export const metadata: Metadata = {
  title: "Dashboard",
};

export default function HomePage() {
  return <DefaultDashboard />;
}
