import React, {Component} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

class MyHeader extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>This is header</Text>
      </View>
    );
  }
}

export default MyHeader;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 40,
  },
});
