const { UnauthenticatedError } = require("../errors/index.js");
//import jwt from "jsonwebtoken";
const db = require('../db');

const auth = (req, res, next) => {
    const headerToken = req.headers.authorization;
    if (!headerToken) {
        throw new UnauthenticatedError('No token is provided');
    }
    if (headerToken && headerToken.split(" ")[0] !== "Bearer") {
        throw new UnauthenticatedError('Invalid Token');
    }
    const token = headerToken.split(" ")[1];
    db
        .auth()
        .verifyIdToken(token)
        .then(() => next())
        .catch(() => response.send({ message: "Could not authorize" }).status(403));

}

module.exports =auth;    