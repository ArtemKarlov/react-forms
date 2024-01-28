import {
  UseControllerProps,
  useController,
  FieldValues,
} from "react-hook-form";
import { Flex, RadioGroup, Radio } from "@chakra-ui/react";

import { FormFieldWrapper, FormFieldWrapperPassProps } from ".";

export type Option<T> = {
  value: T;
  label: string;
};

type FormFieldRadioProps<T extends FieldValues> = UseControllerProps<T> &
  FormFieldWrapperPassProps & {
    options: Array<Option<string>>;
  };

export const FormFieldRadio = <T extends FieldValues>({
  id,
  label,
  error,
  options,
  ...controllerProps
}: FormFieldRadioProps<T>) => {
  const { field } = useController(controllerProps);

  return (
    <FormFieldWrapper
      id={id}
      label={label}
      error={error}
      renderControl={({ id: controlId }) => (
        <RadioGroup id={controlId} colorScheme="purple" {...field}>
          <Flex justify="flex-start" gap={4} wrap="wrap">
            {options.map(({ value, label }) => (
              <Radio key={value} value={value}>
                {label}
              </Radio>
            ))}
          </Flex>
        </RadioGroup>
      )}
    />
  );
};
