import React from "react";
import { Container } from "native-base";

import AddObject from "./addObject";
import GetObjects from "./getObjects";

const Home: React.FC = () => {
  return (
    <Container>
      <GetObjects />
      <AddObject />
    </Container>
  );
};

export default Home;
