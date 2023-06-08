import Test from "@src/components/test";
import { Box, Text } from "native-base";

const Test2 = () => {
  return (
    <Box flex={1} bg="#fff" alignItems="center" justifyContent="center">
      <Text>MCQs APP 2</Text>
      <Test />
    </Box>
  );
};

export default Test2;
