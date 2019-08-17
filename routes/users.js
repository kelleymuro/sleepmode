const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const config = require('config');

const User = require('../models/User');


// @route    POST api/users
// @desc     Register user
// @access   Public
router.post('/',
[

 check('name', 'Name is required').not().isEmpty(),
 check('email', 'Please include a valid email').isEmail(),
 check('password', 'Please enter a password with 6 or more characters').isLength({ min: 6 })

],  async (req, res) => {
   const errors = validationResult(req);
   if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
   }

   // Nee to see if the user already exists
   const { email, name, password } = req.body;  

   try {
      // Need to see if the user already exists
      let user = await User.findOne({ email })

      if (user) {
         res.status(400).json({ errors: [{ msg: 'User already exists' }]});
      }

      // Add instance of user
      user = new User({
         name,
         email,
         password
      });

       // Encrypt the password using bcrypt
       const salt = await bcrypt.genSalt(10);
       user.password = await bcrypt.hash(password, salt);

       // Now save the user
       await user.save();

      // return jsonwebtoken
      const payload = {
         user: {
            id: user.id
         }
      }

      jwt.sign(
         payload,
         config.get('jwtSecret'),
         { expiresIn: 36000 },
         (err, token ) => {
            if (err) throw err;
            res.json({ token });
         }
      );
   } catch (error) {
      console.error(err.message);
      res.status(500).send('Server error');
   }
});

module.exports = router;