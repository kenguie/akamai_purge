require('./getUrl2').start(function(purge) {

  // do stuff with the object defined in the other module
  console.log(purge); // make sure data is received

  var PurgerFactory = require('./node_modules/akamai-ccu-purge/index'); // this is the directory where the index.js of the node module was installed
   
  // area where I placed the authentication tokens 
  var config = {
    clientToken: '',
    clientSecret: '',
    accessToken: '',
    host: '',
    queue: ''
  };
   
  // area where urls are placed. More than one can be listed with comma separated values, currently prompted for file url 
  var objects = [
    purge
  ];
   
  // Go for it! 
  var Purger = PurgerFactory.create(config);
   
  Purger.purgeObjects(objects, function(err, res) {
    console.log('------------------------');
    console.log('Purge Result:', res.body);
    console.log('------------------------');
    Purger.checkPurgeStatus(res.body.progressUri, function(err, res) {
      console.log('Purge Status', res.body);
      console.log('------------------------');
      Purger.checkQueueLength(function(err, res) {
        console.log('Queue Length', res.body);
        console.log('------------------------');
      });
    });
  });
});


