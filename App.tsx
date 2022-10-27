/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import {COLOR} from './src/uliti/color';
import {useForm, Controller} from 'react-hook-form';
import SelectDropdown from 'react-native-select-dropdown';
import * as Yup from 'yup';
import DatePicker from 'react-native-date-picker';
import {yupResolver} from '@hookform/resolvers/yup';
import moment from 'moment';
const App = () => {
  const countries = ['Designer', 'Tester', 'BA'];

  const [genderIndex, setGenderIndex] = useState(0);
  const genders = ['Nam', 'Nữ', 'Khác'];

  const genderChangeHandler = (index: any) => {
    console.log('index \t', index);
    setGenderIndex(index);
  };
  const nameRegExp = /^([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)$/;
  const identityCardNumberReg = /[0-9]{9}/;
  const phoneReg = /^(0\d{9,10})$/;
  const emailReg =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const schema = Yup.object().shape({
    fullName: Yup.string()
      .required('This case cannot be left blank')
      .matches(nameRegExp, 'is not format')
      .min(12, 'Pleasr enter at least 12 characters')
      .max(125, 'Can only enter up to 125 characters'),
    identityCardNumber: Yup.string()
      .required('This case cannot be left blank')
      .matches(identityCardNumberReg, 'Can only enter up to 15 characters')
      .max(15, 'Can only enter up to 15 characters'),
    phoneNumber: Yup.string().matches(phoneReg, 'Is not format'),
    email: Yup.string().matches(emailReg, 'Is not format'),
    dateOfBirth: Yup.date()
      .min(new Date('2014-1-1'), 'between 13-65 age')
      .max(new Date('2066-1-1'), 'between 13-65 age'),
  });

  const date = new Date('2014-1-1');

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      fullName: '',
      dateOfBirth: date,
      identityCardNumber: '',
      phoneNumber: '',
      email: '',
      gender: '',
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  const [open, setOpen] = useState(false);
  return (
    <View style={styles.Container}>
      <SafeAreaView style={styles.SafeAreaViewStyle}>
        <View style={styles.Form}>
          <Text style={styles.Label}>{'Họ và tên *'}</Text>
          <Controller
            name="fullName"
            control={control}
            render={({field: {onChange, onBlur, value}}) => {
              return (
                <TextInput
                  style={{
                    ...styles.Input,
                  }}
                  value={value}
                  onBlur={onBlur}
                  onChangeText={onChange}
                />
              );
            }}
          />
          {errors.fullName && (
            <Text style={styles.errorStyle}>{errors.fullName?.message}</Text>
          )}
        </View>
        <View style={styles.Form}>
          <Text style={styles.Label}>{'Ngày sinh *'}</Text>
          <Controller
            name="dateOfBirth"
            control={control}
            render={({field: {value, onChange}}) => {
              return (
                <View>
                  <TouchableOpacity
                    style={styles.dateOfBirthStyle}
                    onPress={() => setOpen(true)}>
                    <DatePicker
                      modal
                      open={open}
                      mode="date"
                      date={value}
                      onConfirm={date => {
                        setOpen(false);
                        onChange(date);
                      }}
                      onCancel={() => {
                        setOpen(false);
                      }}
                    />
                    <Text
                      style={{
                        ...styles.Input,
                        borderWidth: 0,
                        width: '92%',
                      }}>
                      {moment(value).format('DD/MM/YYYY')}
                    </Text>

                    <TouchableOpacity onPress={() => setOpen(true)}>
                      <Image
                        style={styles.iconCalendar}
                        source={{
                          uri: 'https://cdn-icons-png.flaticon.com/128/2886/2886665.png',
                        }}
                      />
                    </TouchableOpacity>
                  </TouchableOpacity>
                  {errors.dateOfBirth && (
                    <Text style={styles.errorStyle}>
                      {errors.dateOfBirth?.message}
                    </Text>
                  )}
                </View>
              );
            }}
          />
        </View>

        <View style={styles.Form}>
          <Text style={styles.Label}>{'Giới tính *'}</Text>
          <Controller
            name="gender"
            control={control}
            render={({field: {onChange, onBlur, value}}) => {
              return (
                <View style={styles.GenderStyle}>
                  {genders.map((item, index) => {
                    return (
                      <TouchableOpacity
                        style={styles.CheckBox}
                        key={item}
                        onPress={genderChangeHandler.bind(this, index)}>
                        <Image
                          style={{
                            ...styles.RadioButton,
                            tintColor:
                              index === genderIndex
                                ? COLOR.button
                                : COLOR.textGender,
                          }}
                          source={{
                            uri:
                              index === genderIndex
                                ? 'https://cdn-icons-png.flaticon.com/128/6948/6948243.png'
                                : 'https://cdn-icons-png.flaticon.com/128/7824/7824793.png',
                          }}
                        />
                        <Text style={styles.TextGenderStyle}>{item}</Text>
                      </TouchableOpacity>
                    );
                  })}
                </View>
              );
            }}
          />
        </View>
        <View style={styles.Form}>
          <Text style={styles.Label}>{'Số CMND *'}</Text>
          <Controller
            name="identityCardNumber"
            control={control}
            render={({field: {onChange, onBlur, value}}) => (
              <TextInput
                style={styles.Input}
                value={value}
                onBlur={onBlur}
                onChangeText={onChange}
              />
            )}
          />
          {errors.identityCardNumber && (
            <Text style={styles.errorStyle}>
              {errors.identityCardNumber?.message}
            </Text>
          )}
        </View>
        <View style={styles.Form}>
          <Text style={styles.Label}>{'Số điện thoại'}</Text>
          <Controller
            name="phoneNumber"
            control={control}
            render={({field: {onChange, onBlur, value}}) => (
              <TextInput
                style={styles.Input}
                value={value}
                onBlur={onBlur}
                onChangeText={onChange}
              />
            )}
          />
          {errors.phoneNumber && (
            <Text style={styles.errorStyle}>{errors.phoneNumber?.message}</Text>
          )}
        </View>
        <View style={styles.Form}>
          <Text style={styles.Label}>{'Email *'}</Text>
          <Controller
            name="email"
            control={control}
            render={({field: {onChange, onBlur, value}}) => (
              <TextInput
                style={styles.Input}
                value={value}
                onBlur={onBlur}
                onChangeText={onChange}
              />
            )}
          />
          {errors.email && (
            <Text style={styles.errorStyle}>{errors.email?.message}</Text>
          )}
        </View>
        <View style={styles.Form}>
          <Text style={styles.Label}>{'Nghề Nghiệp'}</Text>
          <SelectDropdown
            data={countries}
            onSelect={(selectedItem, index) => {
              console.log(selectedItem, index);
            }}
            defaultButtonText={'Thợ code'}
            buttonTextAfterSelection={selectedItem => {
              console.log(selectedItem);

              return selectedItem;
            }}
            rowTextForSelection={item => {
              console.log(item);

              return item;
            }}
            buttonStyle={styles.dropdown1BtnStyle}
            buttonTextStyle={styles.dropdown1BtnTxtStyle}
            renderDropdownIcon={isOpened => {
              return (
                <Image
                  style={styles.ImageStyleRight}
                  source={{
                    uri: isOpened
                      ? 'https://cdn-icons-png.flaticon.com/128/130/130906.png'
                      : 'https://cdn-icons-png.flaticon.com/128/32/32195.png',
                  }}
                />
              );
            }}
            dropdownIconPosition={'right'}
            dropdownStyle={styles.dropdown1DropdownStyle}
            rowStyle={styles.dropdown1RowStyle}
            rowTextStyle={styles.dropdown1RowTxtStyle}
          />
        </View>
        <View style={styles.SubmitStyle}>
          <TouchableOpacity
            onPress={handleSubmit(onSubmit)}
            style={styles.ButtonStyle}>
            <Text style={styles.TextButtonStyle}>{'Chọn'}</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
  Label: {
    color: COLOR.textLabel,
    fontSize: 12,
    marginBottom: 7,
  },
  GenderStyle: {
    flexDirection: 'row',
  },
  CheckBox: {
    flexDirection: 'row',
    marginRight: 40,
    alignItems: 'center',
  },
  RadioButton: {
    width: 20,
    height: 20,
  },
  TextGenderStyle: {
    color: COLOR.textGender,
  },

  SafeAreaViewStyle: {
    flex: 1,
    marginHorizontal: 19,
  },
  Form: {
    marginBottom: 13,
  },
  Input: {
    flexDirection: 'row',
    width: '100%',
    borderWidth: 1,
    paddingVertical: 10,
    paddingLeft: 8,
    borderRadius: 4,
    borderColor: '#A5ABB3',
  },
  TextInputStyle: {
    width: '92%',
  },
  iconCalendar: {
    width: 15,
    height: 15,
  },
  SubmitStyle: {
    alignItems: 'center',
  },
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
  dropdown1BtnStyle: {
    width: '100%',
    height: 40,
    backgroundColor: '#FFF',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: COLOR.borderColorInput,
  },
  dropdown1BtnTxtStyle: {
    color: COLOR.textGender,
    textAlign: 'left',
    fontSize: 14,
  },
  dropdown1DropdownStyle: {
    backgroundColor: '#EFEFEF',
  },
  dropdown1RowStyle: {
    backgroundColor: '#EFEFEF',
    borderBottomColor: '#C5C5C5',
  },
  dropdown1RowTxtStyle: {
    color: COLOR.textGender,
    textAlign: 'left',
  },
  ImageStyleRight: {
    width: 10,
    height: 10,
  },
  errorStyle: {
    color: COLOR.errorStyle,
  },
  dateOfBirthStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 4,
    borderColor: COLOR.borderColorInput,
  },
});

export default App;
