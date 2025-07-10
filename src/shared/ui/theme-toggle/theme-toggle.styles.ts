import styled from "styled-components";

export const ToggleButton = styled.button`
    position: relative;
    display: inline-flex;
    height: ${({ theme }) => theme.spacing[6]};
    width: ${({ theme }) => theme.spacing[12]};
    align-items: center;
    border-radius: ${({ theme }) => theme.borderRadius.full};
    transition: colors 0.2s ease-in-out;
    background-color: ${({ theme }) => theme.colors.primaryBackground};
    border: 1px ${({ theme }) => theme.colors.surface} solid;
    cursor: pointer;
    outline: none;

    &:hover {
        outline: none;
        box-shadow: ${({ theme }) => theme.shadows.lg};
    }
`;

export const ToggleThumb = styled.span.withConfig({
    shouldForwardProp: (prop) => prop !== "isdark",
})<{ isdark?: boolean }>`
    display: inline-block;
    height: ${({ theme }) => theme.spacing[4]};
    width: ${({ theme }) => theme.spacing[4]};
    transform: ${({ isdark }) =>
        isdark ? "translateX(1rem)" : "translateX(0.05rem)"};
    border-radius: ${({ theme }) => theme.borderRadius.full};
    background-color: ${({ theme }) => theme.colors.primary};
    transition: transform 0.2s ease-in-out;
`;
