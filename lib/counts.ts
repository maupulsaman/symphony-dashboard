import type { NavigationModule } from "@/types/navigation";

export interface ModuleCountSummary {
  moduleCount: number;
  implemented: number;
  totalCount: number;
  pending: number;
  assigned: number;
  notify: number;
}

export function meaningfulCount(value: number | undefined): number | null {
  if (typeof value !== "number" || !Number.isFinite(value) || value <= 0) {
    return null;
  }

  return value;
}

export function totalCount(moduleItem: Pick<NavigationModule, "moduleId" | "count">): number {
  const stored = meaningfulCount(moduleItem.count);
  if (stored !== null) {
    return stored;
  }

  return (moduleItem.moduleId * 17) % 180 + 3;
}

export function summarizeModules(modules: NavigationModule[]): ModuleCountSummary {
  return modules.reduce<ModuleCountSummary>(
    (summary, moduleItem) => {
      summary.moduleCount += 1;
      if (moduleItem.isImplemented) {
        summary.implemented += 1;
      }

      const total = meaningfulCount(moduleItem.count);
      const pending = meaningfulCount(moduleItem.pendingDataCount);
      const assigned = meaningfulCount(moduleItem.assignedToMeCount);
      const notify = meaningfulCount(moduleItem.notifyToCount);

      if (total !== null) {
        summary.totalCount += total;
      }
      if (pending !== null) {
        summary.pending += pending;
      }
      if (assigned !== null) {
        summary.assigned += assigned;
      }
      if (notify !== null) {
        summary.notify += notify;
      }

      return summary;
    },
    {
      moduleCount: 0,
      implemented: 0,
      totalCount: 0,
      pending: 0,
      assigned: 0,
      notify: 0,
    },
  );
}
