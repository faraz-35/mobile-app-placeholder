import {
  FormControl,
  IFormControlProps,
  Input,
  WarningOutlineIcon,
} from "native-base";
import React from "react";

interface IProps {
  containerStyles?: IFormControlProps;
  value: string;
  name: string;
  error: string | null;
  handleChange: (name: string, text: string) => void;
  label?: string;
  placeholder?: string;
  isPassword?: boolean;
  hideLabel?: boolean;
}

const FormInput: React.FC<IProps> = ({
  containerStyles,
  value,
  name,
  label,
  placeholder,
  error,
  handleChange,
  isPassword = false,
  hideLabel = false,
}) => {
  return (
    <FormControl isInvalid={!!error} w="75%" maxW="300px" {...containerStyles}>
      <FormControl.Label>
        {!hideLabel && (label || name.charAt(0).toUpperCase() + name.slice(1))}
      </FormControl.Label>
      <Input
        placeholder={placeholder || `Enter ${name}`}
        value={value}
        onChangeText={(text) => handleChange(name, text)}
        type={isPassword ? "password" : "text"}
      />
      <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
        {error}
      </FormControl.ErrorMessage>
    </FormControl>
  );
};
export default FormInput;
