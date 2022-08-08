export default function validate(values) {
  let errors = {};
  const { fullName } = values;

  //https://stackoverflow.com/questions/2385701/regular-expression-for-first-and-last-name
  const fullNameRegEx = /^[a-z ,.'-]+$/i;

  if (!fullName) {
    errors.fullName = 'Name is required.';
  } else if (!fullNameRegEx.test(fullName)) {
    errors.fullName = 'Name is not valid';
  } else {
    console.log(`full name: ${fullName} is valid`)
  }
  return errors;
};

