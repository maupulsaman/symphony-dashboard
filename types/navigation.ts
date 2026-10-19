export interface NavigationModule {
  moduleId: number;
  name: string;
  displayName: string;
  description: string;
  route: string;
  package_name: string;
  isImplemented: boolean;
  isMakerCheckerImplemented?: boolean;
  count?: number;
  pendingDataCount?: number;
  assignedToMeCount?: number;
  notifyToCount?: number;
}

export interface NavigationPackage {
  packageId: number;
  name: string;
  displayName: string;
  description: string;
  modules: NavigationModule[];
}
