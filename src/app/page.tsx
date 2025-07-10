"use client";

import { Logo } from "@/shared/ui/logo";
import { NavBar } from "@/shared/ui/navbar";
import React from "react";
import { PiMoneyWavyDuotone } from "react-icons/pi";

export default function Home() {
    return (
        <React.Fragment>
            <NavBar.Section>
                <NavBar.Container>
                    <NavBar.Grid>
                        <Logo.Icon icon={PiMoneyWavyDuotone} />
                        <NavBar.Actions>actions</NavBar.Actions>
                    </NavBar.Grid>
                </NavBar.Container>
            </NavBar.Section>
        </React.Fragment>
    );
}
