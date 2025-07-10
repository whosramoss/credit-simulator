"use client";

import { Hero } from "@/shared/ui/hero";
import { Logo } from "@/shared/ui/logo";
import { NavBar } from "@/shared/ui/navbar";
import { ThemeToggle } from "@/shared/ui/theme-toggle";
import React from "react";
import { PiMoneyWavyDuotone } from "react-icons/pi";

export default function Home() {
    return (
        <React.Fragment>
            <NavBar.Section>
                <NavBar.Container>
                    <NavBar.Grid>
                        <Logo.Icon icon={PiMoneyWavyDuotone} />
                        <NavBar.Actions>
                            <ThemeToggle />
                        </NavBar.Actions>
                    </NavBar.Grid>
                </NavBar.Container>
            </NavBar.Section>
            <Hero.Root>
                <Hero.Container>
                    <Hero.Title>
                        Simule seu empréstimo de forma rápida e transparente
                    </Hero.Title>
                    <Hero.Description>
                        Descubra as melhores condições para seu perfil. Nossa
                        simulação é gratuita e sem compromisso.
                    </Hero.Description>
                    <Hero.Content>Conteudo</Hero.Content>
                </Hero.Container>
            </Hero.Root>
        </React.Fragment>
    );
}
