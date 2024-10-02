function validateEmail(email){
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}
function validatePassword(password, noOfChar, specialCharAllowed, numbersAllowed){
  if(password.length < noOfChar){
    return false;
  }

  if(specialCharAllowed){
    const specialChar = /[!@#$%^&*(),.?":{}|<>]/
    if(!specialChar.test(password)){
      return false;
    }
  }

  if(numbersAllowed){
    const number = /\d/;
    if(!number.test(password)){
      return false;
    }
  }

  return true;
}

module.exports = {validatePassword, validateEmail}
