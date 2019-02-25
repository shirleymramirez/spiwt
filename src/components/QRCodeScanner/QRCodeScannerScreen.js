import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  AsyncStorage,
  Dimensions,
  View,
} from 'react-native';
import { Container } from 'native-base';
import QRCodeScanner from 'react-native-qrcode-scanner';
import Icon from "react-native-vector-icons/Ionicons";

const SCREEN_WIDTH = Dimensions.get("window").width;

class QRCodeScannerScreen extends Component {
  constructor(props) {
    super(props);
  };

  async onSuccess(e){
    await AsyncStorage.setItem('productIds', JSON.stringify([e.data]));
    setTimeout(() => {
      console.log('setTimeout called to call goBack()');
      this.props.navigation.goBack();
    }, 1000);
  }

  render() {
    return (
      <Container>
        <QRCodeScanner
          showMarker
          onRead={(e) => this.onSuccess(e)}
          topContent={
            <Text style={styles.centerText}>
              Locate the QR code on your water system.
            </Text>
          }
          cameraStyle={{ backgroundColor: "rgba(0,0,0,0.5)" }}
          customMarker={
            <View >
                <Icon
                  name="ios-qr-scanner"
                  size={SCREEN_WIDTH * 0.60}
                  color={'#fff'}
                />
            </View>
          }
        />
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777',
  },
  textBold: {
    fontWeight: '500',
    color: '#000',
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)',
  },
  cameraStyle: {
    padding: 20,
  },
  buttonTouchable: {
    padding: 16,
  },
});

export { QRCodeScannerScreen };