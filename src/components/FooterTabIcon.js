import React, { Component } from 'react';
import { Footer, FooterTab, Button } from 'native-base';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
// import MaterialIcon from 'react-native-vector-icons/MaterialIcons';


class FooterTabIcon extends Component {
    render() {
        return (
            <Footer>
                <FooterTab>
                    <Button vertical active>
                        {/* <MaterialCommunityIcon name="qrcode-scan" size={20}/> */}
                        <MaterialCommunityIcon name="facebook-box" size={20} color={'blue'}/>
                        {/* <Text>QR Code</Text> */}
                    </Button>
                    <Button vertical>
                        {/* <MaterialIcon name="shopping-cart" size={20}/> */}
                        <MaterialCommunityIcon name="twitter" size={20} color={'blue'} />
                        {/* <Text>Order</Text> */}
                    </Button>
                    <Button vertical>
                        <MaterialCommunityIcon name="youtube" size={20} color={'red'}/>
                        {/* <Text>Tech Support</Text> */}
                    </Button>
                </FooterTab>
            </Footer>
        );
    }
}

export { FooterTabIcon };
