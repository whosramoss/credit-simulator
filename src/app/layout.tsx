import { ReactNode } from "react";
import type { Metadata } from "next";
import { Questrial } from "next/font/google";

const fontQuestrial = Questrial({
    subsets: ["latin"],
    display: "block",
    weight: ["400"],
});

export const metadata: Metadata = {
    title: "Simulador de Empréstimo",
    description: "Simule seu empréstimo de forma rápida e transparente",
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={fontQuestrial.className}>{children}</body>
        </html>
    );
}
