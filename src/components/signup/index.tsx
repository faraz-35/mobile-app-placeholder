import React from "react";
import { Button, VStack, Text } from "native-base";

import useForm from "@src/hooks/useForm";
import FormInput from "@src/UI/FormInput";
import { userSignup } from "@src/store/slices/user";
import { useAppDispatch } from "@src/store";
import { useAuthNavigation } from "@src/stacks/Auth";

const Signup: React.FC = () => {
  const navigation = useAuthNavigation();
  const dispatch = useAppDispatch();

  const handleSignup = () => {
    dispatch(userSignup({ email, password }));
  };

  const { values, errors, handleChange, handleSubmit } = useForm(
    {
      email: "",
      password: "",
    },
    handleSignup
  );
  const { email, password } = values;
  const [emailKey, passwordKey] = Object.keys(values);

  return (
    <VStack space={4} alignItems="center">
      <FormInput
        value={email}
        name={emailKey}
        error={errors.email}
        handleChange={handleChange}
        placeholder="abc@email.com"
      />
      <FormInput
        value={password}
        name={passwordKey}
        error={errors.password}
        handleChange={handleChange}
        isPassword
      />

      <Button onPress={handleSubmit}>Signup</Button>
      <Text onPress={() => navigation.navigate("Login")}>
        Already have an account? Login
      </Text>
    </VStack>
  );
};

export default Signup;
