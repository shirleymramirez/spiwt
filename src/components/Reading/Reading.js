import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Container, Item, Text, Card } from 'native-base';

class Reading extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: ''
        }
    };

    componentDidMount() {
        var date = new Date().getDate();        //Current Date
        var month = new Date().getMonth() + 1;  //Current Month
        var year = new Date().getFullYear();    //Current Year
        var hours = new Date().getHours();      //Current Hours
        var min = new Date().getMinutes();      //Current Minutes
        var sec = new Date().getSeconds();      //Current Seconds

        this.setState({
            date: date + '/' + month + '/' + year + ' ' + hours + ':' + min + ':' + sec
        })
    };

    render() {
        return (
            <Container>
                <Card style={styles.readingView}>
                    <View style={styles.inputView}>
                        <Item>
                            <Text>78</Text>
                            <Text note>TDS</Text>
                        </Item>
                        <Item>
                            <Text>90</Text>
                            <Text note>PSI</Text>
                        </Item>
                        <Item>
                            <Text>76</Text>
                            <Text note>Membrane Size</Text>
                        </Item>
                        <Item>
                            <Text>76</Text>
                            <Text note>Water Temperature (˚F)</Text>
                        </Item>
                    </View>
                    <View style={styles.outputView}>
                        <Item>
                            <Text>78</Text>
                            <Text note>OPCF</Text>
                        </Item>
                        <Item>
                            <Text>90</Text>
                            <Text note>PCF</Text>
                        </Item>
                        <Item>
                            <Text>76</Text>
                            <Text note>GDP</Text>
                        </Item>
                    </View>
                </Card>
                <Card style={styles.dateInput}>
                    <Text>Date Inputted: {this.state.date}</Text>
                </Card>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    readingView: {
        flex: 1,
        flexDirection: 'row'
    },
    inputView: {
        width: '50%', 
        paddingLeft: 10, 
        paddingTop: 10, 
        paddingRight: 20
    },
    outputView: {
        width: '50%', 
        paddingLeft: 10, 
        paddingTop: 10, 
        paddingRight: 20
    },
    dateInput: {
        flex: 1, 
        flexDirection: 'column',
        alignItems: 'stretch'
    }
});

export { Reading };


