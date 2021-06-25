const { checkSchema } = require('express-validator');
const { errorConstants } = require('../utils/constants');

const validateCredentials = () => {
  return checkSchema({
    // Support bail functionality in schemas
    email: {
      isEmail: {
        bail: true,
        errorMessage:errorConstants.Invalid_Username
      },
    },
    password: {
      isLength: {
        options: { min: 8 },
        errorMessage:errorConstants.Invalid_Password
      }
    },
  });
}

module.exports = {
  validateCredentials
}