var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get("/about", function(req,res,next){
  res.render('about', {title: 'About Us'});
});

router.get("/contact-us", function(req,res,next){
  res.render('contact-us', {title : 'Contact Us'});
});

app.post('/submit-form', (req, res) => {
  const { name, email, message } = req.body;
});

module.exports = router;
