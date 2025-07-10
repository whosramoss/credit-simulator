import styled from "styled-components";

const Root = styled.section`
    min-height: 100vh;
`;

const Container = styled.div`
    position: relative;
    max-width: 72rem;
    margin: 0 auto;
`;

const Title = styled.h1`
    font-size: 1.5rem;
    font-weight: 500;
    text-align: center;
    margin-bottom: 1.5rem;
    margin-top: 0;
    max-width: 64rem;
    margin-left: auto;
    margin-right: auto;
    color: ${({ theme }) => theme.colors.textPrimary};

    @media (min-width: 768px) {
        font-size: 3rem;
    }

    @media (min-width: 1024px) {
        font-size: 3.75rem;
    }
`;

const Description = styled.p`
    text-align: center;
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.textSecondary};
    margin-bottom: 3rem;
    max-width: 42rem;
    margin-left: auto;
    margin-right: auto;

    @media (min-width: 1024px) {
        font-size: 1.25rem;
    }
`;

const Content = styled.div`
    max-width: 22rem;
    margin: 0 auto;

    @media (min-width: 1024px) {
        max-width: 72rem;
    }
`;

export const Hero = {
    Title,
    Description,
    Content,
    Root,
    Container,
};
