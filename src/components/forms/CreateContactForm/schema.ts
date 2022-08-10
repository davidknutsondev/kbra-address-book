// import * as yup from 'yup';

// export const schema = yup.object({
//   firstName: yup.string().required(),
//   // lastName: yup.string().required(),
//   // username: yup.string().required(),
//   // city: yup.string().required(),
//   // state: yup.string().required(),
//   // zip: yup.string().required(),
//   // terms: yup.bool().required(),
// });

import * as Yup from 'yup';

export const schema = Yup.object().shape({
  firstName: Yup.string().required('Required'),
  lastName: Yup.string().required('Required'),
  // lastName: Yup.string()
  //   .min(2, 'Too Short!')
  //   .max(50, 'Too Long!')
  //   .required('Required'),
  // email: Yup.string().email('Invalid email').required('Required'),
});
