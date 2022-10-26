import React from 'react';
import {View, SafeAreaView, StyleSheet, Text, TextInput} from 'react-native';
import {COLOR} from '../uliti/color';
import Form from '../component/Form';

const ClientScreen = () => {
  return (
    <View style={styles.Container}>
      <SafeAreaView style={styles.SafeAreaViewStyle}>
        <Form lable={'Họ và tên*'} />
        <Form lable={'Ngày sinh*'} />
      </SafeAreaView>
    </View>
  );
};
const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
  SafeAreaViewStyle: {
    flex: 1,
    backgroundColor: COLOR.white,
    marginHorizontal: 19,
  },
});

export default ClientScreen;
