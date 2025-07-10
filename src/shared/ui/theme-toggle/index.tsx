"use client";

import { useThemeStore } from "@/shared/store/theme-store";
import { ToggleButton, ToggleThumb } from "./theme-toggle.styles";

export function ThemeToggle() {
    const mode = useThemeStore((state) => state.mode);
    const toggleTheme = useThemeStore((state) => state.toggleTheme);

    const isDark = mode === "dark";

    return (
        <ToggleButton onClick={toggleTheme} aria-label="Alternar tema">
            <ToggleThumb isdark={isDark} />
        </ToggleButton>
    );
}
