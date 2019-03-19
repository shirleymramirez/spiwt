
import React, { Component } from 'react';
import { Text, Card, CardItem, Left, Body, Thumbnail } from 'native-base';

import { PRODUCTS } from '../../const/products';
import { ProductActions } from './ProductActions';

class Product extends Component {
    _deleteHandler() {
        this.props.onDelete(this.props.id);
    }

    _viewPdfHandler() {
        const product = PRODUCTS[this.props.id];
        this.props.onViewPdf(product.userManualURL);
    }

    _viewHistoryScreen() {
        this.props.onViewHistoryScreen();
    }

    render() {
        const product = PRODUCTS[this.props.id];
        return(
            <Card>
                <CardItem>
                    <Left>
                        <Thumbnail source={{ uri: product.imageURL }} style={{ height:120, width:120 }}/>
                        <Body style={{ paddingLeft: 10, paddingRight: 10 }}>
                            <Text>{product.description}</Text>
                            <Text note>{this.props.id}</Text>
                        </Body>
                    </Left>
                </CardItem>
                <ProductActions
                  onDelete={() => this._deleteHandler()}
                  onViewPdf={() => this._viewPdfHandler()}
                  onViewHistoryScreen={() => this._viewHistoryScreen()}
                />
            </Card>
        );
    }
}

export { Product };
