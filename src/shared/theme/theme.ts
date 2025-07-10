const defaultTheme = {
    spacing: {
        1: "0.25rem",
        2: "0.5rem",
        3: "0.75rem",
        4: "1rem",
        6: "1.5rem",
        8: "2rem",
        12: "3rem",
    },
    borderRadius: {
        full: "50px",
        lg: "0.5rem",
    },
    fontSize: {
        sm: "0.875rem",
        base: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "4xl": "2.25rem",
        "5xl": "3rem",
        "6xl": "3.75rem",
    },
    fontWeight: {
        medium: "500",
        semibold: "600",
    },
    shadows: {
        md: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
        lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
    },
};

export const themeLight = {
    colors: {
        primary: "#8edb00",
        primaryDark: "#4f9e00",
        background: "#FFFFFF",
        primaryBackground: "#d1d9c1",
        surface: "#F5F5F5",
        textPrimary: "#111111",
        textSecondary: "#4F4F4F",
        border: "#E0E0E0",
        danger: "#ef4444",
        chart: {
            primary: "#d1d9c1",
            secondary: "#82ca9d",
            grid: "#ffffff10",
            axis: "#00000060",
            tooltipBg: "rgba(48, 50, 54, 0.9)",
            tooltipBorder: "#374151",
            tooltipText: "#f9fafb",
        },
    },
    ...defaultTheme,
};

export const themeDark = {
    colors: {
        primary: "#8edb00",
        primaryDark: "#4f9e00",
        background: "#121212",
        primaryBackground: "#4f5740",
        surface: "#1E1E1E",

        textPrimary: "#FFFFFF",
        textSecondary: "#CCCCCC",
        border: "#2E2E2E",
        danger: "#ef4444",
        chart: {
            primary: "#4f5740",
            secondary: "#82ca9d",
            grid: "#ffffff20",
            axis: "#ffffff80",
            tooltipBg: "rgba(255,255,255,0.9)",
            tooltipBorder: "#e5e7eb",
            tooltipText: "#111827",
        },
    },
    ...defaultTheme,
};
