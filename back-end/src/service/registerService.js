const md5 = require('md5');
const createExceptionMessage = require('../utils/exceptionMessage');
const { createToken } = require('../utils/createToken');
const { getUserByEmail, createNewUser } = require('./usersService');

const createRegister = async (body) => {
  const { email, name, password } = body;
  const userExists = await getUserByEmail(email);

  if (userExists) throw createExceptionMessage(409, 'User already exists');

  const cryptoPassword = md5(password);
  const newUser = { name, email, password: cryptoPassword, role: 'customer' };

  const userCreated = await createNewUser(newUser);
  const { password: omitPassword, ...userData } = userCreated.dataValues;
  return createToken(userData);
  };

module.exports = { createRegister };