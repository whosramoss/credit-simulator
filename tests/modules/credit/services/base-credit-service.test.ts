import { BaseCreditService } from "@/modules/credit/services/base-credit-service";
import {
    CreditFormData,
    CreditDetails,
} from "@/modules/credit/schemas/credit-schema";

describe("BaseCreditService", () => {
    class FakeCreditService extends BaseCreditService {
        protected getAnnualInterestRate(): number {
            return 0.1;
        }
        protected getMonthlyPayment(monthlyRate: number): number {
            console.log(monthlyRate);
            return 100;
        }
        protected getTotalAmount(monthlyPayment: number): number {
            return monthlyPayment * this.termPaymentMonths;
        }
    }

    const baseData: CreditFormData = {
        creditAmount: 1200,
        termPaymentMonths: 12,
        birthDate: new Date().toISOString(),
    };

    it("executa o template method e retorna CreditDetails corretamente", () => {
        const service = new FakeCreditService(baseData);
        const details: CreditDetails = service.getCreditDetails();
        expect(details.monthlyPayment).toBe(100);
        expect(details.totalAmount).toBe(1200);
        expect(details.totalInterest).toBe(0);
        expect(details.interestRate).toBe(10);
    });

    it("chama os métodos abstratos na ordem correta", () => {
        const calls: string[] = [];
        class SpyCreditService extends BaseCreditService {
            protected getAnnualInterestRate(): number {
                calls.push("getAnnualInterestRate");
                return 0.05;
            }
            protected getMonthlyPayment(): number {
                calls.push("getMonthlyPayment");
                return 200;
            }
            protected getTotalAmount(): number {
                calls.push("getTotalAmount");
                return 2400;
            }
        }
        const service = new SpyCreditService(baseData);
        service.getCreditDetails();
        expect(calls).toEqual([
            "getAnnualInterestRate",
            "getMonthlyPayment",
            "getTotalAmount",
        ]);
    });
});
