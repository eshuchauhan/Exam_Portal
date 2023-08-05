const jwt = require("jsonwebtoken");
// req- to get tokens
//res - message send to the frontend
// next - if everthing works, user object send to frontend
module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    const userId = decodedToken.userId;
    req.body.userId = userId;
    next();
  } catch (error) {
    res.status(401).send({
      message: "You are not authenticated",
      data: error,
      success: false,
    });
  }
};
