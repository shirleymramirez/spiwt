import React, { Component } from 'react';
import { Container, Text } from 'native-base';
import { AsyncStorage } from 'react-native';
import { Product } from './Product';

class Products extends Component {
    constructor(props) {
        super(props);
        this.state = {
            productIds: [],
        }
        this._deleteHandler = this._deleteHandler.bind(this);
    }

    async componentDidMount() {
        try {
            const ids = await AsyncStorage.getItem('productIds');
            const parsedIds = ids ? JSON.parse(ids): [];
            console.log(`parsedIds: ${parsedIds}`);
            this.setState({ productIds: parsedIds })
        } catch (error) {
            // Error retrieving data
            alert(error);
        }
    }

    async _deleteHandler(idTobeRemoved) {
        const ids = await AsyncStorage.getItem('productIds');
        const parsedIds = ids ? JSON.parse(ids) : [];
        console.log(parsedIds);
        console.log(idTobeRemoved);
        const idsAfterFilter = parsedIds.filter(id => id !== idTobeRemoved);
        console.log(`idsAfterFilter: ${idsAfterFilter}`);
        await AsyncStorage.setItem('productIds', JSON.stringify(idsAfterFilter));
        this.setState({ productIds: idsAfterFilter })
    }

    render() {
        console.log(this.state.producIds);
        return (
            <Container>
               {this.state.productIds.length === 0 ?
                    <Text style={{ fontSize: 20, padding: 20 }}>Your list is empty. Click scan to retrieve product information</Text> :
                    this.state.productIds.map(productId => <Product key={productId} id={productId} onDelete={(idTobeRemoved) => this._deleteHandler(idTobeRemoved)} />)
                }
            </Container>
        );
    }
};

export { Products };