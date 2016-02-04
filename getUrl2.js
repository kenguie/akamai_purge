var prompt = require('./node_modules/prompt'); // where your prompt module is installed

module.exports = {
  start: function(callback) {

    prompt.start();
    console.log('What url would you like purged?');
    prompt.get(['newUrl'], function (err, result) {
      return callback(result.newUrl);
    });

  }
}