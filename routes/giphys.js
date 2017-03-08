let express = require('express');
let router = express.Router();
let Giphy = require('../models/giphy');


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

module.exports = router;
