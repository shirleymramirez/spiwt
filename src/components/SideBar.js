import React, { Component } from 'react';
import { Container, Text, List } from 'native-base';

class SideBar extends Component {
    render() {
        return (
            <Container>
                <Text>Hello World!</Text>
                <List
                    dataArray={routes}
                    renderRow={data => {
                        return (
                            <ListItem
                                button
                                onPress={() => this.props.navigation.navigate(data)}>
                                <Text>{data}</Text>
                            </ListItem>
                        );
                    }}
                />

            </Container>
        );
    }
};

export { SideBar }