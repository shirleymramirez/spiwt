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
