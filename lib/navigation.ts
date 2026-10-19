import { packagesModules } from "@/data/packagesModules";
import type { NavigationModule, NavigationPackage } from "@/types/navigation";

export interface ResolvedModule {
  packageItem: NavigationPackage;
  moduleItem: NavigationModule;
}

export interface ResolvedNavigation {
  selectedPackage: NavigationPackage | null;
  activeModule: NavigationModule | null;
}

const PACKAGE_DASHBOARD_PREFIX = "/packages/";

function assertCatalog(packages: NavigationPackage[]) {
  const packageIds = new Set<string>();

  for (const packageItem of packages) {
    const packageKey = String(packageItem.packageId);
    if (packageIds.has(packageKey)) {
      throw new Error(`Duplicate packageId: ${packageItem.packageId}`);
    }
    packageIds.add(packageKey);

    for (const moduleItem of packageItem.modules) {
      if (!moduleItem.route.startsWith("/")) {
        throw new Error(`Module route must start with /: ${moduleItem.route}`);
      }
    }
  }
}

assertCatalog(packagesModules);

export { packagesModules };

export function packageDashboardRoute(packageId: number): string {
  return `${PACKAGE_DASHBOARD_PREFIX}${encodeURIComponent(String(packageId))}`;
}

export function moduleHref(
  packageItem: NavigationPackage,
  moduleItem: NavigationModule,
): string {
  const params = new URLSearchParams({
    packageId: String(packageItem.packageId),
  });
  return `${moduleItem.route}?${params.toString()}`;
}

export function routeToSlug(route: string): string[] {
  return route.replace(/^\//, "").split("/").filter(Boolean);
}

export function slugToRoute(slug: string[]): string {
  return `/${slug.map((segment) => decodeURIComponent(segment)).join("/")}`;
}

export function findPackageById(
  packageId: string | number,
): NavigationPackage | null {
  const packageKey = String(packageId);
  return (
    packagesModules.find((packageItem) => String(packageItem.packageId) === packageKey) ??
    null
  );
}

export function findModuleByRoute(
  route: string,
  packageId?: string | number | null,
): ResolvedModule | null {
  if (packageId !== undefined && packageId !== null && String(packageId) !== "") {
    const packageItem = findPackageById(packageId);
    const moduleItem = packageItem?.modules.find((item) => item.route === route);
    if (packageItem && moduleItem) {
      return { packageItem, moduleItem };
    }
  }

  for (const packageItem of packagesModules) {
    const moduleItem = packageItem.modules.find((item) => item.route === route);
    if (moduleItem) {
      return { packageItem, moduleItem };
    }
  }

  return null;
}

export function findModuleById(moduleId: string | number): ResolvedModule | null {
  const moduleKey = String(moduleId);
  for (const packageItem of packagesModules) {
    const moduleItem = packageItem.modules.find(
      (item) => String(item.moduleId) === moduleKey,
    );
    if (moduleItem) {
      return { packageItem, moduleItem };
    }
  }

  return null;
}

export function resolveNavigation(
  pathname: string,
  packageId?: string | null,
): ResolvedNavigation {
  const moduleMatch = findModuleByRoute(pathname, packageId);
  if (moduleMatch) {
    return {
      selectedPackage: moduleMatch.packageItem,
      activeModule: moduleMatch.moduleItem,
    };
  }

  if (pathname.startsWith(PACKAGE_DASHBOARD_PREFIX)) {
    const packageId = decodeURIComponent(
      pathname.slice(PACKAGE_DASHBOARD_PREFIX.length).split("/")[0] ?? "",
    );
    return {
      selectedPackage: packageId ? findPackageById(packageId) : null,
      activeModule: null,
    };
  }

  return { selectedPackage: null, activeModule: null };
}
