// nodeB.js - start last, then stop nodeA
var nodeB = require('sneeze')({
  silent: false
})
nodeB.on('add', console.log)
nodeB.on('remove', console.log)
nodeB.join({
  name: 'B'
})