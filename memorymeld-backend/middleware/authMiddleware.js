const jwt = require('jsonwebtoken');
require('dotenv').config();

const secret = process.env.JWT_SECRET;

function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader?.split(' ')[1];

  if (!token) return res.sendStatus(401); // Unauthorized

  jwt.verify(token, secret, (err, user) => {
    if (err) return res.sendStatus(403); // Forbidden

    req.user = user; // Now available in your route as req.user.userId
    next();
  });
}

module.exports = authenticateToken;
