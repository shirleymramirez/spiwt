import React, { Component } from 'react';
import { Container } from 'native-base';
import { ToolBar } from './ToolBar';
import { DrawerMenu } from './DrawerMenu';
import { CardList } from './CardList';

class ProductScreen extends Component {
  render() {
    return (
      <Container>
        <ToolBar navigation={this.props.navigation}/>
        <DrawerMenu />
        <CardList />
      </Container>
    );
  }
}

export { ProductScreen };
