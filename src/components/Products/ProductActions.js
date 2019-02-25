import React, { Component } from 'react';
import { CardItem, Left, Body, Right } from 'native-base';

import { Action } from '../Action';

class ProductActions extends Component {
    render() {
        return (
            <CardItem>
                <Left>
                    <Action iconName="file-document-box" actionText="Manual" style={{ fontSize: 20 }}/>
                </Left>
                <Body>
                    <Action iconName="water-percent" actionText="Reading" style={{ fontSize: 20 }}/>
                </Body>
                <Right>
                    <Action iconName="delete" actionText="Delete" style={{ color: 'red', fontSize: 20 }} onPress={() => this.props.onDelete()}/>
                </Right>
            </CardItem>
        );
    }
}

export {  ProductActions };
