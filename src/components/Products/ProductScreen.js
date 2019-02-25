import React, { Component } from 'react';
import { Container } from 'native-base';
import { ToolBar } from './ToolBar';
import { Products } from './Products';

class ProductScreen extends Component {
  render() {
    return (
      <Container>
        <ToolBar navigation={this.props.navigation}/>
        <Products />
      </Container>
    );
  }
}

export { ProductScreen };
