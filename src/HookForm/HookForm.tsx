import { useForm, SubmitHandler } from "react-hook-form";
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
  Flex,
  Box,
  VStack,
} from "@chakra-ui/react";
import { sendFormData } from "../services/api";

type FormValues = {
  username: string;
  email: string;
  password: string;
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
          <VStack spacing={4} align="flex-start">
            <FormControl isInvalid={Boolean(errors.username)}>
              <FormLabel htmlFor="username">First name</FormLabel>
              <Input
                id="username"
                placeholder="User name"
                {...register("username", {
                  required: "This is required",
                  minLength: {
                    value: 4,
                    message: "Minimum length should be 4",
                  },
                })}
              />
              <FormErrorMessage>
                {errors.username && errors.username.message}
              </FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={Boolean(errors.email)}>
              <FormLabel htmlFor="email">Last name</FormLabel>
              <Input
                id="email"
                placeholder="email"
                {...register("email", {
                  required: "This is required",
                })}
              />
              <FormErrorMessage>
                {errors.email && errors.email.message}
              </FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={Boolean(errors.password)}>
              <FormLabel htmlFor="password">Last name</FormLabel>
              <Input
                id="password"
                placeholder="password"
                type="password"
                {...register("password", {
                  required: "This is required",
                })}
              />
              <FormErrorMessage>
                {errors.email && errors.email.message}
              </FormErrorMessage>
            </FormControl>
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
