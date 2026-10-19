import type { Metadata } from "next";
import { InfoPage } from "@/components/account/InfoPage";

export const metadata: Metadata = {
  title: "Profile",
};

export default function ProfilePage() {
  return (
    <InfoPage title="Profile">
      Profile details are not available because this dashboard does not include an
      authentication flow.
    </InfoPage>
  );
}
