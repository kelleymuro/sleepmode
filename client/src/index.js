import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

ReactDOM.render(
   <App/>,
   document.querySelector('#root')
);

console.log('Stripe key is', process.env.REACT_APP_STRIPE_KEY);
console.log('Environment is', process.env.NODE_ENV);