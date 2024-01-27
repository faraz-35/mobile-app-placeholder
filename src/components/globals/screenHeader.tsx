import { Box } from "native-base";

import SuccessAlert from "./successAlert";
import ErrorAlert from "./errorAlert";

const ScreenHeader = () => {
  return (
    <>
      <Box h={12} w="full" mb={3}></Box>
      <SuccessAlert />
      <ErrorAlert />
    </>
  );
};
export default ScreenHeader;
