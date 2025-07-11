import styled from "styled-components";

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing[6]};
    max-width: 42rem;
    margin: 0 auto;
`;

export const FormGroup = styled.div`
    display: flex;
    flex-direction: column;
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

export const ErrorMessage = styled.p`
    margin-top: ${({ theme }) => theme.spacing[1]};
    font-size: ${({ theme }) => theme.fontSize.sm};
    color: ${({ theme }) => theme.colors.danger};
`;

export const FullWidthButton = styled.button`
    width: 100%;
`;

export const FullWidthInput = styled.div`
    width: 100%;
`;
