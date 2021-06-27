module.exports = (req, res, next) => {
  if (req.method === "POST" && req.path === "/login") {
    if (req.body.username === "111" && req.body.password === "111") {
      return res.status(200).json({
        user: {
          token: "1234",
        },
      });
    } else {
      return res.status(400).json({ message: "incorrect usename or password" });
    }
  }
  next();
};
