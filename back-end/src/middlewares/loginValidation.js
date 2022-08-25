const createExceptionMessage = require('../utils/exceptionMessage');
const joiLogin = require('../schemas/loginSchema');

const loginValidation = (req, _res, next) => {
  const { error } = joiLogin.validate(req.body);
  if (error) throw createExceptionMessage(400, error.message);
  next();
};

module.exports = loginValidation;