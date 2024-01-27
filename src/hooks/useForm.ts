import { useState } from "react";
import { GestureResponderEvent } from "react-native";

import { isValidEmail } from "@src/utils";

type FormErrors<T> = {
  [K in keyof T]: string | null;
};

const useForm = <T extends Record<string, string>>(
  initialValues: T,
  onSubmit: () => void,
  optionalValues?: (keyof T)[]
) => {
  const [values, setValues] = useState<T>(initialValues);
  const [errors, setErrors] = useState<FormErrors<T>>({} as FormErrors<T>);

  const handleChange = (name: string, value: string) => {
    setValues((prevValues) => ({ ...prevValues, [name]: value }));
    setErrors((prevValues) => ({ ...prevValues, [name]: null }));
  };

  const handleSubmit = (e: GestureResponderEvent) => {
    e.preventDefault();

    // Form Validation
    const validationErrors: FormErrors<T> = {} as FormErrors<T>;
    Object.entries(values).forEach(([key, val]) => {
      if (!optionalValues?.includes(key as keyof T) && val.trim() === "") {
        validationErrors[key as keyof T] = "This field is required";
      } else if (key === "email" && !isValidEmail(val)) {
        validationErrors[key as keyof T] = "Invalid email format";
      }
    });

    if (Object.keys(validationErrors).length === 0) {
      onSubmit();
      setValues(initialValues);
    } else {
      setErrors(validationErrors);
    }
  };

  return {
    values,
    errors,
    handleChange,
    handleSubmit,
  };
};

export default useForm;
