// Library Imports
import React, { Component } from "react";
import { TextInput } from "react-native";

// Relative Imports
import { Container, Field, Label, Border, Cell, Name } from "./styles";
// this.props.navigation.navigate("Tokens")
const Input = ({
  type,
  value,
  onChangeText,
  placeholder,
  border,
  label,
  link,
  chooseToken,
  onPress
}) => {
  console.log("VALUE", value);
  return (
    <>
      <Container>
        <Label>{label}</Label>
        {type === "input" && (
          <Field
            placeholder={placeholder}
            onChangeText={onChangeText}
            value={value}
            returnKeyType="done"
            keyboardType="decimal-pad"
          />
        )}
        {type === "cell" && (
          <Cell onPress={onPress}>
            <Name>{value.length > 1 ? value : placeholder}</Name>
          </Cell>
        )}
      </Container>
      {border === "none" ? null : <Border />}
    </>
  );
};

export default Input;
