import { Button, VStack, Text, HStack } from "native-base";

import { useAppDispatch, useAppSelector } from "@src/store";
import { userAccountDelete } from "@src/store/slices/user/actions/profile";
import ChangePassword from "./changePassword";

const Profile: React.FC = () => {
  const user = useAppSelector((state) => state.user.data) as User;

  return (
    <VStack space={3} width="100%" alignItems="center">
      <UserInfo user={user} />
      <ChangePassword />
      <DeleteUser id={user.id} />
    </VStack>
  );
};

interface IUserInfoProps {
  user: User;
}
const UserInfo: React.FC<IUserInfoProps> = ({ user }) => {
  const { email, username } = user;

  return (
    <>
      <HStack space={2}>
        <Text>Email:</Text>
        <Text>{email}</Text>
      </HStack>
      <HStack space={2}>
        <Text>Username:</Text>
        <Text>{username}</Text>
      </HStack>
    </>
  );
};

interface IDeleteUserProps {
  id: string;
}
const DeleteUser: React.FC<IDeleteUserProps> = ({ id }) => {
  const dispatch = useAppDispatch();

  const deleteUser = () => {
    dispatch(userAccountDelete({ id }));
  };

  return <Button onTouchEnd={deleteUser}>Delete</Button>;
};

export default Profile;
