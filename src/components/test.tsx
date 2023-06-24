import { Text } from "native-base";

import { getPosts, increment } from "@src/store/slices/testCounter";
import { useAppDispatch, useAppSelector } from "@src/store";

const Test = () => {
  const dispatch = useAppDispatch();
  const { value } = useAppSelector((root) => root.counter);

  const handleClick = () => {
    dispatch(getPosts(1));
    dispatch(increment());
  };
  return <Text onPress={handleClick}>test : {value}</Text>;
};

export default Test;
