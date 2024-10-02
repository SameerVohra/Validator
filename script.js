const {validatePassword, validateEmail} = require("validator-sameer");

if(validateEmail("sameer@gmail.com")){
  console.log("Email is valid");
}
else{
  console.log("Email is not valid");
}

if(validatePassword("Sameer@", 8, true, true)){
  console.log("Password is Valid");
}
else{
  console.log("Password is not Valid");
}

