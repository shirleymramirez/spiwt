import React, { Component } from 'react';
import { Form, Item, Label, Input, Button, Text, Card } from 'native-base';
import { Alert } from 'react-native';
import { ReadingStorage } from '../../utils/ReadingStorage';

class InputScreen extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            tds: '',
            psi: '',
            membraneSize: '',
            temp: ''
        }
    }

    async onButtonSubmit(e) {
        const result = await ReadingStorage.setInput(e.data);
        Alert.alert(result);    
        this.props.navigation.goBack();
    };


    render() {
        return (
            <Card>
                <Form style={{ width: '100%', paddingLeft: 10, paddingTop: 10, paddingRight: 20 }}>
                    <Item stackedLabel>
                        <Label>TDS</Label>
                        <Input
                            keyboardType="numeric"
                            value={this.state.tds}
                            onChange={(event) => this.setState({ tds: event.target.value })}
                        />
                    </Item>
                    <Item stackedLabel>
                        <Label>PSI</Label>
                        <Input
                            keyboardType="numeric"
                            value={this.state.psi}
                            onChange={(event) => this.setState({ psi: event.target.value })}
                        />
                    </Item>
                    <Item stackedLabel>
                        <Label>Membrane Size</Label>
                        <Input
                            keyboardType="numeric"
                            value={this.state.membraneSize}
                            onChange={(event) => this.setState({ membraneSize: event.target.value })}
                        />
                    </Item>
                    <Item stackedLabel>
                        <Label>Water Temperature (˚F)</Label>
                        <Input
                            keyboardType="numeric"
                            value={this.state.temp}
                            onChange={(event) => this.setState({ temp: event.target.value })}
                        />
                    </Item>
                    <Button info style={{ backgroundColor: '#2E73E4', position: 'relative', top: 40, left: 5, right: 0 }}
                        onPress={(e) => this.onButtonSubmit(e)}
                    >
                        <Text style={{ textAlign: 'center', width: '100%', color: 'white' }} >Submit</Text>
                    </Button>
                </Form>
            </Card>
        );
    }
}

export { InputScreen };