const jwt = require('jsonwebtoken');
const { readFileSync } = require('fs');
const createExceptionMessage = require('../utils/exceptionMessage');
require('dotenv').config();

const secretKey = readFileSync('jwt.evaluation.key', 'utf8');
const messageUnauthorized = createExceptionMessage(401, 'Token Not Found');
const messageInvalidToken = createExceptionMessage(401, 'Expired Or Invalid Token');

const validateAuth = (req, _res, next) => {
    const token = req.headers.authorization;
    if (!token || !secretKey) {
        next(messageUnauthorized);
    }  
    try {
      const data = jwt.verify(token, secretKey);
      req.body = {
        ...req.body,
        userInfoToken: data,
      };
      next();
    } catch (error) {
      next(messageInvalidToken);
    }
  };
module.exports = validateAuth;