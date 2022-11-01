import * as Yup from 'yup';
const nameRegExp = /^([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)$/;
const identityCardNumberReg = /[0-9]{9}/;
const phoneReg = /^(0\d{9,10})$/;
const emailReg =
  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const schema = Yup.object().shape({
  fullName: Yup.string()
    .required('This field is required')
    .matches(nameRegExp, 'is not format')
    .min(12, 'Pleasr enter at least 12 characters')
    .max(125, 'Can only enter up to 125 characters'),
  identityCardNumber: Yup.string()
    .required('This field is required')
    .matches(identityCardNumberReg, 'Can only enter up to 15 characters')
    .max(15, 'Can only enter up to 15 characters'),
  phoneNumber: Yup.string().required('').matches(phoneReg, 'Is not format'),
  email: Yup.string()
    .required('This field is required')
    .matches(emailReg, 'Is not format'),
  dateOfBirth: Yup.date()
    .min(new Date('2014-1-1'), 'You can only choose from 2014')
    .max(new Date('2066-1-1'), 'bạn chỉ có thể chọn đến năm 2066'),
});
