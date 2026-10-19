import { createTheme, type Shadows, type ThemeOptions } from "@mui/material/styles";

export const dashboardColors = {
  primary: "#004f9f",
  white: "#ffffff",
  mainBackground: "#f5f7fb",
  sidebarBackground: "#ffffff",
  primaryText: "#1f2937",
  secondaryText: "#6b7280",
  border: "#e5e7eb",
} as const;

export const layout = {
  navbarHeight: 64,
  sidebarWidth: 280,
} as const;

declare module "@mui/material/styles" {
  interface Theme {
    layout: {
      navbarHeight: number;
      sidebarWidth: number;
    };
  }

  interface ThemeOptions {
    layout?: {
      navbarHeight?: number;
      sidebarWidth?: number;
    };
  }
}

const themeOptions: ThemeOptions = {
  palette: {
    mode: "light",
    primary: {
      main: dashboardColors.primary,
      contrastText: dashboardColors.white,
    },
    background: {
      default: dashboardColors.mainBackground,
      paper: dashboardColors.white,
    },
    text: {
      primary: dashboardColors.primaryText,
      secondary: dashboardColors.secondaryText,
    },
    divider: dashboardColors.border,
  },
  shape: {
    borderRadius: 10,
  },
  typography: {
    fontFamily:
      'var(--font-geist-sans), "Segoe UI", Helvetica, Arial, sans-serif',
    h4: {
      fontWeight: 700,
      letterSpacing: "-0.02em",
    },
    h5: {
      fontWeight: 700,
      letterSpacing: "-0.02em",
    },
    h6: {
      fontWeight: 700,
    },
    subtitle1: {
      fontWeight: 600,
    },
    button: {
      textTransform: "none",
      fontWeight: 600,
    },
  },
  layout,
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: dashboardColors.mainBackground,
          color: dashboardColors.primaryText,
        },
      },
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          minHeight: layout.navbarHeight,
          "@media (min-width: 0px)": {
            minHeight: layout.navbarHeight,
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          "&:focus-visible": {
            outline: `2px solid ${dashboardColors.primary}`,
            outlineOffset: 2,
          },
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          "&:focus-visible": {
            outline: `2px solid ${dashboardColors.primary}`,
            outlineOffset: 2,
          },
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          transition: "background-color 160ms ease, color 160ms ease",
          "&:focus-visible": {
            outline: `2px solid ${dashboardColors.primary}`,
            outlineOffset: 2,
          },
          "&.Mui-selected": {
            backgroundColor: "rgba(0, 79, 159, 0.12)",
            color: dashboardColors.primary,
            "&:hover": {
              backgroundColor: "rgba(0, 79, 159, 0.16)",
            },
            "& .MuiListItemIcon-root": {
              color: dashboardColors.primary,
            },
          },
        },
      },
    },
    MuiCard: {
      defaultProps: {
        variant: "outlined",
      },
      styleOverrides: {
        root: {
          borderRadius: 12,
          borderColor: dashboardColors.border,
        },
      },
    },
    MuiPaper: {
      defaultProps: {
        elevation: 0,
      },
      styleOverrides: {
        root: {
          backgroundImage: "none",
        },
        outlined: {
          borderColor: dashboardColors.border,
        },
      },
    },
    MuiCardActionArea: {
      styleOverrides: {
        root: {
          "&:focus-visible": {
            outline: `2px solid ${dashboardColors.primary}`,
            outlineOffset: 2,
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontWeight: 600,
        },
      },
    },
  },
};

const baseTheme = createTheme(themeOptions);

const shadows = [...baseTheme.shadows] as string[];
shadows[1] = "0 1px 2px rgba(15, 23, 42, 0.06)";
shadows[2] = "0 4px 16px rgba(15, 23, 42, 0.06)";

export const theme = createTheme(baseTheme, {
  shadows: shadows as Shadows,
});
