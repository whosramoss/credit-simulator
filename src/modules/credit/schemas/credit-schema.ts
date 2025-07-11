import { z } from "zod";

export const creditFormSchema = z.object({
    creditAmount: z
        .number({
            required_error: "Valor do empréstimo deve ser informado",
            invalid_type_error: "Valor do empréstimo deve ser informado",
        })
        .min(1000, "Valor mínimo de R$ 1.000,00")
        .max(150000, "Valor máximo de R$ 150.000,00"),
    termPaymentMonths: z
        .number({
            required_error: "Prazo de pagamento deve ser informado",
            invalid_type_error: "Prazo de pagamento deve ser informado",
        })
        .min(1, "Prazo mínimo de 1 mês"),
    birthDate: z
        .string()
        .min(1, "Data de nascimento é obrigatória")
        .refine((date) => {
            const birthDate = new Date(date);
            const today = new Date();
            const age = today.getFullYear() - birthDate.getFullYear();
            return age >= 18;
        }, "Empréstimo disponível apenas para maiores de 18 anos"),
});

export type CreditFormData = z.infer<typeof creditFormSchema>;

export interface CreditDetails {
    monthlyPayment: number;
    monthlyRate: number;
    totalAmount: number;
    totalInterest: number;
    interestRate: number;
}

export interface CreditAmortizationSchedule {
    month: number;
    installment: number;
    interest: number;
    principal: number;
    remainingBalance: number;
}
