import { Button, VStack } from "native-base";

import FormInput from "@src/UI/FormInput";
import useForm from "@src/hooks/useForm";
import { useAppDispatch, useAppSelector } from "@src/store";
import { addUserObject } from "@src/store/slices/user/actions/object";

const AddObject: React.FC = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user.data!.id);

  const handleObjectAdd = () => {
    dispatch(addUserObject({ id: user, objectId }));
  };

  const { values, errors, handleChange, handleSubmit } = useForm(
    {
      objectId: "",
    },
    handleObjectAdd
  );
  const { objectId } = values;
  const [objectKey] = Object.keys(values);

  return (
    <VStack space={4} alignItems="center" width="100%">
      <FormInput
        value={objectId}
        name={objectKey}
        error={errors.objectId}
        handleChange={handleChange}
      />

      <Button onPress={handleSubmit}>Add Object</Button>
    </VStack>
  );
};
export default AddObject;
