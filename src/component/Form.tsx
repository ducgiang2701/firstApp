import React from 'react';
import {Controller} from 'react-hook-form';
import {Text, TextInput, View, StyleSheet} from 'react-native';
import {COLOR} from '../utils/color';

const Form = ({control, label, name, check}: any) => {
  return (
    <View>
      <Text style={styles.Label}>{label}</Text>
      <Controller
        name={name}
        control={control}
        render={({field: {onChange, onBlur, value}}) => {
          return (
            <TextInput
              style={{
                ...styles.Input,
                borderColor: check,
              }}
              value={value}
              onBlur={onBlur}
              onChangeText={onChange}
            />
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  Input: {
    flexDirection: 'row',
    width: '100%',
    borderWidth: 1,
    paddingVertical: 10,
    paddingLeft: 8,
    borderRadius: 4,
    borderColor: '#A5ABB3',
  },
  Label: {
    color: COLOR.textLabel,
    fontSize: 12,
    marginBottom: 7,
  },
  TextInputStyle: {
    width: '92%',
  },
  errorStyle: {
    color: COLOR.errorStyle,
  },
});

export default Form;
