import { act } from "@testing-library/react";
import { useCreditSimulationStore } from "@/modules/credit/store/use-credit-simulation-store";
import {
    CreditDetails,
    CreditFormData,
} from "@/modules/credit/schemas/credit-schema";

describe("useCreditSimulationStore", () => {
    beforeEach(() => {
        useCreditSimulationStore.setState({
            creditDetails: null,
            creditData: null,
            isCalculating: false,
        });
    });

    it("deve ter estado inicial correto", () => {
        const state = useCreditSimulationStore.getState();
        expect(state.creditDetails).toBeNull();
        expect(state.creditData).toBeNull();
        expect(state.isCalculating).toBe(false);
    });

    it("setCalculation deve atualizar creditDetails", () => {
        const details: CreditDetails = {
            monthlyPayment: 1000,
            monthlyRate: 0.02,
            totalAmount: 12000,
            totalInterest: 2000,
            interestRate: 24,
        };
        act(() => {
            useCreditSimulationStore.getState().setCalculation(details);
        });
        expect(useCreditSimulationStore.getState().creditDetails).toEqual(
            details
        );
    });

    it("setCreditData deve atualizar creditData", () => {
        const data: CreditFormData = {
            creditAmount: 10000,
            termPaymentMonths: 12,
            birthDate: "1990-01-01",
        };
        act(() => {
            useCreditSimulationStore.getState().setCreditData(data);
        });
        expect(useCreditSimulationStore.getState().creditData).toEqual(data);
    });

    it("setIsCalculating deve atualizar isCalculating", () => {
        act(() => {
            useCreditSimulationStore.getState().setIsCalculating(true);
        });
        expect(useCreditSimulationStore.getState().isCalculating).toBe(true);
    });
});
