# Validator Sameer

A lightweight package for validating email addresses and passwords based on customizable rules. This package provides utility functions to check for a valid email format and validate password strength based on specified requirements.

## Installation

Install the package via npm:

```bash
npm install validator-sameer
```

## Usage

After installing the package, you can import and use the `validateEmail` and `validatePassword` functions in your project.

### Email Validation

The `validateEmail` function checks if an email is in a valid format. It returns `true` for a valid email and `false` for an invalid email.

```javascript
const { validateEmail } = require('validator-sameer');

const email = 'sameer@gmail.com';

if (validateEmail(email)) {
  console.log('Email is valid');
} else {
  console.log('Email is not valid');
}
```

### Password Validation

The `validatePassword` function validates a password based on the following customizable criteria:
- `password` (string): The password to validate.
- `noOfChar` (number): Minimum number of characters the password should have.
- `specialCharAllowed` (boolean): Whether special characters are required.
- `numbersAllowed` (boolean): Whether numbers are required.

```javascript
const { validatePassword } = require('validator-sameer');

const password = 'Sameer@123';

if (validatePassword(password, 8, true, true)) {
  console.log('Password is valid');
} else {
  console.log('Password is not valid');
}
```

### Example

```javascript
const { validateEmail, validatePassword } = require('validator-sameer');

if (validateEmail("sameer@gmail.com")) {
  console.log("Email is valid");
} else {
  console.log("Email is not valid");
}

if (validatePassword("Sameer@123", 8, true, true)) {
  console.log("Password is valid");
} else {
  console.log("Password is not valid");
}
```

## API

### `validateEmail(email)`
- **Parameters**:
  - `email`: The email address to validate (string).
- **Returns**: `true` if the email is in a valid format, otherwise `false`.

### `validatePassword(password, noOfChar, specialCharAllowed, numbersAllowed)`
- **Parameters**:
  - `password`: The password to validate (string).
  - `noOfChar`: Minimum number of characters (number).
  - `specialCharAllowed`: Whether special characters are required (boolean).
  - `numbersAllowed`: Whether numbers are required (boolean).
- **Returns**: `true` if the password meets the criteria, otherwise `false`.


