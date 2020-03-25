import React from 'react';
import {StyleSheet} from 'react-native';
import {Container, Header, Left, Body, Button, Icon, Title} from 'native-base';

const Gallery = () => {
  return (
    <Container>
      <Header transparent style={styles.header}>
        <Left>
          <Button transparent>
            <Icon name="arrow-back" style={styles.icon} />
          </Button>
        </Left>
        <Body style={styles.title}>
          <Title style={styles.title}>Gallery</Title>
        </Body>
      </Header>
    </Container>
  );
};

export default Gallery;

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#000000',
    color: 'black',
    // alignSelf: 'center',
    // alignContent: 'center',
    // alignItems: 'center',
  },
  container: {
    backgroundColor: '#000000',
  },
  title: {
    color: 'black',
    // alignItems: 'center',
    marginLeft: '10%',
  },
  header: {
    color: '#000000',
  },
  icon: {
    color: '#000000',
  },
});
