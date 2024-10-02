var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/paketWisata', function(req, res, next) {
  res.render('paketWisata', { title: 'Paket Wisata' });
});

router.get('/orderPaket', function(req, res, next) {
  res.render('orderPaket', { title: 'Form Pemesanan Tiket' });
});

router.post('/orderDetail', function(req, res, next) {
  res.render('orderDetail', { title: 'Detail Pemesanan Paket' });
});

module.exports = router;
