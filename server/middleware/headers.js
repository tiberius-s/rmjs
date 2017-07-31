module.exports = (req, res, next) => {
  res.set({
    Accept: "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
    "Access-Control-Allow-Headers":
      "Origin, X-Requested-With, Content-Type, Accept, Authorization",
    "Cache-Control": "no-cache",
    "Content-Type": "application/json"
  });
  next();
};
