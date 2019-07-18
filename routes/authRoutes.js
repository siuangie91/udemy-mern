const passport = require('passport');

module.exports = app => {
  // when user gets to this route, kick them into the passport flow
  app.get(
    '/auth/google/',
    passport.authenticate('google', {
      scope: ['profile', 'email'] // specifies to google what type of access we want from the user's info
    })
  );

  // pass the `code` query param provided by google
  app.get('/auth/google/callback', passport.authenticate('google'));

  app.get('/api/current_user', (req, res) => {
    res.send(req.user);
  });
};
