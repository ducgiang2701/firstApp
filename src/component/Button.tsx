import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {COLOR} from '../utils/color';

const Button = ({handleSubmit, onSubmit, errors}: any) => {
  return (
    <TouchableOpacity
      disabled={
        errors.fullName ||
        errors.dateOfBirth ||
        errors.identityCardNumber ||
        errors.email
          ? true
          : false
      }
      onPress={handleSubmit(onSubmit)}
      style={{
        ...styles.ButtonStyle,
        backgroundColor:
          errors.fullName ||
          errors.dateOfBirth ||
          errors.identityCardNumber ||
          errors.email
            ? COLOR.disalble
            : COLOR.button,
      }}>
      <Text style={styles.TextButtonStyle}>{'Chọn'}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  ButtonStyle: {
    backgroundColor: COLOR.button,
    paddingHorizontal: 24,
    paddingVertical: 10,
    borderRadius: 4,
  },
  TextButtonStyle: {
    fontSize: 14,
    color: COLOR.white,
  },
});

export default Button;
