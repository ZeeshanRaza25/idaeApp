import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Button,
  Text,
  Body,
  Title,
} from 'native-base';
// import firebase from 'firebase';
import InnerSection from './inner-section';
// import firebaseConfig from './firebase';
import authInputChange from '../actions';
import {connect} from 'react-redux';

// componentDidMount() {
//   const firebaseConfig = {
//     apiKey: 'AIzaSyAxTOVO1a5gXaprBnwvidROQldvj2-6X4s',
//     authDomain: 'authentication-620fc.firebaseapp.com',
//     databaseURL: 'https://authentication-620fc.firebaseio.com',
//     projectId: 'authentication-620fc',
//     storageBucket: 'authentication-620fc.appspot.com',
//     messagingSenderId: '841434730296',
//     appId: '1:841434730296:web:0dd42c9bc3363f97fb7bcd',
//     measurementId: 'G-BB4YR4S2MN',
//   };
//   // Initialize Firebase
//   // firebase.initializeApp(firebaseConfig);
//   // firebase.analytics();
// }

class Login extends Component {
  render() {
    return (
      <Container style={styles.container}>
        <Header style={styles.header}>
          <Body style={styles.body}>
            <Title style={styles.title}>Login</Title>
          </Body>
        </Header>
        <InnerSection>
          <Content>
            <Form>
              <Input
                placeholder="Username"
                onChangeText={text =>
                  this.props.authInputChange({field: 'email', value: text})
                }
                value={this.props.email}
              />
              <Input
                placeholder="Password"
                secureTextEntry={true}
                value={this.props.password}
                onChangeText={text =>
                  this.props.authInputChange({field: 'password', value: text})
                }
              />
              <Item last>
                <Button
                  block
                  width="99%"
                  style={styles.loginButton}
                  onPress={() => console.log(this.props.email)}>
                  <Text>Login</Text>
                </Button>
              </Item>
            </Form>
          </Content>
        </InnerSection>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    email: state.auth.email,
    password: state.auth.password,
  };
};

export default connect(
  mapStateToProps,
  {authInputChange},
)(Login);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#000000',
    width: '100%',
  },
  title: {
    color: '#000000',
  },
  header: {
    backgroundColor: '#fff',
    color: '#000000',
    alignItems: 'center',
    alignSelf: 'center',
  },
  loginText: {
    color: '#fff',
    backgroundColor: '#000000',
  },
  loginButton: {
    backgroundColor: '#44B367',
  },
  body: {
    // backgroundColor: '#000000',
    alignItems: 'center',
    color: '#000000',
  },
});
