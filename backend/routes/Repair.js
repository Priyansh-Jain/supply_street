var express = require('express');
var router = express.Router();
var repair = require('../models/Repair')

/* GET users listing. */

router.post('/', (req, res, next) => {

      let newRepair = new repair(req.body);

      newRepair.save((err, repair) => {
          if (err) {
              res.send(err);
          }
          res.json(repair);
      });
});


router.get('/', (req, res) => {
  // res.send("dfsdf");
  repair.find({}, (err, repair) => {
      if (err) {
          res.send(err);
      }
      res.json(repair);
  })
})

module.exports = router;
