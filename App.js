import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import Login from './src/components/login-form';
import Provider from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import Reducers from './src/reducers';

import thunk from 'redux-thunk';

// import rootReducer from './reducers/index';

const store = createStore(Reducers);
class App extends Component {
  render() {
    return (
      <Provider store={store}>
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
