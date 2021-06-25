const jwtTokenProvoider = require('../lib/jwtTokenProvider');
const User = require('../Model/user');
const { errorConstants, statusCodes } = require('../utils/constants');
const StandardResponse = require('../utils/responses');


const isAdmin = (role) => role === "admin";

const hasAdminAccess = (req, res, next) => {
  const userEmail = req.session.email;
  const response = new StandardResponse();

  const user = new User({ email: userEmail });
  user
    .getUserRole()
    .then(([row]) => {
      if (row[0]) {
        if (!isAdmin(row[0].role)) {
          throw new Error("Not allowed to access this end point");
        }
        next();
      } else {
        return response.sendSuccessResponse(res, { message: 'Invalid user' });
      }
    })
    .catch((error) => {
      return response.sendFailureResponse(res, errorConstants.Not_Authorized, statusCodes.UNAUTHORIZED)
    });



}

module.exports = hasAdminAccess;