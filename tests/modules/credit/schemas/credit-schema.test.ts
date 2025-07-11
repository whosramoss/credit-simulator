import { creditFormSchema } from "@/modules/credit/schemas/credit-schema";

const createBirthDate = (age: number): string => {
    const today = new Date();
    const birthYear = today.getFullYear() - age;
    return new Date(birthYear, today.getMonth(), today.getDate()).toISOString();
};

describe("creditFormSchema", () => {
    it("valida dados corretos", () => {
        const data = {
            creditAmount: 10000,
            termPaymentMonths: 12,
            birthDate: createBirthDate(18),
        };
        const result = creditFormSchema.safeParse(data);
        expect(result.success).toBe(true);
    });

    it("retorna erro se valor do empréstimo for menor que 1000", () => {
        const data = {
            creditAmount: 500,
            termPaymentMonths: 12,
            birthDate: createBirthDate(18),
        };
        const result = creditFormSchema.safeParse(data);
        expect(result.success).toBe(false);
        expect(result.error?.issues[0].message).toMatch(/Valor mínimo/);
    });

    it("retorna erro se valor do empréstimo for maior que 150000", () => {
        const data = {
            creditAmount: 200000,
            termPaymentMonths: 12,
            birthDate: createBirthDate(18),
        };
        const result = creditFormSchema.safeParse(data);
        expect(result.success).toBe(false);
        expect(result.error?.issues[0].message).toMatch(/Valor máximo/);
    });

    it("retorna erro se prazo de pagamento for menor que 1", () => {
        const data = {
            creditAmount: 10000,
            termPaymentMonths: 0,
            birthDate: createBirthDate(18),
        };
        const result = creditFormSchema.safeParse(data);
        expect(result.success).toBe(false);
        expect(result.error?.issues[0].message).toMatch(/Prazo mínimo/);
    });

    it("retorna erro se data de nascimento estiver vazia", () => {
        const data = {
            creditAmount: 10000,
            termPaymentMonths: 12,
            birthDate: "",
        };
        const result = creditFormSchema.safeParse(data);
        expect(result.success).toBe(false);
        expect(result.error?.issues[0].message).toMatch(/Data de nascimento/);
    });

    it("retorna erro se usuário for menor de 18 anos", () => {
        const data = {
            creditAmount: 10000,
            termPaymentMonths: 12,
            birthDate: createBirthDate(17),
        };
        const result = creditFormSchema.safeParse(data);
        console.log(data, result);
        expect(result.success).toBe(false);
        expect(result.error?.issues[0].message).toMatch(/maiores de 18 anos/);
    });
});
