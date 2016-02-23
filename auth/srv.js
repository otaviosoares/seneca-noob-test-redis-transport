'use strict';

var REDIS = process.env.REDIS || 'pub-redis-10418.us-east-1-4.3.ec2.garantiadata.com';
var STATS = process.env.STATS || 'localhost';

var seneca = require('seneca')();
seneca.use('auth')

.use('redis-transport')
  .client({
    host: REDIS,
    type: 'redis',
    pin: 'role:auth',
    port: 10418
  })
  .listen({
    host: REDIS,
    type: 'redis',
    pin: 'role:auth',
    port: 10418
  });