import { Box, Button, Text } from "native-base";

const Test1 = ({ navigation }: any) => {
  return (
    <Box flex={1} bg="#fff" alignItems="center" justifyContent="center">
      <Text>MCQs APP 1</Text>
      <Button onPress={() => navigation.navigate("Test2")}>Go to test2</Button>
    </Box>
  );
};

export default Test1;
