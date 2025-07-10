"use client";

import { NavBar } from "@/shared/ui/navbar";
import React from "react";

export default function Home() {
    return (
        <React.Fragment>
            <NavBar.Section>
                <NavBar.Container>
                    <NavBar.Grid>
                        logo
                        <NavBar.Actions>actions</NavBar.Actions>
                    </NavBar.Grid>
                </NavBar.Container>
            </NavBar.Section>
        </React.Fragment>
    );
}
