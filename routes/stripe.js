const router = require("express").Router();
const KEY = process.env.STRIPE_SEC;
const stripe = require("stripe")(KEY);

//create payment method with request body and return request function
router.post("/payment", (req, res) => {
  stripe.charges.create(
    {
      //token returned by stripe
      source: req.body.tokenId,
      amount: req.body.amount,
      currency: "usd",
    },
    (stripeErr, stripeRes) => {
      if (stripeErr) {
        res.status(500).json(stripeErr);
      } else {
        res.status(200).json(stripeRes);
      }
    }
  );
});
module.exports = router;
