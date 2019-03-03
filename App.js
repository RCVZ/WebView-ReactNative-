import React from 'react';
import { StyleSheet, Text, View, WebView } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <WebView source={{ uri: 'https://bcase.nl' }}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    height: 350,
 }
});
