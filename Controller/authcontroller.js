const { validationResult } = require('express-validator');
const { getUserDetailsService, createUserService, getUserLoginService } = require("../Services/authServices");
const { statusCodes } = require('../utils/constants');

const StandardResponse = require("../utils/responses");

const response = new StandardResponse();

const authHandler = {
  getUserDetails: async (req, res) => {
    await getUserDetailsService(req, res)
  },
  createUser: async (req, res) => {
    await createUserService(req, res);
  },
  getUserLogin: async (req, res) => {
    const errors = validationResult(req).array()[0];
    if (errors && errors.length !== 0) {
      return response.sendFailureResponse(res, errors.msg, statusCodes.BAD_REQUEST);
    } else {
      const { email } = req.body;
      req.session.email = email;
      await getUserLoginService(req, res);
    }

  }
}

module.exports = authHandler;