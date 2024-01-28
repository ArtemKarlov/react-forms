import { HTMLInputTypeAttribute } from "react";
import { InternalFieldName, UseFormRegisterReturn } from "react-hook-form";
import { Input } from "@chakra-ui/react";

import { FormFieldWrapper, type FormFieldWrapperPassProps } from ".";

type FormFieldInputProps = FormFieldWrapperPassProps & {
  type?: HTMLInputTypeAttribute;
  placeholder?: string;
  register: UseFormRegisterReturn<InternalFieldName>;
};

export const FormFieldInput = ({
  id,
  label,
  error,
  type = "text",
  placeholder,
  register,
}: FormFieldInputProps) => {
  return (
    <FormFieldWrapper
      id={id}
      label={label}
      error={error}
      renderControl={({ id: controlId }) => (
        <Input
          focusBorderColor="purple.300"
          errorBorderColor="pink.300"
          id={controlId}
          type={type}
          placeholder={placeholder}
          {...register}
        />
      )}
    />
  );
};
