export default function validate(values) {
  let errors = {};

  //cardType is always Visa for now
  const { fullName, ccNumber, expMonth, expYear, cvc } = values;
  const currYear = (new Date()).getFullYear().toString();
  const last2DigitYear = currYear.substring(currYear.length - 2);

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
  } else if (expMonth < 1 || expMonth > 12) {
    errors.expMonth = 'Expiration month can only be from 1 to 12.'
  }

  if (!expYear) {
    errors.expYear = 'Expiration year is required.'
  } else if (!numOnlyRegEx.test(expYear)) {
    errors.expYear = 'Expiration year can only contain numbers.'
  } else if (expYear < last2DigitYear) {
    errors.expYear = `Expiration year needs to be ${last2DigitYear} or greater.`;
  }

  if (!cvc) {
    errors.cvc = 'CVC is required.'
  } else if (!numOnlyRegEx.test(cvc)) {
    errors.cvc = 'CVC can only contain numbers.'
  } else if (cvc.length < 3 || cvc.length > 4) {
    errors.cvc = 'CVC is 3 or 4 digit long.'
  }

  return errors;
};

