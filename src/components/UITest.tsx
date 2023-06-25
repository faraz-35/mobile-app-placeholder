import Card from "@src/UI/Card";
import { Text, Button, VStack, Input, Box, Heading } from "native-base";

const UITest = () => {
  return (
    <VStack space={3}>
      <Text> Text</Text>
      <Button>Button</Button>
      <Input></Input>
      <Card
        containerStyles={{ height: "40", width: "40", margin: "10" }}
      ></Card>
      <Heading>Heading</Heading>
      <Text fontSize={"3xl"}>Text</Text>
    </VStack>
  );
};

export default UITest;
