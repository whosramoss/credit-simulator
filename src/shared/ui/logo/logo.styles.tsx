import styled from "styled-components";

export const LogoIcon = styled.div`
    height: ${({ theme }) => theme.spacing[12]};
    width: ${({ theme }) => theme.spacing[12]};
    color: ${({ theme }) => theme.colors.primaryDark};
    display: flex;
    align-items: center;
    justify-content: center;
`;
