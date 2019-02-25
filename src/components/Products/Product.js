
import React, { Component } from 'react';
import { Text, Card, CardItem, Left, Body, Thumbnail } from 'native-base';

import { PRODUCTS } from '../../const/products';
import { ProductActions } from './ProductActions';

class Product extends Component {
    _deleteHandler() {
        this.props.onDelete(this.props.id);
    }

    render() {
        const product = PRODUCTS[this.props.id];
        return(
            <Card>
                <CardItem>
                    <Left>
                        <Thumbnail source={{ uri: product.imageURL }} style={{ height:100, width:100 }}/>
                        <Body>
                            <Text>{product.description}</Text>
                            <Text note>{this.props.id}</Text>
                        </Body>
                    </Left>
                </CardItem>
                <ProductActions onDelete={() => this._deleteHandler()} />
            </Card>
        );
    }
}

export { Product };
