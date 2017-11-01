SC Nginx Unit
====================

## Notes
THIS IS NOT READY! It is just a placeholder for when nginx unit gets released. I update it properly when nodejs is supported.

## Installation
```js
npm install sc-nginx-unit --save
```

## Usage
```js
let scNginxUnit = require('sc-nginx-unit')

// Start your sc-server
...


...
// Attach the return object here
scNginxUnit.attach(socketCluster,{
	nginxUnitHost:'127.0.0.1',
	nginxUnitPort:8300
})
```