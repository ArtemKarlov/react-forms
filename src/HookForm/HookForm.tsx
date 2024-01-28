import { useForm, SubmitHandler } from "react-hook-form";
import { Button, Flex, Box, VStack } from "@chakra-ui/react";
import { sendFormData } from "../services/api";
import { FormFieldInput, FormFieldRadio } from "./components";
import { FormValues } from "./HookForm.types";
import { GENDER_OPTIONS } from "./HookForm.consts";

export const HookForm = () => {
  const {
    control,
    handleSubmit,
    register,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    mode: "onSubmit",
  });

  const onSubmit: SubmitHandler<FormValues> = async (formValues) => {
    await sendFormData(formValues);
    console.log(errors);
    reset();
  };

  return (
    <Flex bg="gray.100" align="center" justify="center" minH="100vh" py={6}>
      <Box bg="white" p={6} rounded="md" w="md">
        <form onSubmit={handleSubmit(onSubmit)}>
          <VStack spacing={0} align="flex-start">
            <FormFieldInput
              register={register("firstname", { required: "Required" })}
              placeholder="First name"
              label="First name"
              error={errors.firstname}
            />
            <FormFieldInput
              register={register("lastname", { required: "Required" })}
              placeholder="Last name"
              label="Last name"
              error={errors.lastname}
            />
            <FormFieldInput
              register={register("email", { required: "Required" })}
              type="email"
              placeholder="E-mail"
              label="E-mail"
              error={errors.email}
            />
            <FormFieldInput
              register={register("password", { required: "Required" })}
              type="password"
              placeholder="Password"
              label="Password"
              error={errors.password}
            />
            <FormFieldInput
              register={register("passwordConfirmation", {
                required: "Required",
              })}
              type="password"
              placeholder="Password"
              label="Confirm Password"
              error={errors.passwordConfirmation}
            />
            <FormFieldRadio
              control={control}
              name="gender"
              rules={{ required: "Required" }}
              label="Gender"
              error={errors.gender}
              options={GENDER_OPTIONS}
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
