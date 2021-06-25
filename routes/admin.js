var express = require('express');
var router = express.Router();

/* GET home page. */
router.get("/get-details", function (req, res, next) {
  res.status(200).send({ name: "Test admin", role: "admin", fullName: "Test admin user" });
});

module.exports = router;
