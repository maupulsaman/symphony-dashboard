import type { Metadata } from "next";
import { Suspense } from "react";
import { ContentFallback } from "@/components/dashboard/ContentFallback";
import { PackageDashboard, UnknownPackage } from "@/components/dashboard/PackageDashboard";
import { findPackageById, packagesModules } from "@/lib/navigation";

interface PackagePageProps {
  params: Promise<{ packageId: string }>;
}

export function generateStaticParams() {
  return packagesModules.map((packageItem) => ({
    packageId: String(packageItem.packageId),
  }));
}

export async function generateMetadata({ params }: PackagePageProps): Promise<Metadata> {
  const { packageId } = await params;
  const packageItem = findPackageById(decodeURIComponent(packageId));

  return {
    title: packageItem ? `${packageItem.displayName} Dashboard` : "Package",
  };
}

export default function PackagePage({ params }: PackagePageProps) {
  return (
    <Suspense fallback={<ContentFallback />}>
      <PackageContent params={params} />
    </Suspense>
  );
}

async function PackageContent({ params }: PackagePageProps) {
  const { packageId } = await params;
  const packageItem = findPackageById(decodeURIComponent(packageId));

  if (!packageItem) {
    return <UnknownPackage packageId={packageId} />;
  }

  return <PackageDashboard packageItem={packageItem} />;
}
