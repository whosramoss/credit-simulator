import styled from "styled-components";

export const Button = styled.button`
    border: 1px solid;
    height: ${({ theme }) => theme.spacing[12]};
    border-radius: ${({ theme }) => theme.borderRadius.full};
    padding: 0 ${({ theme }) => theme.spacing[6]};
    font-size: ${({ theme }) => theme.fontSize.base};
    font-weight: ${({ theme }) => theme.fontWeight.medium};
    transition: colors 0.2s ease-in-out;
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.primary};
    border-color: ${({ theme }) => theme.colors.border};
    color: #111111;

    &:hover {
        background-color: ${({ theme }) => theme.colors.primaryDark};
        border-color: ${({ theme }) => theme.colors.primaryDark};
    }

    &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
    }
`;
