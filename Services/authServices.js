const jwtTokenProvoider = require('../lib/jwtTokenProvider');
const User = require('../Model/user');
const { errorConstants, statusCodes } = require('../utils/constants');
const StandardResponse = require('../utils/responses');

const response = new StandardResponse();

const createSession = (userDetails) => {
  const token = jwtTokenProvoider.createToken({ ...userDetails });
  return { message: "user loged in", token };
};

async function getUserDetailsService(req, res) {
  const user = new User(req.body);
  if (!user.email || !user.password) {
    return response.sendFailureResponse(res, errorConstants.Invalid_Request_Data, statusCodes.BAD_REQUEST);
  }
  user
    .getUserDetails()
    .then(([row]) => {
      if (row[0]) {
        return response.sendSuccessResponse(res, row[0]);
      } else {
        return response.sendSuccessResponse(res, { message: 'User not found' });
      }
    })
    .catch((error) => {
      return response.sendFailureResponse(res, errorConstants.Internal_Server_Error, 500);
    });
}

async function createUserService(req, res, next) {
  const user = new User(req.body);
  if (!user.email || !user.password) {
    return response.sendFailureResponse(res, errorConstants.Invalid_Request_Data, statusCodes.BAD_REQUEST);
  }
  user
    .createNewUSer()
    .then(([row]) => {
      if (row) {
        return response.sendSuccessResponse(res, { message: 'User Created' });
      }
    })
    .catch((error) => {
      console.log('error: ', error);
      return response.sendFailureResponse(res, errorConstants.Internal_Server_Error, 500);
    });
}

async function getUserLoginService(req, res, next) {
  const user = new User(req.body);
  user
    .userLogin()
    .then(([row]) => {
      if (row[0]) {
        const data = createSession(row[0]);
        return response.sendSuccessResponse(res, data);
      } else {
        return response.sendSuccessResponse(res, { message: 'Invalid user' });
      }
    })
    .catch((error) => {
      console.log('error: ', error);
      return response.sendFailureResponse(
        res,
        errorConstants.Internal_Server_Error,
        statusCodes.INTERNAL_SERVER_ERROR
      );
    });
}


module.exports = { getUserDetailsService, getUserLoginService, createUserService };
