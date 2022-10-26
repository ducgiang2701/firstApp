import React from 'react';
import {View, StyleSheet, Text, TextInput} from 'react-native';
import {COLOR} from '../uliti/color';
const Form = ({lable}) => {
  return (
    <View style={styles.Form}>
      <View style={styles.LabelBox}>
        <Text style={styles.LabelText}>{lable}</Text>
      </View>
      <View style={styles.InputBox}>
        <TextInput style={styles.Input} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Form: {
    marginBottom: 13,
  },
  LabelBox: {
    marginBottom: 7,
  },
  LabelText: {
    color: COLOR.textLabel,
    fontSize: 12,
  },
  InputBox: {
    width: '100%',
  },
  Input: {
    width: '100%',
    borderWidth: 1,
    paddingVertical: 10,
    paddingLeft: 8,
    borderRadius: 4,
    borderColor: '#A5ABB3',
  },
});
export default Form;
