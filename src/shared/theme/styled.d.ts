import "styled-components";

declare module "styled-components" {
    export interface DefaultTheme {
        colors: {
            primary: string;
            primaryDark: string;
            background: string;
            primaryBackground: string;
            surface: string;
            textPrimary: string;
            textSecondary: string;
            border: string;
            danger: string;
            chart: {
                primary: string;
                secondary: string;
                grid: string;
                axis: string;
                tooltipBg: string;
                tooltipBorder: string;
                tooltipText: string;
            };
        };
        spacing: {
            1: string;
            2: string;
            3: string;
            4: string;
            6: string;
            8: string;
            12: string;
        };
        borderRadius: {
            full: string;
            lg: string;
        };
        fontSize: {
            sm: string;
            base: string;
            lg: string;
            xl: string;
            "2xl": string;
            "4xl": string;
            "5xl": string;
            "6xl": string;
        };
        fontWeight: {
            medium: string;
            semibold: string;
        };
        shadows: {
            md: string;
            lg: string;
        };
    }
}
