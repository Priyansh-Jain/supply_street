var express = require('express');
var router = express.Router();
var freeinspection = require('../models/FreeInspection')

/* GET users listing. */

router.post('/', (req, res, next) => {

      let newFreeinspection = new freeinspection(req.body);

      newFreeinspection.save((err, freeinspection) => {
          if (err) {
              res.send(err);
          }
          res.json(freeinspection);
      });
});


router.get('/', (req, res) => {
  // res.send("dfsdf");
  freeinspection.find({}, (err, freeinspection) => {
      if (err) {
          res.send(err);
      }
      res.json(freeinspection);
  })
})

module.exports = router;
