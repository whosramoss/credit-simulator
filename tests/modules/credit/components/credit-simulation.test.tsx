import "@testing-library/jest-dom";
import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import CreditSimulation from "@/modules/credit/components/credit-simulation";
import { ThemeProvider } from "styled-components";
import { themeLight } from "@/shared/theme/theme";

describe("CreditSimulation", () => {
    it("realiza simulação e exibe resultado ao submeter dados válidos", async () => {
        const { getByPlaceholderText, getByLabelText, getByText, container } =
            render(
                <ThemeProvider theme={themeLight}>
                    <CreditSimulation />
                </ThemeProvider>
            );

        const creditAmountInput = getByPlaceholderText("R$ 0,00");
        fireEvent.change(creditAmountInput, { target: { value: "10000" } });

        const termInput = getByPlaceholderText("Ex: 12");
        fireEvent.change(termInput, { target: { value: "12" } });

        const birthDateInput = getByLabelText("Data de nascimento");
        fireEvent.change(birthDateInput, { target: { value: "1990-01-01" } });

        const button = getByText("Simular empréstimo");
        fireEvent.click(button);

        await waitFor(() => {
            expect(container).toHaveTextContent("Taxa de juros anual:");
            expect(container).toHaveTextContent("Valor da parcela mensal:");
            expect(container).toHaveTextContent("Total a pagar:");
            expect(container).toHaveTextContent("Total de juros:");
            expect(container).toHaveTextContent("%");
            expect(container).toHaveTextContent("R$");
        });
    });
});
