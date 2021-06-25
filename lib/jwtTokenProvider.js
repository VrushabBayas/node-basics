const jwt = require('jsonwebtoken');
const secretKey = process.env.JWT_SECRET_KEY;

const jwtTokenProvoider = {
  createToken: (payload, expiryTime = 36000) => {
    const token = jwt.sign(payload, secretKey, {
      expiresIn: expiryTime || process.env.JWT_EXPIRY_TIME
    });
    return token;
  },
  verifyToken: (token) => {
    try {
      return jwt.verify(token, secretKey);
    } catch (error) {
      return null;
    }
  }
};

module.exports = jwtTokenProvoider;
