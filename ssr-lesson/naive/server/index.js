const express = require('express')
const React = require('react')
const {renderToString} = require('react-dom/server')
const App = require('../src/app')
const expressApp = express()

const htmlLayout = `
<!DOCTYPE html>
<html>
<head>
    <title>The Minimal Server Setup</title>
</head>
<body>
<div id="app">${renderToString(React.createElement(App))}</div>
<script src="./bundle.js"></script>
</body>
</html>
`

expressApp.use(express.static('dist'))

expressApp.get('*', (req, res) => {
    res.send(htmlLayout)
})

expressApp.listen(3000, () => console.log('listening on port 3000'))
