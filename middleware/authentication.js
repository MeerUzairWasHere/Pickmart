const CustomError = require("../errors");
const { createJWT, isTokenValid } = require("../utils");

const authenticateUser = (req, res, next) => {
  const token = req.signedCookies.token;
  if (!token) {
    throw new CustomError.UnauthenticatedError("Authenticatison failed!");
  }

  try {
    const { name, userId, role } = isTokenValid({ token });
    req.user = { name, userId, role };
    next();
  } catch (error) {
    throw new CustomError.UnauthenticatedError("Authentication failed!");
  }
};

const authorizePermissions = (req, res, next) => {
  if (req.user.role !== "admin") {
    throw new CustomError.unauthorizedError(
      "Unauthorized to access this route!"
    );
  }

  next();
};

module.exports = { authenticateUser, authorizePermissions };
