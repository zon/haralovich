var express = require('express')

var port = 8080

var app = express()

app.use((req, res, next) => {
    console.log(req.method +' '+ req.url)
    next()
})

app.use(express.static(__dirname))

app.use((req, res, next) => {
	res.status(404).json('Not found!')
})

app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(err.status || 500).json(err.body || 'Server error!')
})

app.listen(port, () => console.log('Listening on port '+ port +'.'))