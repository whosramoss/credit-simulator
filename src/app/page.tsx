"use client";

import { FadeIn } from "@/shared/ui/fade-in";
import { Hero } from "@/shared/ui/hero";
import { Logo } from "@/shared/ui/logo";
import { NavBar } from "@/shared/ui/navbar";
import { ThemeToggle } from "@/shared/ui/theme-toggle";
import React from "react";
import { PiMoneyWavyDuotone } from "react-icons/pi";

export default function Home() {
    return (
        <React.Fragment>
            <FadeIn.Root>
                <NavBar.Section>
                    <NavBar.Container>
                        <NavBar.Grid>
                            <FadeIn.Item delay={0}>
                                <Logo.Icon icon={PiMoneyWavyDuotone} />
                            </FadeIn.Item>
                            <NavBar.Actions>
                                <FadeIn.Item delay={0.5}>
                                    <ThemeToggle />
                                </FadeIn.Item>
                            </NavBar.Actions>
                        </NavBar.Grid>
                    </NavBar.Container>
                </NavBar.Section>
            </FadeIn.Root>
            <FadeIn.Root>
                <Hero.Root>
                    <Hero.Container>
                        <FadeIn.Item delay={0}>
                            <Hero.Title>
                                Simule seu empréstimo de forma rápida e
                                transparente
                            </Hero.Title>
                        </FadeIn.Item>
                        <FadeIn.Item delay={0.3}>
                            <Hero.Description>
                                Descubra as melhores condições para seu perfil.
                                Nossa simulação é gratuita e sem compromisso.
                            </Hero.Description>
                        </FadeIn.Item>
                        <FadeIn.Item delay={0.5}>
                            <Hero.Content>Conteudo</Hero.Content>
                        </FadeIn.Item>
                    </Hero.Container>
                </Hero.Root>
            </FadeIn.Root>
        </React.Fragment>
    );
}
