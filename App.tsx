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
  TouchableOpacity,
  Image,
} from 'react-native';
import {COLOR} from './src/uliti/color';
import {useForm, Controller} from 'react-hook-form';
import DatePicker from 'react-native-date-picker';
import {yupResolver} from '@hookform/resolvers/yup';
import moment from 'moment';
import Button from './src/component/Button';
import Form from './src/component/Form';
import DropDownPicker from 'react-native-dropdown-picker';
import {schema} from './src/uliti/validation';

const App = () => {
  const [genderIndex, setGenderIndex] = useState(0);
  const [open, setOpen] = useState(false);
  const [openSelect, setOpenSelect] = useState(false);

  const date = new Date('2014-1-1');

  const defaultValues = {
    fullName: '',
    dateOfBirth: date || '',
    identityCardNumber: '',
    phoneNumber: '',
    email: '',
    workSelect: '',
    gender: '',
  };

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues,
    resolver: yupResolver(schema),
  });

  const items = [
    {label: 'Thợ code', value: 'thợ code'},
    {label: 'Designer', value: 'designer'},
    {label: 'BA', value: 'ba'},
    {label: 'Php', value: 'php'},
  ];

  const onSubmit = (data: any) => {
    console.log(data);
  };

  const checkName = errors.fullName ? COLOR.errorStyle : COLOR.borderColorInput;
  const checkCMND = errors.identityCardNumber
    ? COLOR.errorStyle
    : COLOR.borderColorInput;
  const checkSDT = errors.phoneNumber
    ? COLOR.errorStyle
    : COLOR.borderColorInput;
  const checkEmail = errors.email ? COLOR.errorStyle : COLOR.borderColorInput;

  return (
    <View style={styles.Container}>
      <SafeAreaView style={styles.SafeAreaViewStyle}>
        <View style={styles.Form}>
          <Form
            label="Họ và tên *"
            control={control}
            errors={errors}
            name="fullName"
            check={checkName}
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
                    style={{
                      ...styles.dateOfBirthStyle,
                      borderColor: errors.dateOfBirth
                        ? COLOR.errorStyle
                        : COLOR.borderColorInput,
                    }}
                    onPress={() => setOpen(true)}>
                    <DatePicker
                      modal
                      open={open}
                      mode="date"
                      date={value}
                      // eslint-disable-next-line @typescript-eslint/no-shadow
                      onConfirm={date => {
                        setOpen(false);
                        onChange(date);
                      }}
                      onCancel={() => {
                        setOpen(false);
                      }}
                    />
                    <Text
                      // eslint-disable-next-line react-native/no-inline-styles
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
            render={({field: {onChange}}) => {
              const genders = ['Nam', 'Nữ', 'Khác'];

              const genderChangeHandler = (index: any, item: any) => {
                onChange(item);
                setGenderIndex(index);
              };
              return (
                <View style={styles.GenderStyle}>
                  {genders.map((item, index) => {
                    return (
                      <TouchableOpacity
                        style={styles.CheckBox}
                        key={item}
                        onPress={genderChangeHandler.bind(this, index, item)}>
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
          <Form
            label="Số CMND *"
            control={control}
            errors={errors}
            name="identityCardNumber"
            check={checkCMND}
          />
          {errors.identityCardNumber && (
            <Text style={styles.errorStyle}>
              {errors.identityCardNumber?.message}
            </Text>
          )}
        </View>
        <View style={styles.Form}>
          <Form
            label="Số điện thoại"
            control={control}
            errors={errors}
            name="phoneNumber"
            check={checkSDT}
          />
          {errors.phoneNumber && (
            <Text style={styles.errorStyle}>{errors.phoneNumber?.message}</Text>
          )}
        </View>
        <View style={styles.Form}>
          <Form
            label="Email *"
            control={control}
            errors={errors}
            name="email"
            check={checkEmail}
          />
          {errors.email && (
            <Text style={styles.errorStyle}>{errors.email?.message}</Text>
          )}
        </View>
        <View style={styles.Form}>
          <Text style={styles.Label}>{'Nghề Nghiệp'}</Text>
          <Controller
            name="workSelect"
            control={control}
            render={({field: {onChange, value}}) => {
              return (
                <DropDownPicker
                  open={openSelect}
                  setOpen={setOpenSelect}
                  value={value}
                  setValue={onChange}
                  onChangeValue={item => onChange(item)}
                  items={items}
                  style={styles.selectStyle}
                  // eslint-disable-next-line react-native/no-inline-styles
                  dropDownContainerStyle={{
                    borderColor: COLOR.borderColorInput,
                    zIndex: 100,
                  }}
                />
              );
            }}
          />
        </View>
        <View style={styles.SubmitStyle}>
          <Button
            handleSubmit={handleSubmit}
            onSubmit={onSubmit}
            errors={errors}
          />
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
  SubmitStyle: {
    zIndex: -1,
    alignItems: 'center',
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
  errorStyle: {
    color: COLOR.errorStyle,
  },
  ImageStyleRight: {
    width: 10,
    height: 10,
  },
  dateOfBirthStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 4,
    borderColor: COLOR.borderColorInput,
  },
  selectStyle: {
    borderColor: COLOR.borderColorInput,
  },
});

export default App;
