import * as Yup from 'yup';

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const schema = Yup.object().shape({
  firstName: Yup.string().required('Required'),
  lastName: Yup.string().required('Required'),
  address: Yup.string().required('Required'),
  phone: Yup.string().matches(phoneRegExp, 'Phone number is not valid').required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
});

export interface FormValues {
  firstName: string;
  lastName: string;
  address: string;
  phone: string;
  email: string;
}
