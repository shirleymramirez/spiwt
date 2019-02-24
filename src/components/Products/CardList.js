import React, { Component } from 'react';
import { Container, Text } from 'native-base';
import { AsyncStorage } from 'react-native';
import { Product } from './Product';

class CardList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            productIds: [],
        }
    }

    async componentDidMount() {
        try {
            const ids = await AsyncStorage.getItem('productIds');
            const parseId = ids ? JSON.parse(ids): [];
            console.log(ids);   
            this.setState({ productIds: parseId })
        } catch (error) {
            // Error retrieving data
            alert(error);
        }
    }

    render() {
        console.log(this.state.producIds);
        return (
            <Container>
               {this.state.productIds.length === 0 ?
                    <Text style={{ fontSize: 20, padding: 20 }}>Your list is empty. Click scan to retrieve product information</Text> :
                    this.state.productIds.map(productId => <Product key={productId} id={productId} />)
                }
            </Container>
        );
    }
};

export { CardList };