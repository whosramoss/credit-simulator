"use client";

import React from "react";
import StyledComponentsProvider from "@/shared/theme/styled-components-provider";
import StyledComponentsRegistry from "@/shared/theme/styled-components-registry";
import { StyledComponentsGlobal } from "@/shared/theme/styled-components-global";

interface StyledComponentsThemeProps {
    children: React.ReactNode;
}

export default function StyledComponentsTheme({
    children,
}: StyledComponentsThemeProps) {
    return (
        <StyledComponentsRegistry>
            <StyledComponentsProvider>
                <StyledComponentsGlobal />
                {children}
            </StyledComponentsProvider>
        </StyledComponentsRegistry>
    );
}
