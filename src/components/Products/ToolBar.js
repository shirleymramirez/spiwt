import React, { Component } from 'react';
import { Button, Icon, Text } from 'native-base';
import { View } from 'react-native';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

class ToolBar extends Component {
    render() {
        return (
            <View style={{ paddingTop: 5, paddingBottom: 5, backgroundColor: '#2E73E4', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <Text style={{ color: 'white', fontSize: 22, paddingLeft: 15 }}>Products</Text>
                <Button transparent iconLeft
                  onPress={() => {
                      this.props.navigation.navigate('QRCode');
                  }}
                >
                    <MaterialCommunityIcon
                        name="qrcode-scan" size={20} color={'white'}
                    />
                    <Text style={{color: 'white', paddingLeft: 8 }}>Scan</Text>
                </Button>
            </View>
        );
    }
};

export { ToolBar };