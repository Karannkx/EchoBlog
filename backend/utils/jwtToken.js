export const sendToken = (user, statusCode, message, res) => {
  const token = user.getJWTToken();
  const days = parseInt(process.env.COOKIE_EXPIRE, 10);
  const options = {
    expires: new Date(
      Date.now() + days * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
  };

  res.status(statusCode).cookie("token", token, options).json({
    success: true,
    user,
    message,
    token,
  });
};
