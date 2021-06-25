const jwtTokenProvoider = require('../lib/jwtTokenProvider');
const { errorConstants, statusCodes } = require('../utils/constants');
const StandardResponse = require('../utils/responses');


function validateToken(req, token) {
  const userEmail = req.session.email;

  const decodedUserCredentails = jwtTokenProvoider.verifyToken(token);
  const decodedEmail = decodedUserCredentails.email;

  req.isValidToken = decodedEmail === userEmail
}

const isAuthenticated = (req, res, next) => {
  const response = new StandardResponse();
  try {
    const token = req.headers.authorization.split(' ')[1];
    validateToken(req, token);
    if (!req.isValidToken) {
      throw new Error("Invalid token");
    }
    next();
  } catch (error) {
    return response.sendFailureResponse(res, errorConstants.Invalid_JWT_token, statusCodes.UNAUTHORIZED)
  }
}

module.exports = isAuthenticated;