import React, { Component } from 'react';
import { Button, Icon, Text } from 'native-base';
import { View } from 'react-native';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

class ToolBar extends Component {
    render() {
        return (
            <View style={{ height: 45, backgroundColor: '#2E73E4', flexDirection: 'row', justifyContent: 'space-between' }}>
                <Button transparent onPress={() => this.props.navigation.openDrawer()}>
                    <Icon 
                        name="menu" style={{fontSize:20, color: 'white'}}
                    />
                </Button>
                <Button transparent>
                    <Text style={{ color: 'white', fontSize: 22 }}>Product List</Text>
                </Button>
                <Button transparent iconLeft
                  onPress={() => this.props.navigation.navigate('QRCode')}
                >
                    <MaterialCommunityIcon
                        name="qrcode-scan" size={20} color={'white'}
                    />
                    <Text style={{color: 'white', marginLeft: 0 }}>Scan</Text>
                </Button>
            </View>
        );
    }
};

export { ToolBar };