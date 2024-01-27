import { Button, VStack } from "native-base";

import FormInput from "@src/UI/FormInput";
import useForm from "@src/hooks/useForm";
import { useAppDispatch, useAppSelector } from "@src/store";
import { userPasswordChange } from "@src/store/slices/user/actions/profile";

const ChangePassword: React.FC = () => {
  const dispatch = useAppDispatch();
  const id = useAppSelector((state) => state.user.data!.id);

  const handleChnagePassword = () => {
    dispatch(userPasswordChange({ id, oldPassword, newPassword }));
  };

  const { values, errors, handleChange, handleSubmit } = useForm(
    {
      oldPassword: "",
      newPassword: "",
    },
    handleChnagePassword
  );
  const { oldPassword, newPassword } = values;
  const [oldPassKey, newPassKey] = Object.keys(values);

  return (
    <VStack space={4} alignItems="center">
      <FormInput
        value={oldPassword}
        name={oldPassKey}
        error={errors.oldPassword}
        handleChange={handleChange}
        label="Old Password"
        placeholder="Enter old password"
        isPassword
      />
      <FormInput
        value={newPassword}
        name={newPassKey}
        error={errors.newPassword}
        handleChange={handleChange}
        label="New Password"
        placeholder="Enter new password"
        isPassword
      />

      <Button onPress={handleSubmit}>Update</Button>
    </VStack>
  );
};

export default ChangePassword;
