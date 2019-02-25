import React, { Component } from 'react';
import { Text, Button } from 'native-base';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

class Action extends Component {
    render() {
        return(
            <Button transparent vertical onPress={() => {
                if (this.props.onPress) {
                    this.props.onPress();
                }}}>
                <MaterialCommunityIcon name={this.props.iconName} style={this.props.style} />
                <Text>{this.props.actionText}</Text>
            </Button>
        );
    };
}

export { Action };
