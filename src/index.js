const express = require('express')
const app = express()
const morgan = require('morgan')
const port = 3000

app.use(morgan('combined'))

app.get('/', (req, res) =>{
    
    res.send('moi hoc lap trinh a co gang len')
})

app.listen(port, () => {
    console.log('Example App listen an port 3000')
})