import styled from "styled-components";
import { View, Text, TouchableOpacity } from "react-native";

export const Container = styled.View`
  flex: 1;
  background: papayawhip;

  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const Label = styled.Text`
  font-size: 20px;
`;

export const Button = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Balances = styled.View`
  height: 200px;
  width: 100%;
  background: #2b2e32;
  align-items: center;
  justify-content: center;
`;

export const Balance = styled.Text`
  font-size: 40px;
  font-weight: bold;
  color: #fff;
`;

export const Wrapper = styled.View`
  height: auto;
  width: 100%;
  background: palegreen;
  padding: 8px;
`;
