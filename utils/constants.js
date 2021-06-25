const statusCodes = {
  SUCCESS: 200,
  NO_CONTENT: 204,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 400,
  INTERNAL_SERVER_ERROR: 500,
};

const errorConstants = {
	No_Token:{
		code:"NO_TOKEN",
		message:"No token provided"
	},
	No_Content: {
		code: 'NO_CONTENT',
		message: 'The url you are trying to access does not exist'
	},
	Not_Authorized: {
		code: 'NOT_AUTHORIZED',
		message: 'Not Authorized'
	},
	Internal_Server_Error: {
		code: 'INTERNAL_SERVER_ERROR',
		message: 'An internal server error has occured'
	},
	Invalid_Credentials: {
		code: 'INVALID_CREDENTIALS',
		message: 'Invalid Credentials'
	},
	Invalid_Username: {
		code: 'INVALID_USERNAME',
		message: 'Invalid Username or Password' 
	},
	Invalid_Password: {
		code: 'INVALID_PASSWORD',
		message: 'Invalid Password'
	},
	Invalid_Password_Length: {
		code: 'INVALID_PASSWORD',
		message: 'Password should be at least 7 chars long'
	},
	Invalid_User: {
		code: 'INVALID_USER',
		message: 'Invalid user'
	},
	Role_Not_Found: {
		code: 'ROLE_NOT_FOUND',
		message: 'Role not found'
	},

	Invalid_Request_Data: {
		code: 'INVALID_REQUEST_DATA',
		message: 'Request field is invalid, missing or not found'
	},

	Invalid_JWT_token: {
		code: 'INVALID_JWT_TOKEN',
		message: 'Invalid JWT token.'
	},
	User_Already_Exists: {
		code: 'USER_ALREADY_EXISTS',
		message: 'User Already exist'
	},
	Email_Already_Exists: {
		code: 'EMAIL_ALREADY_EXISTS',
		message: 'Email Already exist'
	},
	Delete_Not_Allowed: {
		code: 'DELETE_NOT_ALLOWED',
		message: 'Delete Not Allowed'
	},
	Update_Not_Allowed: {
		code: 'UPDATE_NOT_ALLOWED',
		message: 'Update Not Allowed'
	},
	File_Empty: {
		code: 'FILE_EMPTY',
		message: 'File empty'
	},
	File_Size_Exceeds_Limit: {
		code: 'FILE_SIZE_EXCEEDS_LIMIT',
		message: 'File size exceeds limit'
	},

	Invalid_ThumbnailUrl: {
		code: 'INVALID_THUMBNAIL_URL',
		message: 'Invalid_ThumbnailUrl'
	},
	File_Not_Found: {
		code: 'FILE_NOT_FOUND',
		message: 'File not found'
	}
};


module.exports = {
  statusCodes,
  errorConstants,
}