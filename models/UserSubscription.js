const mongoose = require('mongoose');


const SubscriptionSchema = new mongoose.Schema({
   user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user'
   },      
   id: {
        type: String
    },
    billing: {
       type: String
    }
   
   
})

module.exports = Subscriptions = mongoose.model('subscriptions', SubscriptionSchema)