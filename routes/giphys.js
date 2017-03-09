let express = require('express');
let router = express.Router();
let Giphy = require('../models/giphy');
let User = require('../models/user');
let hash = require('password-hash');
let jwt = require('jsonwebtoken');
let app = express();
let config = require('../config');

app.set('superSecret', config.secret);


router.use(function(req, res, next){
  console.log('something is happening!');
  res.setHeader('Content-Type', 'application/json');
  next();
});


router.route('/giphys')
  .post(function(req, res){

    let giphy = new Giphy();

    giphy.name = req.body.name;
    giphy.url = req.body.url;
    giphy.description = req.body.description;

    giphy.save(function(err, giphys, next){
      if(err){
        next(err);
      } else {
        res.json(giphys);
      }
    });
  })
  .get(function(req, res){
    Giphy.find(function(err, giphys){
      if(err){
        return (err);
      } else {
        res.json(giphys);
      }
    });
  });

router.route('/giphys/:giphy_id')
  .get(function(req, res){
    Giphy.findById(req.params.giphy_id, function(err, giphy){
      if(err){
        console.log(err);
      } else {
        res.json(giphy);
      }
    });
  })
  .put(function(req, res){
    Giphy.findById(req.params.giphy_id, function(err, giphy){
      if(err){
        console.log(err);
      } else {
        giphy.name = req.body.name || giphy.name;
        giphy.url = req.body.url || giphy.url;
        giphy.description = req.body.description || giphy.description;

        giphy.save(function(err){
          if(err){
            console.log(err);
          } else {
            res.json({title: "Giphy updated"});
          }
        });
      }
    });
  })
  .delete(function(req, res){
    Giphy.remove({_id: req.params.giphy_id}, function(err, Giphy){
      if(err){
        console.log(err);
      } else {
        res.json({title: 'Giphy was successfully deleted!'});
      }
    });
  });

  router.post('giphys/authenticate', function(req, res) {
      console.log('Authenticating....', req);
      // find the user
      User.findOne({
          name: req.body.name
      }, function(err, user) {
          console.log(user);
          if (err) throw err;

          if (!user) {
              res.json({ success: false, message: 'Authentication failed. User not found.' });
          } else if (user) {

              // check if password matches
              if (!hash.verify(req.user.password, user.password)) {
                  res.json({ success: false, message: 'Authentication failed. Wrong password.' });
              } else {

                  // if user is found and password is right
                  // create a token
                  let token = jwt.sign(user, app.get('superSecret'), {
                      expiresIn: 86400 // expires in 24 hours
                  });

                  res.json({
                      success: true,
                      message: 'Enjoy your token!',
                      token: token
                  });
              }

          }

      });
  });

  router.route('/user')
    .post(function(req, res){

      let user = new User();

      user.name = req.body.name;
      user.password = hash.generate(req.body.password);

      user.save(function(err, user, next){
        if(err){
          next(err);
        } else {
          res.json(user);
        }
      });
    });

module.exports = router;
