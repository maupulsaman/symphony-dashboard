export const RECENT_MODULES_EVENT = "symphony:recent-modules";
const STORAGE_KEY = "symphony.recentModules";
const MAX_RECENT_MODULES = 6;

export function readRecentModuleIds(): string[] {
  if (typeof window === "undefined") {
    return [];
  }

  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return [];
    }

    const parsed: unknown = JSON.parse(raw);
    if (!Array.isArray(parsed)) {
      return [];
    }

    return parsed.filter((item): item is string => typeof item === "string");
  } catch {
    return [];
  }
}

export function rememberModuleId(moduleId: string) {
  if (typeof window === "undefined") {
    return;
  }

  const nextIds = [
    moduleId,
    ...readRecentModuleIds().filter((id) => id !== moduleId),
  ].slice(0, MAX_RECENT_MODULES);

  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(nextIds));
  window.dispatchEvent(new Event(RECENT_MODULES_EVENT));
}
