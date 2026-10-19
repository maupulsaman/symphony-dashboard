import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { AppShell } from "@/components/layout/AppShell";
import { AppThemeProvider } from "./theme-provider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Symphony Admin",
    template: "%s · Symphony Admin",
  },
  description: "Symphony administration dashboard for packages and modules.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={geistSans.variable}>
      <body>
        <AppThemeProvider>
          <AppShell>{children}</AppShell>
        </AppThemeProvider>
      </body>
    </html>
  );
}
