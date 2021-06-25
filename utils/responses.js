const StanderdError = require("./error");

function StandardResponse(error,data) {
  this.error=error;
  this.data=data;
}

StandardResponse.prototype.sendSuccessResponse=(res,data,header)=>{
  this.error=null;
  this.data=data;
  return res.header(header).json(this);
}

StandardResponse.prototype.sendFailureResponse = (res, error, httpErrorCode) => {
	this.error = new StanderdError(error.code, error.message);
	console.log('this.error: ', this.error);
	
	this.data = null;

	return res.status(httpErrorCode || 400).json({
		error: this.error,
		data: this.data
	});
};
module.exports = StandardResponse;

