import { create } from "zustand";
import { CreditDetails, CreditFormData } from "../schemas/credit-schema";

interface CreditSimulationState {
    creditDetails: CreditDetails | null;
    creditData: CreditFormData | null;
    isCalculating: boolean;
    setCalculation: (c: CreditDetails) => void;
    setCreditData: (f: CreditFormData) => void;
    setIsCalculating: (b: boolean) => void;
}

export const useCreditSimulationStore = create<CreditSimulationState>(
    (set) => ({
        creditDetails: null,
        creditData: null,
        isCalculating: false,
        setCalculation: (creditDetails) => set({ creditDetails }),
        setCreditData: (creditData) => set({ creditData }),
        setIsCalculating: (isCalculating) => set({ isCalculating }),
    })
);
