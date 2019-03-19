import React, { Component } from 'react';
import { Container } from 'native-base';
import { ToolBar } from '../ToolBar';   
import { Reading } from './Reading';


class ReadingScreen extends Component {
    render() {
        return (
            <Container>
                <ToolBar
                    title="Reading History"
                    onActionClick={() => this.props.navigation.navigate('InputData')} 
                    iconName="plus-circle-outline"
                    actionText="Add"
                />
                <Reading />
            </Container>
        )
    }
}

export { ReadingScreen };