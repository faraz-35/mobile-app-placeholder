import { Button, HStack, Text, VStack } from "native-base";

import { useAppDispatch, useAppSelector } from "@src/store";
import { removeUserObject } from "@src/store/slices/user/actions/object";

const GetObjects: React.FC = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user.data) as User;

  const handleObjectRemove = (id: string) => {
    dispatch(removeUserObject({ id: user.id, objectId: id }));
  };

  return (
    <VStack space={4} alignItems="center" width="100%" marginY={3}>
      {user.objects?.map((object, id) => (
        <HStack key={id} alignItems="center" space={2}>
          <Text>{object}</Text>
          <Button onPress={() => handleObjectRemove(object)}>remove</Button>
        </HStack>
      ))}
    </VStack>
  );
};
export default GetObjects;
