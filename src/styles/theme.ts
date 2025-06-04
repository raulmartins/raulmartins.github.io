const colors = {
  // Cores principais
  primary: {
    50: "#e6f1fe",
    100: "#cce3fd",
    200: "#99c7fb",
    300: "#66aaf9",
    400: "#338ef7",
    500: "#0072f5", // Cor principal
    600: "#005bc4",
    700: "#004493",
    800: "#002e62",
    900: "#001731",
  },
  // Tons de cinza
  gray: {
    50: "#f9fafb",
    100: "#f3f4f6",
    200: "#e5e7eb",
    300: "#d1d5db",
    400: "#9ca3af",
    500: "#6b7280",
    600: "#4b5563",
    700: "#374151",
    800: "#1f2937",
    900: "#111827",
  },
  // Cores de feedback
  success: {
    light: "#10B981",
    main: "#059669",
    dark: "#047857",
  },
  error: {
    light: "#EF4444",
    main: "#DC2626",
    dark: "#B91C1C",
  },
  warning: {
    light: "#F59E0B",
    main: "#D97706",
    dark: "#B45309",
  },
  info: {
    light: "#3B82F6",
    main: "#2563EB",
    dark: "#1D4ED8",
  },
  // Cores do sistema
  background: {
    default: "#FFFFFF",
    paper: "#F9FAFB",
    dark: "#111827",
  },
  text: {
    primary: "#111827",
    secondary: "#4B5563",
    disabled: "#9CA3AF",
    inverse: "#FFFFFF",
  },
  // Cores de ação
  action: {
    active: "rgba(0, 0, 0, 0.54)",
    hover: "rgba(0, 0, 0, 0.04)",
    selected: "rgba(0, 0, 0, 0.08)",
    disabled: "rgba(0, 0, 0, 0.26)",
    focus: "rgba(0, 0, 0, 0.12)",
  },
} as const;

export const theme = {
  colors,
  breakpoints: {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    "2xl": "1536px",
  },
  spacing: {
    0: "0",
    1: "0.25rem",
    2: "0.5rem",
    3: "0.75rem",
    4: "1rem",
    5: "1.25rem",
    6: "1.5rem",
    8: "2rem",
    10: "2.5rem",
    12: "3rem",
    16: "4rem",
    20: "5rem",
  },
  typography: {
    fontFamily: {
      sans: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
      mono: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
    },
    fontSize: {
      xs: "0.75rem",
      sm: "0.875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
    },
    fontWeight: {
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
  },
  radii: {
    none: "0",
    sm: "0.125rem",
    default: "0.25rem",
    md: "0.375rem",
    lg: "0.5rem",
    xl: "0.75rem",
    "2xl": "1rem",
    full: "9999px",
  },
  shadows: {
    sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
    default:
      "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)",
    md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)",
    lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)",
    xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)",
  },
  transitions: {
    default: "all 0.2s ease-in-out",
    fast: "all 0.1s ease-in-out",
    slow: "all 0.3s ease-in-out",
  },
  zIndices: {
    0: 0,
    10: 10,
    20: 20,
    30: 30,
    40: 40,
    50: 50,
    auto: "auto",
    dropdown: 1000,
    sticky: 1100,
    modal: 1300,
    popover: 1400,
    tooltip: 1500,
  },
} as const;

// Tipo para o tema
declare module "styled-components" {
  export interface DefaultTheme {
    colors: typeof colors;
    breakpoints: typeof theme.breakpoints;
    spacing: typeof theme.spacing;
    typography: typeof theme.typography;
    radii: typeof theme.radii;
    shadows: typeof theme.shadows;
    transitions: typeof theme.transitions;
    zIndices: typeof theme.zIndices;
  }
}
