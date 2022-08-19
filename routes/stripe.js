const router = require("express").Router();

const stripe = require("stripe")(
  "sk_test_51LXRN8BORXathC5LUGqhQSb3OiyObm8UO7LQtXFMKdg5IkdrXsDF2cbS5PGzN50AA0NauOYQwnJx9coJkVDch54m00Bu3Z6rMl"
);

//create payment method with request body and return request function
router.post("/payment", async (req, res) => {
  const { items } = req.body;

  // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    amount: "550",
    currency: "aed",
    automatic_payment_methods: {
      enabled: true,
    },
  });

  res.send({
    clientSecret: paymentIntent.client_secret,
  });
});
module.exports = router;
