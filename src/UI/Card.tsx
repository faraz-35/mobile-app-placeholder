import { Box, IBoxProps } from "native-base";
import React from "react";

interface IProps {
  containerStyles?: IBoxProps;
}

const Card: React.FC<IProps> = ({ containerStyles }) => {
  return <Box bg={"black"} rounded={"lg"} {...containerStyles}></Box>;
};
export default Card;
