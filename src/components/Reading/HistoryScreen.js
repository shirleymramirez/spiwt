import React, { Component } from 'react';
import { Container, Text, H1 } from 'native-base';
import { ToolBar } from '../ToolBar';

class HistoryScreen extends Component {
    render() {
        return (
            <Container>
                <ToolBar
                    title="Reading History"
                    iconName="plus-circle-outline"
                    actionText="Add"
                />
                <Text><H1>This is History Screen</H1></Text>
            </Container>
        )
    }
}

export { HistoryScreen };