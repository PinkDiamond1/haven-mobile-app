// Library Imports
import React, { Component, Fragment } from "react";
import { TextInput, Switch } from "react-native";

// Relative Imports
import { Container } from "./styles";
import { Label, Field } from "../../constants/type.js";
import Border from "../border/index.js";

const InputText = ({
  type,
  value,
  onChangeText,
  placeholder,
  border,
  label,
  link,
  chooseToken,
  onPress,
  secureTextEntry,
  toggle,
  ...rest
}) => {
  return (
    <Container>
      <Label>{label}</Label>
      <Field
        placeholder={placeholder}
        onChangeText={onChangeText}
        value={value}
        returnKeyType="done"
        keyboardType="decimal-pad"
        secureTextEntry={secureTextEntry}
      />
      {border ? <Border /> : null}
    </Container>
  );
};

export default InputText;
