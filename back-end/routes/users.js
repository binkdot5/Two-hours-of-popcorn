var express = require('express');
var router = express.Router();
var bcrypt = require('bcryptjs');
var passport = require('passport');

var User = require('../models/User');

/* GET Login Page */
router.get('/login', function(req, res, next) {
  res.render('login');
});

/* GET Register Page */
router.get('/register', function(req, res, next) {
  res.render('register');
});

/* POST Register Page */

router.post('/register', function (req, res, next) {
  var { name, email, password } = req.body;
  console.log(name, email, password);
  let errors = [];

  //Check required fields
  if (!name || !email || !password ) {
    errors.push({ msg: 'Please fill in all fields' });
  }

  //Check password length
  if (password.length < 6) {
    errors.push({ msg: 'Password should be atleast 6 characters long' });
  }

  if (errors.length > 0) {
    res.render('register', {
      errors,
      name,
      email,
      password
    });
  } else {
    user.findOne({ email: email })
      .then(user => {
        if(user) {
          errors.push({ msg: 'Email is already taken' });
          res.render('register', {
            errors,
            name,
            email,
            password
          });
        } else {
          var newUser = new User ({
            name,
            email,
            password
          });

          console.log(newUser)
          res.send('created successfully');
        }
      });
  }
});

module.exports = router;
