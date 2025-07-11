import styled from "styled-components";

export const InputWrapper = styled.div`
    position: relative;
    display: flex;
    align-items: center;
`;

export const InputField = styled.input`
    width: 100%;
    padding: 0.75rem 1rem;
    background-color: ${({ theme }) => theme.colors.surface};
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: ${({ theme }) => theme.borderRadius.lg};
    color: ${({ theme }) => theme.colors.textPrimary};
    font-size: ${({ theme }) => theme.fontSize.base};
    transition: all 0.2s ease-in-out;

    &::placeholder {
        color: ${({ theme }) => theme.colors.textSecondary};
    }

    &:focus {
        outline: none;
        border-color: transparent;
        box-shadow: ${({ theme }) => theme.shadows.md};
    }
`;

export const Label = styled.label.withConfig({
    shouldForwardProp: (prop) => prop !== "haserror",
})<{ haserror?: boolean }>`
    display: block;
    font-size: ${({ theme }) => theme.fontSize.sm};
    font-weight: ${({ theme }) => theme.fontWeight.medium};
    margin-bottom: ${({ theme }) => theme.spacing[2]};
    color: ${({ theme, haserror }) =>
        haserror ? theme.colors.danger : theme.colors.textPrimary};
`;

export const Addon = styled.span`
    position: absolute;
    color: ${({ theme }) => theme.colors.textSecondary};
`;

export const InputErrorMessage = styled.p`
    margin-top: ${({ theme }) => theme.spacing[1]};
    font-size: ${({ theme }) => theme.fontSize.sm};
    color: ${({ theme }) => theme.colors.danger};
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
`;
