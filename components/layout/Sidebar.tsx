"use client";

import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import Drawer from "@mui/material/Drawer";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef } from "react";
import { ModuleNavigation } from "@/components/layout/ModuleNavigation";
import { PackageNavigation } from "@/components/layout/PackageNavigation";
import { rememberModuleId } from "@/lib/recentModules";
import { packagesModules, resolveNavigation } from "@/lib/navigation";
import { layout } from "@/theme/theme";

interface SidebarProps {
  mobileOpen: boolean;
  onMobileClose: () => void;
}

const drawerPaperSx = {
  width: layout.sidebarWidth,
  boxSizing: "border-box",
  top: layout.navbarHeight,
  height: `calc(100% - ${layout.navbarHeight}px)`,
  borderRight: "1px solid",
  borderColor: "divider",
  bgcolor: "background.paper",
} as const;

export function Sidebar({ mobileOpen, onMobileClose }: SidebarProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();
  const { selectedPackage, activeModule } = resolveNavigation(
    pathname,
    searchParams.get("packageId"),
  );

  const previousPathname = useRef(pathname);

  useEffect(() => {
    if (previousPathname.current !== pathname) {
      previousPathname.current = pathname;
      onMobileClose();
    }
  }, [pathname, onMobileClose]);

  useEffect(() => {
    if (activeModule) {
      rememberModuleId(String(activeModule.moduleId));
    }
  }, [activeModule]);

  const handleBack = () => {
    onMobileClose();
    router.push("/");
  };

  const renderContent = () => (
    <Box
      component="nav"
      aria-label="Package and module navigation"
      sx={{ px: 1.5, py: 2 }}
    >
      <Box
        key={selectedPackage ? selectedPackage.packageId : "all-packages"}
        sx={{
          "@keyframes sidebarEnter": {
            from: { opacity: 0, transform: "translateY(6px)" },
            to: { opacity: 1, transform: "none" },
          },
          animation: "sidebarEnter 180ms ease",
        }}
      >
        <PackageNavigation
          packages={packagesModules}
          selectedPackageId={selectedPackage?.packageId ?? null}
          onNavigate={onMobileClose}
          onBack={handleBack}
        />
        <Collapse in={Boolean(selectedPackage)} timeout={220}>
          {selectedPackage ? (
            <Box sx={{ pt: 0.5 }}>
              <ModuleNavigation
                packageItem={selectedPackage}
                activeModuleId={activeModule?.moduleId ?? null}
                onNavigate={onMobileClose}
              />
            </Box>
          ) : null}
        </Collapse>
      </Box>
    </Box>
  );

  return (
    <>
      <Drawer
        variant="permanent"
        open
        sx={{
          display: { xs: "none", md: "block" },
          width: layout.sidebarWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": drawerPaperSx,
        }}
      >
        {renderContent()}
      </Drawer>
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={onMobileClose}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": drawerPaperSx,
        }}
      >
        {renderContent()}
      </Drawer>
    </>
  );
}
