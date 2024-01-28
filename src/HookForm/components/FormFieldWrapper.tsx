import { ReactNode, useId } from "react";
import { FieldError } from "react-hook-form";
import { FormControl, FormErrorMessage, FormLabel } from "@chakra-ui/react";

type RenderControlProps = {
  id: string;
};

type FormFieldWrapperProps = {
  id?: string;
  label: string;
  error?: FieldError;
  renderControl: (props: RenderControlProps) => ReactNode;
};

export type FormFieldWrapperPassProps = Omit<
  FormFieldWrapperProps,
  "renderControl"
>;

export const FormFieldWrapper = ({
  id,
  label,
  error,
  renderControl,
}: FormFieldWrapperProps) => {
  const internalId = useId();
  const controlId = id ?? internalId;

  return (
    <FormControl
      position="relative"
      pb="5"
      isInvalid={Boolean(error)}
      colorScheme="purple"
    >
      <FormLabel htmlFor={controlId} color="purple.600">
        {label}
      </FormLabel>

      {renderControl({ id: controlId })}

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
