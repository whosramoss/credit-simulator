import { CreditDetails, CreditFormData } from "../schemas/credit-schema";

export abstract class BaseCreditService {
    protected creditAmount: number;
    protected termPaymentMonths: number;
    protected birthDate: string;

    constructor(data: CreditFormData) {
        this.creditAmount = data.creditAmount;
        this.termPaymentMonths = data.termPaymentMonths;
        this.birthDate = data.birthDate;
    }

    public getCreditDetails(): CreditDetails {
        const annualRate = this.getAnnualInterestRate();
        const monthlyRate = annualRate / 12;
        const monthlyPayment = this.getMonthlyPayment(monthlyRate);

        const totalAmount = this.getTotalAmount(monthlyPayment);
        const totalInterest = totalAmount - this.creditAmount;

        return {
            monthlyPayment,
            monthlyRate,
            totalAmount,
            totalInterest,
            interestRate: annualRate * 100,
        };
    }

    protected abstract getAnnualInterestRate(): number;
    protected abstract getMonthlyPayment(monthlyRate: number): number;
    protected abstract getTotalAmount(monthlyPayment: number): number;
}
