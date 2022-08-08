export default function validate(values) {
  let errors = {};

  //cardType is always Visa for now
  const { fullName, ccNumber, expMonth, expYear, cvc } = values;

  //https://stackoverflow.com/questions/2385701/regular-expression-for-first-and-last-name
  const fullNameRegEx = /^[a-z ,.'-]+$/i;
  const numOnlyRegEx = /^\d+$/;

  if (!fullName) {
    errors.fullName = 'Name is required.';
  } else if (!fullNameRegEx.test(fullName)) {
    errors.fullName = 'Name is not valid';
  }

  if (!ccNumber) {
    errors.ccNumber = 'Credit card number is required.'
  } else if (!numOnlyRegEx.test(ccNumber)) {
    errors.ccNumber = 'Credit card number can only contain numbers.'
  }

  if (!expMonth) {
    errors.expMonth = 'Expiration month is required.'
  } else if (!numOnlyRegEx.test(expMonth)) {
    errors.expMonth = 'Expiration month can only contain numbers.'
  }

  if (!expYear) {
    errors.expYear = 'Expiration year is required.'
  } else if (!numOnlyRegEx.test(expYear)) {
    errors.expYear = 'Expiration year can only contain numbers.'
  }

  if (!cvc) {
    errors.cvc = 'CVC is required.'
  } else if (!numOnlyRegEx.test(cvc)) {
    errors.cvc = 'CVC can only contain numbers.'
  }

  return errors;
};

