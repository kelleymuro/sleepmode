const express = require('express');
const router = express.Router();
const config = require('config');
const stripe = require('stripe')('sk_test_kJfFpyyhVYzZU0szhLIlv2XL');
const Subscriptions = require('../models/UserSubscription');
const User = require('../models/User');

router.post('/', async (req, res) => {  

   try {
      let subscriptionPlan = await Subscriptions.findOne({ user: req.user.id});

      const customer = await stripe.customers.create({
         email: req.body.email,
         description: 'Sleepmode.fm customer baby',
         source: req.body.id
      })
    
    
      const subscription = await stripe.subscriptions.create({
         customer: customer.id,
         items: [
          {
             plan: 'plan_FeHeRVqE5w0G0f',
          },
       ],
      })

      subscriptionPlan = new Subscriptions(subscription)
      await subscriptionPlan.save();
      res.json(subscriptionPlan);
   } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');      
   }

});

module.exports = router;