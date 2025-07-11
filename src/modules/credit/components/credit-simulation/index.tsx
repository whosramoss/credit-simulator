import CreditCharts from "../credit-chart";
import CreditSimulationForm from "../credit-simulation-form";
import CreditSimulationResult from "../credit-simulation-result";
import { ChartsContainer, Container } from "./credit-simulation.styles";

export default function CreditSimulation() {
    return (
        <Container>
            <CreditSimulationForm />
            <CreditSimulationResult />
            <ChartsContainer>
                <CreditCharts />
            </ChartsContainer>
        </Container>
    );
}
