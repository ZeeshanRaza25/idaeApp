import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import Login from './src/components/login-form';
import {Provider} from 'react-redux';
import Store from './src/reducers';

// import rootReducer from './reducers/index';

class App extends Component {
  render() {
    return (
      <Provider store={Store}>
        <View style={styles.container}>
          <Login />
        </View>
      </Provider>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
});
