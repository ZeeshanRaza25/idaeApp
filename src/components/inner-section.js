import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

class InnerSection extends Component {
  render() {
    return <View style={styles.container}>{this.props.children}</View>;
  }
}

export default InnerSection;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    marginBottom: 10,
  },
});
