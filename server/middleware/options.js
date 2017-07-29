module.exports = (req, res, next) => {
  const opts = {
    path: req.url,
    method: req.method,
  }
  if (req.method === 'POST' || req.method === 'PUT') {
    opts.body = req.body;
  }
  req.opts = opts;
  next();
}