var express = require('express');
var router = express.Router();
var fileclaim = require('../models/FileClaim')

/* GET users listing. */

router.post('/', (req, res, next) => {

      let newFileClaim = new fileclaim(req.body);

      newFileClaim.save((err, fileclaim) => {
          if (err) {
              res.send(err);
          }
          res.json(fileclaim);
      });
});


router.get('/', (req, res) => {
  // res.send("dfsdf");
  fileclaim.find({}, (err, fileclaim) => {
      if (err) {
          res.send(err);
      }
      res.json(fileclaim);
  })
})

module.exports = router;
