// Library Imports
import React, { Component } from "react";

// Relative Imports
import { Container } from "./styles";
import TextLink from "../../components/_inputs/input-link";

class Options extends Component {
  renderOptions = () => {
    const { data } = this.props.route.params;
    return data.map(o => {
      const { message, name } = o;
      console.log(message);
      return (
        <TextLink label={`Priority ${name}`} value={message} border={true} />
      );
    });
  };

  render() {
    this.props.navigation.setOptions({
      title: this.props.route.params.title,
      headerBackTitleVisible: false
    });
    return <Container>{this.renderOptions()}</Container>;
  }
}

export default Options;
