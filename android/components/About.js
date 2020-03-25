import React from 'react';
import {StyleSheet, Text, SafeAreaView, ScrollView} from 'react-native';

const About = () => (
  <SafeAreaView style={styles.container}>
    <ScrollView style={styles.scrollView}>
      <Text style={styles.text}>
        Allied Hospital is the largest hospital in Pakistan and located on Jail
        Road in Faisalabad, Punjab, Pakistan.Allied Hospital serves as the
        primary teaching hospital of Faisalabad Medical University, Faisalabad.{' '}
      </Text>
      <Text>
        Allied Hospital is the largest hospital in Pakistan and located on Jail
        Road in Faisalabad, Punjab, Pakistan.Allied Hospital serves as the
        primary teaching hospital of Faisalabad Medical University, Faisalabad.{' '}
      </Text>
      <Text>
        Allied Hospital is the largest hospital in Pakistan and located on Jail
        Road in Faisalabad, Punjab, Pakistan.Allied Hospital serves as the
        primary teaching hospital of Faisalabad Medical University, Faisalabad.{' '}
      </Text>
      <Text>
        Allied Hospital is the largest hospital in Pakistan and located on Jail
        Road in Faisalabad, Punjab, Pakistan.Allied Hospital serves as the
        primary teaching hospital of Faisalabad Medical University, Faisalabad.{' '}
      </Text>
      <Text>
        Allied Hospital is the largest hospital in Pakistan and located on Jail
        Road in Faisalabad, Punjab, Pakistan.Allied Hospital serves as the
        primary teaching hospital of Faisalabad Medical University, Faisalabad.{' '}
      </Text>
    </ScrollView>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 0,
    width: '100%',
    // backgroundColor: 'pink',
  },
  scrollView: {
    backgroundColor: 'pink',
    marginHorizontal: 20,
    width: '92%',
    paddingHorizontal: '5%',
  },
  text: {
    fontSize: 22,
  },
});

export default About;
