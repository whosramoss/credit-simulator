"use client";

import { formatCurrency } from "@/shared/utils/utils";
import { useCreditSimulationStore } from "../../store/use-credit-simulation-store";
import {
    Container,
    Title,
    ItemsContainer,
    Item,
    ItemLabel,
    ItemValue,
} from "./credit-simulation-result.styles";

export default function CreditSimulationResult() {
    const { creditDetails } = useCreditSimulationStore();

    if (!creditDetails) {
        return;
    }

    const items = [
        {
            label: "Taxa de juros anual:",
            value: `${creditDetails.interestRate}%`,
        },
        {
            label: "Valor da parcela mensal:",
            value: formatCurrency(creditDetails.monthlyPayment),
        },
        {
            label: "Total a pagar:",
            value: formatCurrency(creditDetails.totalAmount),
        },
        {
            label: "Total de juros:",
            value: formatCurrency(creditDetails.totalInterest),
        },
    ];

    return (
        <Container>
            <Title>Resultado da Simulação</Title>
            <ItemsContainer>
                {items.map((item) => (
                    <Item key={item.label}>
                        <ItemLabel>{item.label}</ItemLabel>
                        <ItemValue>{item.value}</ItemValue>
                    </Item>
                ))}
            </ItemsContainer>
        </Container>
    );
}
