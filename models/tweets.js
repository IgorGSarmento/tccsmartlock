var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var tweetsSchema = new Schema(
{
	hashtag_id : String,
	hashtag_text : String
}, 
{
    versionKey: false
});

module.exports = mongoose.model('Tweets', tweetsSchema, 'tweets');