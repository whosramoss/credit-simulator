import { CreditAmortizationSchedule } from "../schemas/credit-schema";
import { BaseCreditService } from "./base-credit-service";
import { differenceInYears } from "date-fns";

export class PriceCreditService extends BaseCreditService {
    protected getAnnualInterestRate(): number {
        const age = differenceInYears(new Date(), new Date(this.birthDate));

        if (age <= 25) return 0.05;
        if (age <= 40) return 0.03;
        if (age <= 60) return 0.02;
        return 0.04;
    }

    protected getMonthlyPayment(rate: number): number {
        const numerator = this.creditAmount * rate;
        const denominator = 1 - Math.pow(1 + rate, -this.termPaymentMonths);
        return numerator / denominator;
    }

    protected getTotalAmount(monthlyPayment: number): number {
        return monthlyPayment * this.termPaymentMonths;
    }

    public getAmortizationSchedule(): CreditAmortizationSchedule[] {
        const schedule = [];

        const { monthlyPayment, monthlyRate } = this.getCreditDetails();

        let remainingBalance = this.creditAmount;

        for (let month = 1; month <= this.termPaymentMonths; month++) {
            const interest = remainingBalance * monthlyRate;
            const principal = monthlyPayment - interest;
            remainingBalance -= principal;

            if (month === this.termPaymentMonths) {
                remainingBalance = 0;
            }

            schedule.push({
                month,
                installment: Number(monthlyPayment.toFixed(2)),
                interest: Number(interest.toFixed(2)),
                principal: Number(principal.toFixed(2)),
                remainingBalance: Number(remainingBalance.toFixed(2)),
            });
        }

        return schedule;
    }
}
