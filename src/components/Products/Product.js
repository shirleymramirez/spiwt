
import React, { Component } from 'react';
import { Text, Card, CardItem, Left, Body, Thumbnail, Button, Right } from 'native-base';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { PRODUCTS } from '../../const/products';

class Product extends Component {
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
                <CardItem>
                    <Left>
                        <Button transparent vertical>
                            <MaterialCommunityIcon name="file-document-box" style={{ fontSize: 20}} />
                            <Text>Manual</Text>
                        </Button>
                    </Left>
                    <Body>
                        <Button transparent vertical>
                            <MaterialCommunityIcon name="water-percent" style={{ fontSize: 20 }}/>
                            <Text>Reading</Text>
                        </Button>
                    </Body>
                    <Right>
                        <Button transparent vertical>
                            <MaterialCommunityIcon name="delete" style={{ color: 'red', fontSize: 20}}/>
                            <Text>Delete</Text>
                        </Button>
                    </Right>
                </CardItem>
            </Card>
        );
    }
}

export { Product };
