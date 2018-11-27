var express = require('express');
var Twitter = require('twitter');

var router = express.Router();

var client = new Twitter({
  consumer_key: 'oVej6v1hLk2mzy9ux8pT9IJN0',
  consumer_secret: '4Y2I8Lf2nhwnvPMkf1DcPFj4UPZtO5OGqhjlWcMFtUn0Fm9onf',
  access_token_key: '1047446563029770240-t5BsBtbCQFFy21lHNpGoMppXvpaB6T',
  access_token_secret: 'L4UX1MQ099qZBZ2qUWrK5JqwjD6GLTw37Kk2V9ElHE7hX'
});

router.get('/:nmusuario', function(req, res, next) {
  // https://dev.twitter.com/rest/reference/get/statuses/user_timeline
  client.get('search/tweets', { q: 'from:'+req.params.nmusuario, count: 1 }, function(error, tweets, response) {
    if (!error) {
      if(tweets.statuses[0] != undefined){
        let hashtag = tweets.statuses[0].entities.hashtags.find(tag => tag.text === "fechar" || tag.text === "abrir");
        res.status(200).send({tweets: hashtag});
      } else{
        res.status(200).send({tweets: "Usuário sem a hashtag #abrir ou #fechar. Suba a hastag no Twitter."});
      }
    } else {
      res.status(500).json({ error: error });
    }
  });
});

router.get('/:nmusuario/:hashtag', function(req, res, next) {
  // https://dev.twitter.com/rest/reference/get/statuses/user_timeline
  client.get('search/tweets', { q: 'from:'+req.params.nmusuario+' #'+req.params.hashtag, count: 1 }, function(error, tweets, response) {
    if (!error) {
      if(tweets.statuses[0] != undefined){
        let hashtag = tweets.statuses[0].entities.hashtags.find(tag => tag.text === req.params.hashtag);
        res.status(200).send({tweets: hashtag});
      } else{
        res.status(200).send({tweets: "Usuário sem a hashtag #abrir ou #fechar. Suba a hastag no Twitter."});
      }
    } else {
      res.status(500).json({ error: error });
    }
  });
});

module.exports = router;
