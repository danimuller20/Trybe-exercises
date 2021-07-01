const validateUser = (req, res, next) => {
  const {firstName, lastName, email, password} = req.body;

  if (!firstName || !lastName || !email || !password) {
    return next(res.status(400).json({
      error: true,
      message: 'Todos os campos são obrigatórios'
    }));
  }

  if (password.length < 6 || typeof password !== 'string') {
    return next(res.status(400).json({
      error: true,
      message: "O campo 'password' deve ter pelo menos 6 caracteres"
  }))
  }
  next();
}

module.exports = validateUser;