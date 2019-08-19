import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import styled from 'styled-components';

const Button = styled.button`
background-color: #00debc;
border: none;
color: white;
font-family: 'PT Sans', sans-serif;
font-size: 18px;
margin-right: 20px;
padding: 9px 12px;
border-radius: 8px;
cursor: pointer;
text-decoration: none;
transition: all .2s ease-in;

&:hover {
   background-color:#00BEB3;
}

@media (max-width: 800px) {
   margin-right: 0

  &:last-of-type {
   margin-left: 20px; 
   
  } 
}

`

class Payments extends Component {
   render() {
      return (
         <StripeCheckout
            name="Sleepmode.fm Premium"
            description="This will give you unlimited access to Sleepmode.fm"
            amount={4900}
            token={ token => console.log(token)}
            stripeKey={process.env.REACT_APP_STRIPE_KEY}
         >
         <Button>Checkout Now</Button>
         </StripeCheckout>
      );
   }
}

export default Payments;