import styled from "styled-components";

export const Container = styled.div`
    margin-top: ${({ theme }) => theme.spacing[8]};
    padding: ${({ theme }) => theme.spacing[6]};
    background-color: ${({ theme }) => theme.colors.surface};
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: ${({ theme }) => theme.borderRadius.lg};
    max-width: 42rem;
    margin-left: auto;
    margin-right: auto;
`;

export const Title = styled.h3`
    font-size: ${({ theme }) => theme.fontSize["2xl"]};
    font-weight: ${({ theme }) => theme.fontWeight.semibold};
    color: ${({ theme }) => theme.colors.primaryDark};
    margin-bottom: ${({ theme }) => theme.spacing[4]};
    margin-top: 0rem;
`;

export const ItemsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing[3]};
`;

export const Item = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const ItemLabel = styled.span`
    color: ${({ theme }) => theme.colors.textSecondary};
    font-weight: ${({ theme }) => theme.fontWeight.semibold};
`;

export const ItemValue = styled.span`
    color: ${({ theme }) => theme.colors.textSecondary};
    font-weight: ${({ theme }) => theme.fontWeight.medium};
`;
