// Library Imports
import React from "react";

// Relative Imports
import { Container, Label } from "./styles";

const Next = ({ onPress, label }) => {
  return (
    <Container onPress={onPress}>
      <Label>{label}</Label>
    </Container>
  );
};

export default Next;
