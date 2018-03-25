import isEmpty from './isEmpty';
import isEmail from './isEmail';
import removeSpace from './removeSpace';

const inputChecker = inputs => {
  const check = inputs;
  const { firstname, lastname, email, confirmpassword, password } = check;
  const inputArr = Object.keys(check);
  const lastInput = inputArr.pop();

  let emptyInputCount = 0;
  let inputCheckerVal;
  let emptySpaceCheck = 0;

  for (const input in check) {
    if (isEmpty(check[input]) === true) {
      emptyInputCount += 1;
    }
  }

  for (const input in check) {
    if (removeSpace(check[input]) === false) {
      emptySpaceCheck += 1;
    }
  }

  if (emptyInputCount > 0) {
    return console.log('please check your input for empty spaces');
  }

  if (emptySpaceCheck > 0) {
    return console.log('inputs should not include empty spaces');
  }

  switch (lastInput) {
    case 'confirmpassword':
      if (confirmpassword !== password) {
        return console.log(`passwords don't match`);
      }

      if (isEmail(email) === false) {
        return console.log('not a valid email');
      }

      if (password.length <= 5) {
        return console.log(
          'password length should be greater than 5 characters'
        );
      }

      console.log(true);
      break;
    case 'password':
      if (isEmail(email) === false) {
        return console.log('not a valid email');
      }

      if (password.length <= 5) {
        return console.log(
          'password length should be greater than 5 characters'
        );
      }
      console.log(`valid email`);
      break;
    default:
      console.log('this is a test');
  }
};

export default inputChecker;
