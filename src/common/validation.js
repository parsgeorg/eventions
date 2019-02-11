import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';

export default function validateInput(data) {
  let errors = {};
  
  if (Validator.isEmpty(data.name)) {
    errors.name = 'This field is required';
  }

  if (!data.price) {
    errors.price = 'This field is required';
  }
  
  return {
    errors,
    isValid: isEmpty(errors)
  }
}
