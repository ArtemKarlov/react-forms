import { HTMLInputTypeAttribute, useId } from "react";
import {
  FieldError,
  InternalFieldName,
  UseFormRegisterReturn,
} from "react-hook-form";
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from "@chakra-ui/react";

export type FormFieldInputProps = {
  type?: HTMLInputTypeAttribute;
  label: string;
  placeholder?: string;
  error?: FieldError;
  register: UseFormRegisterReturn<InternalFieldName>;
};

export const FormFieldInput = ({
  type = "text",
  label,
  placeholder,
  error,
  register,
}: FormFieldInputProps) => {
  const id = useId();

  return (
    <FormControl
      position="relative"
      pb="5"
      isInvalid={Boolean(error)}
      colorScheme="purple"
    >
      <FormLabel htmlFor={id} color="purple.600">
        {label}
      </FormLabel>
      <Input
        focusBorderColor="purple.300"
        errorBorderColor="pink.300"
        id={id}
        type={type}
        placeholder={placeholder}
        {...register}
      />
      <FormErrorMessage
        position="absolute"
        left="0"
        bottom="0"
        fontSize="xs"
        color="pink.500"
      >
        {error && error.message}
      </FormErrorMessage>
    </FormControl>
  );
};
