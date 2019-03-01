import React, { Component } from 'react';
import { StyleSheet, Dimensions, View, Alert } from 'react-native';
 
import Pdf from 'react-native-pdf';
 
class ViewPdfScreen extends Component {
  render() {
    const source = { uri: this.props.navigation.getParam('userManualURL'), cache: true };

    return (
      <View style={styles.container}>
        <Pdf
            source={source}
            onError={(error)=>{
                Alert.alert(error);
            }}
            style={styles.pdf}
          />
      </View>
    );
  }
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 25,
  },
  pdf: {
    flex: 1,
    width: Dimensions.get('window').width,
  }
});

export { ViewPdfScreen };