var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/paketWisata', function(req, res, next) {
  let listpaketwisata = [
    {'nama' : 'Wisata Pulau Kemaro' , 'harga' : 5000000},
    {'nama' : 'Wisata Punti Kayu' , 'harga' : 25000000},
    {'nama' : 'Wisata Jakabaring' , 'harga' : 1000000},
  ]
  res.render('paketWisata', { 
    title: 'Paket Wisata', 
    listpaketwisata : listpaketwisata});
});

router.get('/orderPaket', function(req, res, next) {
  res.render('orderPaket', { title: 'Form Pemesanan Tiket' });
});

router.post('/orderDetail', function(req, res, next) {
  res.render('orderDetail', { title: 'Detail Pemesanan Paket' });
});

module.exports = router;
