const express = require('express')
const { exitCode } = require('process')
const app = express()
const port = 3002

app.use(express.json())

app.use((req, res, next) => {
    console.log('Time:', Date.now())
    console.log(req.originalUrl)
    if(req.originalUrl === '/v1/producto/1'){
        next()
    }else{
        res.json({'error' : 'no auth'})
    }
})

// Routers
const producto = require('./routes/producto.route.js')

// definicion de rutas
app.use('/v1/producto', producto(express))


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


