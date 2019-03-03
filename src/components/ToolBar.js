import React, { Component } from 'react';
import { Button, Icon, Text } from 'native-base';
import { View } from 'react-native';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

class ToolBar extends Component {
    render() {
        return (
            <View style={{ paddingTop: 5, paddingBottom: 5, backgroundColor: '#2E73E4', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <Text style={{ color: 'white', fontSize: 22, paddingLeft: 15 }}>{this.props.title}</Text>
                <Button transparent iconLeft
                  onPress={() => {
                      this.props.onActionClick();
                  }}
                >
                    <MaterialCommunityIcon
                        name={this.props.iconName} size={20} color={'white'}
                    />
                    <Text style={{color: 'white', paddingLeft: 8 }}>{this.props.actionText}</Text>
                </Button>
            </View>
        );
    }
};

export { ToolBar };