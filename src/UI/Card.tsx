import { Box } from "native-base";

interface IProps {
  containerStyles?: any; //TODO: Type should be some type/native-base/box
}

const Card: React.FC<IProps> = ({ containerStyles }) => {
  return <Box bg={"black"} rounded={"lg"} {...containerStyles}></Box>;
};
export default Card;
