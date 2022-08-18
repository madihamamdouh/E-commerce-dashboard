import StripeCheckout from "react-stripe-checkout";
import { useEffect, useState } from "react";
import { userRequest } from "../../requestApi";
import { loadStripe } from "@stripe/stripe-js";
const stripePromise = loadStripe(
  "pk_test_51LXRN8BORXathC5L0nIpT6vFn9jbygaxZPFWoFEKxdYVCPsEuxltGX8ssDzCYe1YcvO0o0ZARZMRowIMxH23QuzK00qhyy6D4N"
);

const Checkout = () => {
  const [stripeToken, setStripeToken] = useState(null);

  const onToken = (token) => {
    setStripeToken(token);
    console.log(token);
  };

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await userRequest.post("/checkout/payment", {
          tokenId: stripeToken.id,
          amount: 500,
        });
        console.log(res.data);
      } catch {}
    };
    stripeToken && makeRequest();
  }, [stripeToken]);
  return (
    <div className="payment">
      <h2>YOUR PAYMENT</h2>

      <StripeCheckout
        name="SouqApp"
        image="https://avatars.githubusercontent.com/u/1486366?v=4"
        billingAddress
        shippingAddress
        description={`Your total is $50`}
        amount={50 * 100}
        token={onToken}
        stripeKey={stripePromise}
      >
        <button>CHECKOUT NOW</button>
      </StripeCheckout>
    </div>
  );
};

export default Checkout;
