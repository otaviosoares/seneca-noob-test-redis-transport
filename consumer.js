'use strict';

var REDIS = process.env.REDIS || 'pub-redis-10418.us-east-1-4.3.ec2.garantiadata.com';
var STATS = process.env.STATS || 'localhost';

var seneca = require('seneca')();
seneca
//.client(44001)

  .use('redis-transport')
  .client({
    host: REDIS,
    type: 'redis',
    pin: 'role:auth',
    port: 10418
  })
  .act('role:auth,cmd:login,email:' + process.argv[2], function(err, result) {
    if (err) {
      console.log('ocorreu um erro: ' + err.orig.code);
    }
    console.log(result);
  })
  .close();