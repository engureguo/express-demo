var express = require('express')
var router = express.Router()

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Express',
    links: [
      { url: '/users', name: '用户' },
      { url: '/about', name: '关于' },
    ],
  })
})

module.exports = router
