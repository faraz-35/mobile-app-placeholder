import Alert from "@src/UI/Alert";
import { useAppDispatch, useAppSelector } from "@src/store";
import { clearMessage } from "@src/store/slices/user";

const SuccessAlert = () => {
  const message = useAppSelector((state) => state.user.message);
  const dispatch = useAppDispatch();

  const deleteMessage = () => {
    dispatch(clearMessage());
  };

  if (!message) {
    return null;
  }
  return <Alert title={message} status="success" handleClose={deleteMessage} />;
};

export default SuccessAlert;
