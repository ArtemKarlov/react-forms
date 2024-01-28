import { Flex, RadioGroup, Radio, RadioGroupProps } from "@chakra-ui/react";

export type Option<T> = {
  value: T;
  label: string;
};

export type RadioInputProps = {
  options: Array<Option<string>>;
} & Omit<RadioGroupProps, "children">;

export const RadioInput = ({ options, ...otherProps }: RadioInputProps) => {
  return (
    <RadioGroup colorScheme="purple" {...otherProps}>
      <Flex justify="flex-start" gap={4} wrap="wrap">
        {options.map(({ value, label }) => (
          <Radio key={value} value={value}>
            {label}
          </Radio>
        ))}
      </Flex>
    </RadioGroup>
  );
};
