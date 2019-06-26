const validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateProfileInput(data) {
  let errors = {};

  data.handle = !isEmpty(data.handle) ? data.handle : "";
  data.staus = !isEmpty(data.staus) ? data.staus : "";
  data.skills = !isEmpty(data.skills) ? data.skills : "";

  if (!validator.isLength(data.handle, { min: 2, max: 40 })) {
    errors.handle = "Handle needs be betwwen 2 and 40 charecters";
  }
  if (validator.isEmpty(data.handle)) {
    errors.handle = "Profile Handle is required";
  }
  if (validator.isEmpty(data.status)) {
    errors.status = " Status field is required";
  }
  if (validator.isEmpty(data.skills)) {
    errors.skills = " Skills field is required";
  }
  if (!isEmpty(data.webSite)) {
    if (!validator.isURL(data.webSite)) {
      errors.webSite = "Not a valid URL";
    }
  }
  if (!isEmpty(data.twitter)) {
    if (!validator.isURL(data.twitter)) {
      errors.twitter = "Not a valid URL";
    }
  }
  if (!isEmpty(data.youtube)) {
    if (!validator.isURL(data.youtube)) {
      errors.youtube = "Not a valid URL";
    }
  }
  if (!isEmpty(data.facebook)) {
    if (!validator.isURL(data.facebook)) {
      errors.facebook = "Not a valid URL";
    }
  }
  if (!isEmpty(data.linkedin)) {
    if (!validator.isURL(data.linkedin)) {
      errors.linkedin = "Not a valid URL";
    }
  }
  if (!isEmpty(data.instagramm)) {
    if (!validator.isURL(data.instagramm)) {
      errors.instagramm = "Not a valid URL";
    }
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
