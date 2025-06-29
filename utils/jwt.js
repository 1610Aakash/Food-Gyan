const jwt = require("jsonwebtoken");
const SECRET = process.env.JWT_SECRET;

exports.generateToken = (payload) => jwt.sign(payload, SECRET, { expiresIn: "2h" });
exports.verifyToken = (token) => jwt.verify(token, SECRET);
