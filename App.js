/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */
import React from 'react';

import { ProductScreen } from './src/components/Products/ProductScreen';
import { QRCodeScannerScreen } from './src/components/QRCodeScanner/QRCodeScannerScreen';
import { Image } from 'react-native';
import logo from './src/images/Spectrapure-small.png';

import {createStackNavigator, createAppContainer} from 'react-navigation';

const MainNavigator = createStackNavigator({
    Product: {screen: ProductScreen},
    QRCode: {screen: QRCodeScannerScreen},
  },
  {
    initialRouteName: "Product",
    defaultNavigationOptions: {
      headerTitle: <Image source={logo} style={{ flex: 0.6 }} resizeMode='contain'/>
    }
});

const App = createAppContainer(MainNavigator);

export default App;
