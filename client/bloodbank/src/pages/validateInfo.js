export default function validateInfo(values) {
  let errors = {};

  if (!values.username.trim()) {
    errors.username = 'Username required';
  }
  

  if (!values.email) {
    errors.email = 'Email required';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Email address is invalid';
  }
  if (!values.password) {
    errors.password = 'Password is required';
  } else if (values.password.length < 6) {
    errors.password = 'Password needs to be 6 characters or more';
  }
  if (!values.mobile) {
    errors.password = 'Mobile number  is required';
  } else if (values.password.length = 10) {
    errors.password = 'Mobile number Should be 10 Digit';
  }

  
  return errors;
}
