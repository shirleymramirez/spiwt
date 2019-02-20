import React, { Component } from 'react';
import { Container } from 'native-base';
import { Header } from './Header';
import { ToolBar } from './ToolBar';
import { DrawerMenu } from './DrawerMenu';
import { CardList } from './CardList';
import { FooterTabIcon } from './FooterTabIcon';

class Home extends Component {
  render() {
    return (
      <Container>
        <Header />
        <ToolBar />
        <DrawerMenu />
        <CardList />
      </Container>
    );
  }
}

export { Home };
