import React, { Component } from 'react';
import { Container, Text } from 'native-base';

import { Product } from './Product';
import { SyncStorage } from '../../utils/SyncStorage';

class Products extends Component {
    constructor(props) {
        super(props);
        this.state = {
            productIds: [],
        }
    }

    componentDidMount() {
        this._subs = this.props.navigation.addListener('didFocus', () => this._loadProducts());
    }

    componentWillUnmount() {
        this._subs.remove();
    }

    async _loadProducts() {
        const productIds = await SyncStorage.getProducts();
        console.log(`_loadProducts: ${productIds}`);
        this.setState({ productIds: productIds })
    }

    async _deleteHandler(idToBeRemoved) {
        const idsAfterDelete = await SyncStorage.deleteProduct(idToBeRemoved);
        console.log(idsAfterDelete);
        this.setState({ productIds: idsAfterDelete })
    }

    render() {
        return (
            <Container>
               {this.state.productIds.length === 0 ?
                    <Text style={{ fontSize: 20, padding: 20 }}>Your list is empty. Click scan to retrieve product information</Text> :
                    this.state.productIds.map(productId => <Product key={productId} id={productId} onDelete={(idToBeRemoved) => this._deleteHandler(idToBeRemoved)} />)
                }
            </Container>
        );
    }
};

export { Products };