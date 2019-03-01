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
        this.setState({ productIds: productIds })
    }

    async _deleteHandler(idToBeRemoved) {
        const idsAfterDelete = await SyncStorage.deleteProduct(idToBeRemoved);
        this.setState({ productIds: idsAfterDelete })
    }

    _viewPdfHandler(userManualURL) {
        this.props.navigation.navigate('ViewPdf', { userManualURL });
    }

    render() {
        return (
            <Container style={{ backgroundColor: '#efefef', padding: 5 }}>
               {this.state.productIds.length === 0 ?
                    <Text style={{ fontSize: 20, padding: 20, textAlign: 'center' }}>List is empty. Click scan to retrieve product information</Text> :
                    this.state.productIds.map(productId =>
                      <Product 
                        key={productId}
                        id={productId}
                        onDelete={(idToBeRemoved) => this._deleteHandler(idToBeRemoved)} 
                        onViewPdf={(userManualURL) => this._viewPdfHandler(userManualURL)} 
                      />
                    )
                }
            </Container>
        );
    }
};

export { Products };