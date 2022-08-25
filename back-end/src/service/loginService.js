const md5 = require('md5');
const createExceptionMessage = require('../utils/exceptionMessage');
const { createToken } = require('../utils/createToken');
const { getUserByEmail } = require('./usersService');

const createLogin = async (email, password) => {
    const userExists = await getUserByEmail(email);
    const data = userExists && userExists.dataValues;
    const cryptoPassword = md5(password);    
    if (!userExists || data.password !== cryptoPassword) throw createExceptionMessage(404, 'Invalid data');
    const { password: omitPassword, ...userData } = data;
    return createToken(userData);
};

module.exports = { createLogin };