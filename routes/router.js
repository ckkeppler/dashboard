var express = require('express');
var router = express.Router();
var papa = require("papaparse");

//GET home page.
router.get('/index', (req, res)=> {
  res.render('index');
});

//GET final page
router.get('/home', (req, res)=> {
  res.render('home');
});

//GET about page.
router.get('/about', (req, res)=> {
  res.render('about');
});

//GET table page.
router.get('/table', (req, res)=> {
  res.render('table');
});

//GET robots.txt page.
router.get('/robots.txt', (req, res)=> {
  res.render('robots');
});

//GET sitemap & sitemap.xml page.
router.get('/sitemap*', (req, res)=> {
  res.render('sitemap');
});

//GET google-data-studio page.
router.get('/time-series*', (req, res)=> {
  res.render('time-series');
});

//GET User Interface page.
router.get('/ui/', (req, res) => {
  console.log("get: '/ui/'")
  res.render('ui');
  return;
});

//GET home page if nothing else matches.
router.get('*', (req, res)=> {
  res.redirect('home');
});

router.post('/getData', (req, res) => {

  //detect if valid CORS req
  var fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
  var urlRegExp = new RegExp("(https:\/\/)*(\.localtunnel\.me)*");
  if (urlRegExp.test(fullUrl)) {
    res.header("Access-Control-Allow-Origin", "*");
  };

  res.header("Access-Control-Allow-Origin", "*");

  var fs = require("fs")
  var rawData = fs.readFileSync("./public/data/sdg_cities_index.csv", "utf8");

  var data = papa.parse(rawData, {
    header: true
  });

  res.status(200);
  res.send(data);
  return;
});

module.exports = router;
