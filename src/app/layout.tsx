import { ReactNode } from "react";
import type { Metadata } from "next";
import { Questrial } from "next/font/google";
import StyledComponentsTheme from "@/shared/theme/styled-components-theme";

const fontQuestrial = Questrial({
    subsets: ["latin"],
    display: "block",
    weight: ["400"],
});

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="pt" suppressHydrationWarning>
            <body className={fontQuestrial.className}>
                <StyledComponentsTheme>{children}</StyledComponentsTheme>
            </body>
        </html>
    );
}

export const metadata: Metadata = {
    title: "Simulador de Empréstimo",
    description: "Simule seu empréstimo de forma rápida e transparente",
    keywords: [
        "empréstimo",
        "simulador",
        "crédito",
        "financeiro",
        "calculadora",
        "online",
        "pessoal",
        "rápido",
    ],
    openGraph: {
        type: "website",
        siteName: "Simulador de Empréstimo",
        locale: "pt_BR",
        url: "https://credit-simulator-tawny.vercel.app",
        title: "Simulador de Empréstimo",
        description: "Simule seu empréstimo de forma rápida e transparente",
        images: [
            {
                url: "/thumbnail.png",
                width: 1200,
                height: 630,
                alt: "Simulador de Empréstimo Preview",
            },
        ],
    },
    authors: [
        {
            name: "Gabriel Ramos",
            url: "https://whosramoss.com",
        },
    ],
    creator: "Gabriel Ramos",
    icons: [
        {
            rel: "icon",
            url: "/favicon.ico",
        },
        {
            rel: "apple-touch-icon",
            url: "/apple-touch-icon.png",
        },
        {
            rel: "icon",
            type: "image/png",
            url: "/favicon-32x32.png",
            sizes: "32x32",
        },
        {
            rel: "icon",
            type: "image/png",
            url: "/favicon-16x16.png",
            sizes: "16x16",
        },
        {
            rel: "icon",
            type: "image/png",
            url: "/android-chrome-192x192.png",
            sizes: "192x192",
        },
        {
            rel: "icon",
            type: "image/png",
            url: "/android-chrome-512x512.png",
            sizes: "512x512",
        },
    ],
    robots: {
        index: true,
        follow: true,
    },
    manifest: "/site.webmanifest",
};
