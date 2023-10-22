const AppError = require("../utils/AppError");
const authConfig = require("../configs/auth");

const { verify } = require("jsonwebtoken");

function ensureAuthenticated(request, response, next) {
  const authHeader = request.headers.authorization;

  if (!authHeader) throw new AppError("JSW Token não informado", 401);

  const [, token] = authHeader.split(" ");

  try {
    const { sub: user_id } = verify(token, authConfig.jwt.secret);
    
    request.user = {
      id: Number(user_id),
    };

    return next();
  } catch (error) {
    throw new AppError("JWT Token inválido", 401);
  }
}

module.exports = ensureAuthenticated;