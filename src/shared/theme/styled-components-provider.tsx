"use client";

import { ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import { themeLight, themeDark } from "@/shared/theme/theme";
import { useThemeStore } from "@/shared/store/theme-store";

export default function StyledComponentsProvider({
    children,
}: {
    children: ReactNode;
}) {
    const mode = useThemeStore((state) => state.mode);
    return (
        <ThemeProvider theme={mode === "dark" ? themeDark : themeLight}>
            {children}
        </ThemeProvider>
    );
}
