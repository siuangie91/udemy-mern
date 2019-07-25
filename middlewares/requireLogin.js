module.exports = (req, res, next) => {
  if (!req.user) {
    // status 401 - forbidden
    return res.status(401).send({
      error: 'You must log in.'
    });
  }

  next(); // logged in --> middleware is complete
};
