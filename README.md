###Installing and running the Akamai Node Purger:

This is my first push to NPM so hopefully everything works right.

Install the module into a directory where you want to run the Akamai Purger.

Next, for this purge to work, the 2 packages from NPM
akamai-ccu-purge and prompt should be installed
Take note of where the Node modules are installed on your system.

In getUrl2.js, update
var prompt = require('../../node_modules/prompt');
with the URL of where your prompt module was installed

In newPurge.js, update
var PurgerFactory = require('../../node_modules/akamai-ccu-purge/index’);
with the URL of where your Akamai Purge module was installed

Also place the tokens given to you by Akamai.

To run the Purge, type:
node newPurge.js

Enter the full path of the file:
So, for example, I would enter:
http://ftp.abc.com/custom/2013/styles.css

You should get a message saying accepted and how long it should take to update.