import React, { forwardRef, InputHTMLAttributes } from "react";
import { NumericFormat, NumericFormatProps } from "react-number-format";
import {
    InputWrapper,
    InputField,
    Label,
    InputErrorMessage,
    Container,
} from "./input.styles";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
    ({ label, id, error, ...props }, ref) => {
        return (
            <Container>
                <Label htmlFor={id} haserror={!!error}>
                    {label}
                </Label>
                <InputWrapper>
                    <InputField
                        ref={ref}
                        id={id}
                        aria-invalid={!!error}
                        aria-describedby={error ? `${id}-error` : undefined}
                        {...props}
                    />
                </InputWrapper>
                {error && (
                    <InputErrorMessage id={`${id}-error`}>
                        {error}
                    </InputErrorMessage>
                )}
            </Container>
        );
    }
);

Input.displayName = "Input";

export interface NumericInputProps extends NumericFormatProps {
    label?: string;
    error?: string;
}

const NumericInput = React.forwardRef<HTMLInputElement, NumericInputProps>(
    ({ id, label, error, ...props }) => {
        return (
            <Container>
                <Label htmlFor={id} haserror={!!error}>
                    {label}
                </Label>
                <NumericFormat customInput={Input} {...props} />
                {error && (
                    <InputErrorMessage id={`${id}-error`}>
                        {error}
                    </InputErrorMessage>
                )}
            </Container>
        );
    }
);

NumericInput.displayName = "NumericInput";

export { Input, NumericInput };
