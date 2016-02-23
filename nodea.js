// nodeA.js - start next
var nodeA = require('sneeze')({
  silent: false
})
nodeA.on('add', console.log)
nodeA.on('remove', console.log)
nodeA.join({
    name: 'A'
  }) // put any data you like in here