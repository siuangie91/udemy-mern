const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripeSecretKey);
const requireLogin = require('../middlewares/requireLogin');

module.exports = app => {
  app.post('/api/stripe', requireLogin, async (req, res) => {
    const charge = await stripe.charges.create({
      amount: 500,
      currency: 'usd',
      description: 'Add 5 credits for $5',
      source: req.body.id
    });

    // find user, add 5 credits
    req.user.credits += 5;
    const user = await req.user.save(); // updated user model

    res.send(user);
  });
};
