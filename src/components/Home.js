import React, { Component } from 'react';
import { Container } from 'native-base';
import { Navbar } from './Navbar';
import { FooterTabIcon } from './FooterTabIcon';

class Home extends Component {
  render() {
    return (
      <Container>
        <Navbar />
        <FooterTabIcon />
      </Container>
    );
  }
}

export { Home };


// const styles = {
//   viewStyle: {
//     backgroundColor: 'white',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 200 },
//     shadowOpacity: 0.2
//   },
//   headerStyle: {
//     backgroundColor: '#EFEFEF'
//   },
//   imageStyle: {
//     flex: 1
//   }
// };
