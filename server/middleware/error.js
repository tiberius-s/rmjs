module.exports = (err, req, res, next) => {
  console.error("Error handler: ", err.stack);
  res.status(500).json({
    code: err.code,
    error: err.message,
    stack: err.stack
  });
  next();
}