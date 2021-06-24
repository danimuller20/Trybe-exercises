const authMiddleware = (req, res, next) => {
  const authorizationHeader = req.headers.authorization;
  console.log(authorizationHeader);
  if (!authorizationHeader) {
    return res.status(401).json({ message: 'Unauthorized' });
  }
  next();
}

module.exports = authMiddleware;
