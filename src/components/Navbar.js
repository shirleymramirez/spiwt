import React, { Component } from 'react';
import { Container, Header, Left, Body, Right } from 'native-base';
import { Image } from 'react-native';
import logo from '../images/Spectrapure.png';

class Navbar extends Component {
    render() {
        return (
            <Container>
                <Header>
                    <Left />
                    <Body>
                        <Image
                            source={logo}
                            style={{ flex: 1 }}
                            resizeMode='contain'
                        />
                    </Body>
                    <Right />
                </Header>
            </Container>
        );
    }
}

export { Navbar };


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
