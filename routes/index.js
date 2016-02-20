var express = require('express');
var router = express.Router();

var cheerio = require('cheerio');
var superagent = require('superagent');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Express'
  });
});

router.post('/getData', function (req, res) {
var url = req.body.url;
console.log(url);
var data_result = new Array();
if(url == "toutiao.io"){
  superagent.get(url)
      .end(function (err,response) {
          if (err) {
         return next(err);
        }

        var $ = cheerio.load(response.text);
    // console.log(cheerio.load(res.text));
    $('.daily .posts .post .content .title a').each(function (idx, element) {
            var $element = $(element);
            var single = new Object();

            single.title = $element.text();
            single.href = $element.attr('href');
           // console.log("single.title content:"+single.title);
            data_result.push(single);
              //保存数据

           });
           res.send(JSON.stringify(data_result));
           res.end();

   });
 }
});

      module.exports = router;
