// Library Imports
import React, { Component, Fragment } from "react";
import { TextInput, View, Text } from "react-native";
import SegmentedController from "../../components/segment_controller";

import Button from "../../components/button";
import Border from "../../components/border";

import InputText from "../../components/_inputs/input-text";
import InputLink from "../../components/_inputs/input-link";
import InputMultiline from "../../components/_inputs/input-multiline";
import Input_Information from "../../components/_inputs/input_information";

// Relative Imports
import { Container, Label, PreviewLabel, Preview } from "./styles";

class Transfer extends Component {
  state = {
    values: ["Send", "Receive"],
    selectedIndex: 0,
    // Fields
    type: "Transfer",
    from_asset: "Select Asset",
    from_amount: "",
    from_ticker: "",
    recipient: "",
    payment_id: "",
  };

  changeTabs = (selectedIndex) => {
    this.setState({
      selectedIndex: selectedIndex,
    });
  };

  changeInput = (event) => {
    this.setState({
      value: value,
    });
  };

  selectToken = () => {
    this.props.navigation.navigate("Tokens", {
      onPress: this.chooseToken,
    });
  };

  reviewTransaction = () => {
    this.props.navigation.navigate("Review", {
      params: { ticker: from_ticker, ...this.state },
    });
  };

  chooseToken = ({ ticker, token }) => {
    this.props.navigation.navigate("Transfer");
    this.setState({
      from_asset: token,
      from_ticker: ticker,
    });
  };

  handleReview = () => {
    this.props.navigation.navigate("Modal", {
      screen: "Review",
      params: { ticker: this.state.from_ticker, ...this.state },
    });
  };

  render() {
    const {
      values,
      selectedIndex,
      from_asset,
      from_amount,
      recipient,
      from_ticker,
      payment_id,
    } = this.state;

    return (
      <Container>
        <SegmentedController
          values={values}
          selectedIndex={selectedIndex}
          onPress={this.changeTabs}
        />
        {this.state.selectedIndex === 0 ? (
          <Fragment>
            <Border />
            <InputLink
              label="From Asset"
              onPress={this.selectToken}
              chooseToken={this.chooseToken}
              value={from_asset}
              placeholder="Select Asset"
              border={true}
            />
            <InputText
              label="Amount"
              placeholder="Enter Amount"
              value={from_amount}
              border={true}
              onChangeText={(from_amount) => this.setState({ from_amount })}
            />
            <InputText
              label="Recipient"
              placeholder="Enter recipient"
              value={recipient}
              border={true}
              onChangeText={(recipient) => this.setState({ recipient })}
            />

            <InputText
              label="Payment ID (Opitional)"
              border="none"
              placeholder="Enter payment id"
              value={payment_id}
              onChangeText={(payment_id) => this.setState({ payment_id })}
            />
            <Border />
            <Input_Information />
            <Preview onPress={this.handleReview}>
              <PreviewLabel>Preview Transfer</PreviewLabel>
            </Preview>
            <Border />
          </Fragment>
        ) : (
          <Fragment>
            <Border />
            <InputLink
              label="Select Address"
              chooseToken={this.chooseToken}
              value={from_asset}
              placeholder="Main"
              border={true}
            />

            <InputMultiline
              label="Haven  Address"
              value={
                "xhv75978c59963342e8979459f5b938621214b740fec1a72379cd0b54a78508cb79"
              }
              placeholder="Select Asset"
              border="true"
              icon={false}
              editable={false}
              onChangeText={(address) => this.setState({ address })}
            />
            <Border />
            <Preview onPress={() => {}}>
              <PreviewLabel>Copy Address</PreviewLabel>
            </Preview>
            <Border />
          </Fragment>
        )}
      </Container>
    );
  }
}

export default Transfer;
