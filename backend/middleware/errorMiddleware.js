const urlNotFound = (req, res, next) => {
  const error = new Error(`URL not found - ${req.originalUrl}`);
  res.status(404);
  next(error);
};

const errorHandler = (err, req, res, next) => {
  const { message, stack } = err;
  const { statusCode:code } = res;

  const statusCode = code === 200 ? 500 : code; //internal server error if 500
  res.status(statusCode);
  res.json({
    message,
    stack: process.env.NODE_ENV === 'production' ? null : stack
  });
};

export { urlNotFound, errorHandler };