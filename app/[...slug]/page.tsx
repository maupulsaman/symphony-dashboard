import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ModulePage } from "@/components/modules/ModulePage";
import {
  findModuleByRoute,
  packagesModules,
  routeToSlug,
  slugToRoute,
} from "@/lib/navigation";

interface ModuleRouteProps {
  params: Promise<{ slug: string[] }>;
  searchParams: Promise<{ packageId?: string | string[] }>;
}

export const instant = false;

export function generateStaticParams() {
  const seenRoutes = new Set<string>();

  return packagesModules.flatMap((packageItem) =>
    packageItem.modules.flatMap((moduleItem) => {
      if (seenRoutes.has(moduleItem.route)) {
        return [];
      }
      seenRoutes.add(moduleItem.route);
      return [{ slug: routeToSlug(moduleItem.route) }];
    }),
  );
}

function readPackageId(packageId: string | string[] | undefined): string | null {
  if (Array.isArray(packageId)) {
    return packageId[0] ?? null;
  }
  return packageId ?? null;
}

export async function generateMetadata({ params }: ModuleRouteProps): Promise<Metadata> {
  const { slug } = await params;
  const match = findModuleByRoute(slugToRoute(slug));

  return {
    title: match?.moduleItem.displayName ?? "Module",
  };
}

export default async function ModuleRoutePage({
  params,
  searchParams,
}: ModuleRouteProps) {
  const [{ slug }, query] = await Promise.all([params, searchParams]);
  const match = findModuleByRoute(slugToRoute(slug), readPackageId(query.packageId));

  if (!match) {
    notFound();
  }

  return <ModulePage packageItem={match.packageItem} moduleItem={match.moduleItem} />;
}

