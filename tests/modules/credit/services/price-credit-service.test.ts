import { PriceCreditService } from "@/modules/credit/services/price-credit-service";
import { CreditFormData } from "@/modules/credit/schemas/credit-schema";

const createBirthDate = (age: number): string => {
    const today = new Date();
    const birthYear = today.getFullYear() - age;
    return new Date(birthYear, today.getMonth(), today.getDate()).toISOString();
};

describe("PriceCreditService", () => {
    const baseData: Omit<CreditFormData, "birthDate"> = {
        creditAmount: 5000,
        termPaymentMonths: 24,
    };

    it("deve calcular taxa de 5% para idade <= 25", () => {
        const data: CreditFormData = {
            ...baseData,
            birthDate: createBirthDate(20),
        };
        const service = new PriceCreditService(data);
        const details = service.getCreditDetails();
        expect(details.interestRate).toBeCloseTo(5);
    });

    it("deve calcular taxa de 3% para idade <= 40", () => {
        const data: CreditFormData = {
            ...baseData,
            birthDate: createBirthDate(35),
        };

        const service = new PriceCreditService(data);
        const details = service.getCreditDetails();

        expect(details.interestRate).toBeCloseTo(3);
    });

    it("deve calcular taxa de 2% para idade <= 60", () => {
        const data: CreditFormData = {
            ...baseData,
            birthDate: createBirthDate(55),
        };

        const service = new PriceCreditService(data);
        const details = service.getCreditDetails();

        expect(details.interestRate).toBeCloseTo(2);
    });

    it("deve calcular taxa de 4% para idade > 60", () => {
        const data: CreditFormData = {
            ...baseData,
            birthDate: createBirthDate(70),
        };
        const service = new PriceCreditService(data);
        const details = service.getCreditDetails();
        expect(details.interestRate).toBeCloseTo(4);
    });

    it("deve calcular parcelas, total e juros corretamente", () => {
        const data: CreditFormData = {
            ...baseData,
            birthDate: createBirthDate(30),
        };

        const service = new PriceCreditService(data);
        const details = service.getCreditDetails();

        expect(details.monthlyPayment).toBeGreaterThan(0);
        expect(details.totalAmount).toBeGreaterThan(data.creditAmount);
        expect(details.totalInterest).toBeCloseTo(
            details.totalAmount - data.creditAmount
        );
        expect(details.monthlyPayment * data.termPaymentMonths).toBeCloseTo(
            details.totalAmount
        );
    });
});
