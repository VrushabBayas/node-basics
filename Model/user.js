const db = require('../utils/database').db

function User(userCred) {
  this.email = userCred.email;
  this.password = userCred.password;
  this.cnfPassword = userCred.cnfPassword;
}

User.prototype.createNewUSer = function () {
  const { email, password, cnfPassword } = this;

  var sql = 'INSERT INTO users (email,password,cnfPassword) VALUES (?,?,?)';
  return db.query(sql, [email, password, cnfPassword])

};
User.prototype.userLogin = function () {
  const { email, password } = this;
  var sql = 'select email,password from users where email=? and password=?';
  return db.query(sql, [email, password]);

};
User.prototype.getUserDetails = function () {
  const { email, password } = this;
  var sql = 'select * from users where email=? and password=?';
  return db.query(sql, [email, password]);
};

User.prototype.getUserRole = function () {
  const { email } = this;
  var sql = 'select role from users where email=?';
  return db.query(sql, [email]);
};

module.exports = User;