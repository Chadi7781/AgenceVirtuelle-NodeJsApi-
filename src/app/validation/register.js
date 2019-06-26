const validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateRegisterInput(data) {
  let errors = {};

  data.nom = !isEmpty(data.nom) ? data.nom : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.motDePasse = !isEmpty(data.motDePasse) ? data.motDePasse : "";
  data.motDePasse2 = !isEmpty(data.motDePasse2) ? data.motDePasse2 : "";

  if (!validator.isLength(data.nom, { min: 2, max: 30 })) {
    errors.nom = "nom must be betwwen 2 and 30 charecters";
  }
  if (validator.isEmpty(data.nom)) {
    errors.nom = "nom field is requied";
  }

  if (validator.isEmpty(data.email)) {
    errors.email = "Email field is required";
  }
  if (!validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
  }

  if (validator.isEmpty(data.motDePasse)) {
    errors.motDePasse = "motDePasse field is requied";
  }

  if (!validator.isLength(data.motDePasse, { min: 2, max: 30 })) {
    errors.motDePasse = "motDePasse mast be at least 6 charecters";
  }

  if (validator.isEmpty(data.motDePasse2)) {
    errors.motDePasse2 = "confirm motDePasse field is requied";
  }
  if (!validator.equals(data.motDePasse, data.motDePasse2)) {
    errors.motDePasse2 = "motDePasse must match";
  }
  return {
    errors,
    isValid: isEmpty(errors)
  };
};
