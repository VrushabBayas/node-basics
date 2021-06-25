function StanderdError(code, message) {
  this.code = code;
  this.message = message;
};

StanderdError.prototype.getError = (code, message) => {
  this.code = code;
  this.message = message;
  return {
    status: this.code,
    message: this.message

  }
}

module.exports = StanderdError;