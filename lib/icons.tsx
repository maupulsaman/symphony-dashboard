import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined";
import AssessmentOutlinedIcon from "@mui/icons-material/AssessmentOutlined";
import CampaignOutlinedIcon from "@mui/icons-material/CampaignOutlined";
import FolderOutlinedIcon from "@mui/icons-material/FolderOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import ManageAccountsOutlinedIcon from "@mui/icons-material/ManageAccountsOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import ReceiptLongOutlinedIcon from "@mui/icons-material/ReceiptLongOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import SwapHorizOutlinedIcon from "@mui/icons-material/SwapHorizOutlined";
import type { SvgIconProps } from "@mui/material/SvgIcon";
import { createElement, type ComponentType } from "react";

export type AppIcon = ComponentType<SvgIconProps>;

const packageIcons: Record<string, AppIcon> = {
  customers: PeopleAltOutlinedIcon,
  billers: ReceiptLongOutlinedIcon,
  branches: AccountBalanceOutlinedIcon,
  merchants: StorefrontOutlinedIcon,
  notifications: CampaignOutlinedIcon,
  products: Inventory2OutlinedIcon,
  reports: AssessmentOutlinedIcon,
  settings: SettingsOutlinedIcon,
  transactions: SwapHorizOutlinedIcon,
  users: ManageAccountsOutlinedIcon,
};

export function getPackageIcon(packageName: string): AppIcon {
  return packageIcons[packageName.toLowerCase()] ?? FolderOutlinedIcon;
}

export function PackageIcon({
  packageName,
  ...props
}: { packageName: string } & SvgIconProps) {
  return createElement(getPackageIcon(packageName), props);
}
