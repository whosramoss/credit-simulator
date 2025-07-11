"use client";

import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from "recharts";

import { formatCurrency } from "@/shared/utils/utils";
import { CreditAmortizationSchedule } from "../../schemas/credit-schema";
import {
    Container,
    ChartCard,
    ChartTitle,
    TooltipContainer,
    TooltipTitle,
    TooltipText,
} from "./credit-chart.styles";
import { useTheme } from "styled-components";
import { useCreditSimulationStore } from "../../store/use-credit-simulation-store";
import { PriceCreditService } from "../../services/price-credit-service";

export default function CreditCharts() {
    const { creditDetails, creditData } = useCreditSimulationStore();

    if (!creditDetails || !creditData) return;

    return (
        <CreditChartsContent
            creditAmount={creditData?.creditAmount ?? 0}
            termPaymentMonths={creditData?.termPaymentMonths ?? 0}
            birthDate={creditData?.birthDate ?? ""}
        />
    );
}

interface CreditChartsProps {
    creditAmount: number;
    termPaymentMonths: number;
    birthDate: string;
}

function CreditChartsContent(creditData: CreditChartsProps) {
    const theme = useTheme();

    const generateAmortizationData = (): CreditAmortizationSchedule[] => {
        const service = new PriceCreditService(creditData);
        return service.getAmortizationSchedule();
    };

    const data = generateAmortizationData().slice(0, 12);

    return (
        <Container>
            <ChartCard>
                <ChartTitle>
                    Composição dos Pagamentos (Primeiros 12 Meses)
                </ChartTitle>
                <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={data}>
                        <CartesianGrid
                            strokeDasharray="3 3"
                            stroke={theme.colors.chart.grid}
                        />
                        <XAxis
                            dataKey="month"
                            stroke={theme.colors.chart.axis}
                            tick={{ fill: theme.colors.chart.axis }}
                        />
                        <YAxis
                            stroke={theme.colors.chart.axis}
                            tick={{ fill: theme.colors.chart.axis }}
                            tickFormatter={(value) => formatCurrency(value)}
                        />
                        <Tooltip content={<CreditTooltip />} />
                        <Legend />
                        <Bar
                            dataKey="principal"
                            stackId="a"
                            fill={theme.colors.chart.primary}
                            name="Amortização"
                        />
                        <Bar
                            dataKey="interest"
                            stackId="a"
                            fill={theme.colors.chart.secondary}
                            name="Juros"
                        />
                    </BarChart>
                </ResponsiveContainer>
            </ChartCard>
        </Container>
    );
}

interface CreditTooltipProps {
    active?: boolean;
    payload?: Array<{
        name: string;
        value: number;
        color: string;
    }>;
    label?: string;
}

const CreditTooltip = ({ active, payload, label }: CreditTooltipProps) => {
    if (active && payload && payload.length) {
        return (
            <TooltipContainer>
                <TooltipTitle>Mês {label}</TooltipTitle>
                {payload.map((entry, index: number) => (
                    <TooltipText key={index} style={{ color: entry.color }}>
                        {entry.name}: {formatCurrency(entry.value)}
                    </TooltipText>
                ))}
            </TooltipContainer>
        );
    }
    return null;
};
