import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    'pk_test_51JEHAuHDD6npccSRPQqH3wigXF1Se5ZovuKqZaDrEhG6H03gy1sfUrviAvUUcAZ3uvYUtsgHBoxxNHpCscJ0shjp00X1PxfU5q';
  const onToken = (token) => {
    console.log(token);
    alert('Your Payment was Successful! Please check your Email.');
  };
  return (
    <StripeCheckout
      label='Pay Now'
      name='React Clothing AB'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
