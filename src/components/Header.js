import React, { Component } from 'react';
import { Header as NativeHeader, Body } from 'native-base';
import { Image } from 'react-native';
import logo from '../images/Spectrapure.png';

class Header extends Component {
    render() {
        return (
            <NativeHeader>
                <Body>
                    <Image
                        source={logo}
                        style={{ flex: 1 }}
                        resizeMode='contain'
                    />
                </Body>
            </NativeHeader>
        );
    }
}

export { Header };


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
