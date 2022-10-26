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

const App = () => {
  const {control, handleSubmit} = useForm();
  const [value, setValue] = useState();
  const [genderIndex, setGenderIndex] = useState(0);
  const gender = ['Nam', 'Nữ', 'Khác'];
  const countries = ['Designer', 'Tester', 'BA'];

  const onSubmit = (d: any) => {
    console.log(d);
  };

  const genderChangeHandler = (index: any) => {
    console.log('index \t', index);
    setGenderIndex(index);
  };

  return (
    <View style={styles.Container}>
      <SafeAreaView style={styles.SafeAreaViewStyle}>
        <View style={styles.Form}>
          <Text style={styles.Label}>{'Họ và tên *'}</Text>
          <Controller
            name="fullName"
            control={control}
            render={props => (
              <TextInput
                {...props}
                style={styles.Input}
                value={value}
                onChangeText={v => setValue(v)}
              />
            )}
          />
        </View>
        <View style={styles.Form}>
          <Text style={styles.Label}>{'Ngày sinh *'}</Text>
          <View style={styles.Input}>
            <TextInput style={styles.TextInputStyle} />
            <TouchableOpacity>
              <Image
                style={styles.iconCalendar}
                source={{
                  uri: 'https://cdn-icons-png.flaticon.com/128/2886/2886665.png',
                }}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.Form}>
          <Text style={styles.Label}>{'Giới tính *'}</Text>
          <View style={styles.GenderStyle}>
            {gender.map((item, index) => {
              return (
                <TouchableOpacity
                  style={styles.CheckBox}
                  key={item}
                  onPress={genderChangeHandler.bind(this, index)}>
                  <Image
                    style={{
                      ...styles.RadioButton,
                      tintColor:
                        index === genderIndex ? COLOR.button : COLOR.textGender,
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
        </View>
        <View style={styles.Form}>
          <Text style={styles.Label}>{'Số CMND *'}</Text>
          <Controller
            name="fullName"
            control={control}
            render={props => (
              <TextInput
                {...props}
                style={styles.Input}
                value={value}
                onChangeText={v => setValue(v)}
              />
            )}
          />
        </View>
        <View style={styles.Form}>
          <Text style={styles.Label}>{'Số điện thoại'}</Text>
          <Controller
            name="fullName"
            control={control}
            render={props => (
              <TextInput
                {...props}
                style={styles.Input}
                value={value}
                onChangeText={v => setValue(v)}
              />
            )}
          />
        </View>
        <View style={styles.Form}>
          <Text style={styles.Label}>{'Email *'}</Text>
          <Controller
            name="fullName"
            control={control}
            render={props => (
              <TextInput
                {...props}
                style={styles.Input}
                value={value}
                onChangeText={v => setValue(v)}
              />
            )}
          />
        </View>
        <View style={styles.Form}>
          <Text style={styles.Label}>{'Nghề Nghiệp'}</Text>
          <SelectDropdown
            data={countries}
            onSelect={(selectedItem, index) => {
              console.log(selectedItem, index);
            }}
            defaultButtonText={'Thợ code'}
            buttonTextAfterSelection={(selectedItem, index) => {
              console.log(selectedItem);

              return selectedItem;
            }}
            rowTextForSelection={(item, index) => {
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
});

export default App;
