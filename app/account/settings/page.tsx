import type { Metadata } from "next";
import { InfoPage } from "@/components/account/InfoPage";

export const metadata: Metadata = {
  title: "Account Settings",
};

export default function AccountSettingsPage() {
  return (
    <InfoPage title="Account Settings">
      Account settings will appear here when an identity provider is connected.
      Sign-out is unavailable until authentication is configured.
    </InfoPage>
  );
}
