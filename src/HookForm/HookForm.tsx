import { useForm, SubmitHandler } from "react-hook-form";
import { Button, Flex, Box, VStack } from "@chakra-ui/react";
import { sendFormData } from "../services/api";
import { FormFieldInput } from "./components/FormFieldInput";

export type FormValues = {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export const HookForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = async (formValues) => {
    await sendFormData(formValues);
  };

  return (
    <Flex bg="gray.100" align="center" justify="center" h="100vh">
      <Box bg="white" p={6} rounded="md">
        <form onSubmit={handleSubmit(onSubmit)}>
          <VStack spacing={0} align="flex-start">
            <FormFieldInput
              register={{ ...register("firstname", { required: "Required" }) }}
              label="First name"
              placeholder="First name"
              error={errors.firstname}
            />
            <FormFieldInput
              register={{ ...register("lastname", { required: "Required" }) }}
              label="Last name"
              placeholder="Last name"
              error={errors.lastname}
            />
            <FormFieldInput
              register={{ ...register("email", { required: "Required" }) }}
              type="email"
              label="E-mail"
              placeholder="E-mail"
              error={errors.email}
            />
            <FormFieldInput
              register={{ ...register("password", { required: "Required" }) }}
              type="password"
              label="Password"
              placeholder="Password"
              error={errors.password}
            />
            <FormFieldInput
              register={{
                ...register("confirmPassword", { required: "Required" }),
              }}
              type="password"
              label="Confirm Password"
              placeholder="Password"
              error={errors.confirmPassword}
            />
            <Button
              type="submit"
              mt={4}
              colorScheme="purple"
              width="full"
              isLoading={isSubmitting}
            >
              Submit
            </Button>
          </VStack>
        </form>
      </Box>
    </Flex>
  );
};
