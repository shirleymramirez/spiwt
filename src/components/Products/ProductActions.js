import React, { Component } from 'react';
import { CardItem, Left, Body, Right } from 'native-base';

import { VerticalAction } from '../VerticalAction';

class ProductActions extends Component {
    render() {
        return (
            <CardItem>
                <Left>
                    <VerticalAction
                      iconName="file-document-box"
                      actionText="Manual"
                      style={{ fontSize: 24, color: '#2E73E4' }}
                      onPress={() => this.props.onViewPdf()}
                    />
                </Left>
                <Body>
                    <VerticalAction
                      iconName="water-percent"
                      actionText="Reading"
                      style={{ fontSize: 24, color: '#2E73E4' }}
                    />
                </Body>
                <Right>
                    <VerticalAction
                      iconName="delete"
                      actionText="Delete"
                      style={{ color: '#DA3731', fontSize: 24 }}
                      onPress={() => this.props.onDelete()}
                    />
                </Right>
            </CardItem>
        );
    }
}

export {  ProductActions };
