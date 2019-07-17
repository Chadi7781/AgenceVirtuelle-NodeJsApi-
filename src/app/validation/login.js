const validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateLoginInput(data) {
  let errors = {};

  data.email = !isEmpty(data.email) ? data.email : "";
  data.motDePasse = !isEmpty(data.motDePasse) ? data.motDePasse : "";

  if (!validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
  }
  if (validator.isEmpty(data.email)) {
    errors.email = "Email field is required";
  }
  if (validator.isEmpty(data.motDePasse)) {
    errors.motDePasse = "Password field is requied";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
