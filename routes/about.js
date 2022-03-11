var express = require('express')
var router = express.Router()

/* GET users listing. */
router.get('/', function (req, res, next) {
  //res.send('respond with a resource');
  res.render('about', {
    message: 'yay! this is by Engure',
  })
})

module.exports = router
