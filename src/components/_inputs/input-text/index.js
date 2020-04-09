// Library Imports
import React, { Component, Fragment } from "react";
import { TextInput, Switch } from "react-native";

// Relative Imports'
import { Container } from "./styles";
import { Label, Input } from "../../../constants/type.js";
import Border from "../../../components/border";

const InputText = ({
  label,
  value,
  placeholder,
  onChangeText,
  border,
  secureTextEntry,
  ...rest
}) => {
  return (
    <Container>
      <Label>{label}</Label>
      <Input
        value={value}
        placeholder={placeholder}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        returnKeyType="done"
        keyboardType="decimal-pad"
        {...rest}
      />
      {border ? <Border /> : null}
    </Container>
  );
};

export default InputText;
