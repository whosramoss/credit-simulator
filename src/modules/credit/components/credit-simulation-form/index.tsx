"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/shared/ui/button";
import { Input, NumericInput } from "@/shared/ui/input";
import { CreditFormData, creditFormSchema } from "../../schemas/credit-schema";
import { PriceCreditService } from "../../services/price-credit-service";
import { useCreditSimulationStore } from "../../store/use-credit-simulation-store";
import {
    Form,
    FullWidthInput,
    FullWidthButton,
} from "./credit-simulation-form.styles";
import React from "react";

export default function CreditSimulationForm() {
    const { setCalculation, setCreditData, isCalculating, setIsCalculating } =
        useCreditSimulationStore();

    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm<CreditFormData>({
        resolver: zodResolver(creditFormSchema),
    });

    const onSubmit = (data: CreditFormData) => {
        setIsCalculating(true);
        try {
            const calculator = new PriceCreditService(data);
            const result = calculator.getCreditDetails();
            setCalculation(result);
            setCreditData(data);
        } catch (error) {
            console.log(error);
        } finally {
            setIsCalculating(false);
        }
    };

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <FullWidthInput>
                <NumericInput
                    id="creditAmount"
                    label="Valor do empréstimo (R$)"
                    error={errors.creditAmount?.message as string}
                    placeholder="R$ 0,00"
                    thousandSeparator="."
                    decimalSeparator=","
                    decimalScale={2}
                    prefix="R$ "
                    onValueChange={(values) => {
                        setValue("creditAmount", values.floatValue || 0);
                    }}
                    {...register("creditAmount", { valueAsNumber: true })}
                />
            </FullWidthInput>
            <FullWidthInput>
                <Input
                    id="termPaymentMonths"
                    type="number"
                    placeholder="Ex: 12"
                    label="Prazo de pagamento (meses)"
                    error={errors.termPaymentMonths?.message as string}
                    {...register("termPaymentMonths", { valueAsNumber: true })}
                />
            </FullWidthInput>
            <FullWidthInput>
                <Input
                    id="birthDate"
                    type="date"
                    label="Data de nascimento"
                    error={errors.birthDate?.message as string}
                    {...register("birthDate")}
                />
            </FullWidthInput>
            <FullWidthButton
                as={Button}
                id="credit-simulate-button"
                type="submit"
                disabled={isCalculating}
            >
                {isCalculating ? "Calculando..." : "Simular empréstimo"}
            </FullWidthButton>
        </Form>
    );
}
