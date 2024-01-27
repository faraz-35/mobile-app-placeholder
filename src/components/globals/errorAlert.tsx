import Alert from "@src/UI/Alert";
import { useAppDispatch, useAppSelector } from "@src/store";
import { clearError } from "@src/store/slices/user";

const ErrorAlert = () => {
  const error = useAppSelector((state) => state.user.error);
  const dispatch = useAppDispatch();

  const deleteError = () => {
    dispatch(clearError());
  };
  if (!error) {
    return null;
  }
  return <Alert title={error} status="error" handleClose={deleteError} />;
};

export default ErrorAlert;
