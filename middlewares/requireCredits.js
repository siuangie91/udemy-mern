module.exports = (req, res, next) => {
  if (!req.user.credits) {
    // status 403 - forbidden
    return res.status(403).send({
      error: 'Not enough credits.'
    });
  }

  next();
};
