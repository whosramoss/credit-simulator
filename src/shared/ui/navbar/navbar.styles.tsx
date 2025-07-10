import styled from "styled-components";

export const Actions = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: ${({ theme }) => theme.spacing[4]};
    align-items: center;
`;

export const Section = styled.section`
    padding: 1rem 0;
    width: 100%;
    top: 0;
    z-index: 50;

    @media (min-width: 1024px) {
        padding: 2rem 0;
    }
`;

export const Container = styled.div`
    max-width: 64rem;
    margin: 0 auto;
`;

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    padding: ${({ theme }) => theme.spacing[2]};
    align-items: center;
    padding-left: ${({ theme }) => theme.spacing[4]};
    padding-right: ${({ theme }) => theme.spacing[4]};

    @media (min-width: 768px) {
        padding-right: ${({ theme }) => theme.spacing[2]};
    }

    @media (min-width: 1024px) {
        grid-template-columns: repeat(2, 1fr);
    }
`;

export const NavBar = {
    Container,
    Section,
    Actions,
    Grid,
};
