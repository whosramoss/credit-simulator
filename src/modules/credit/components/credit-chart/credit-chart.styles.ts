import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing[8]};
`;

export const ChartCard = styled.div`
    background-color: ${({ theme }) => theme.colors.surface};
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: ${({ theme }) => theme.borderRadius.lg};
    padding: ${({ theme }) => theme.spacing[6]};
`;

export const ChartTitle = styled.h3`
    font-size: ${({ theme }) => theme.spacing[6]};
    font-weight: ${({ theme }) => theme.fontWeight.semibold};
    color: ${({ theme }) => theme.colors.primaryDark};
    margin-bottom: ${({ theme }) => theme.spacing[4]};
`;

export const TooltipContainer = styled.div`
    background-color: ${({ theme }) => theme.colors.chart.tooltipBg};
    backdrop-filter: blur(4px);
    padding: ${({ theme }) => theme.spacing[3]};
    border-radius: ${({ theme }) => theme.borderRadius.lg};
    border: 1px solid ${({ theme }) => theme.colors.chart.tooltipBorder};
    box-shadow: ${({ theme }) => theme.shadows.lg};
`;

export const TooltipTitle = styled.p`
    font-weight: ${({ theme }) => theme.fontWeight.medium};
    color: ${({ theme }) => theme.colors.chart.tooltipText};
`;

export const TooltipText = styled.p`
    font-size: ${({ theme }) => theme.fontSize.sm};
`;
