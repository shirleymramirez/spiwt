import React, { Component } from 'react';
import { Container, Body, Text } from 'native-base';
// import { View } from 'react-native';

class CardList extends Component {
    render() {
        return (
            <Container style={{ flex: 1, flexDirection: 'row', alignSelf: 'center', justifyContent: 'center'}}>
                <Body>
                    <Text style={{fontSize: 20, padding: 20 }}>Your list is empty. Click scan to retrieve product information</Text>
                </Body>
            </Container>
        );
    }
};

export { CardList };