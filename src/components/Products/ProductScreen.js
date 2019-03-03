import React, { Component } from 'react';
import { Container } from 'native-base';
import { ToolBar } from '../ToolBar';
import { Products } from './Products';

class ProductScreen extends Component {
  render() {
    return (
      <Container>
        <ToolBar 
          title="Products" 
          onActionClick={() => this.props.navigation.navigate('QRCode')} 
          iconName="qrcode-scan"
          actionText="Scan"
          />
        <Products navigation={this.props.navigation}/>
      </Container>
    );
  }
}

export { ProductScreen };
