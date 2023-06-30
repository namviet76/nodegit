const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Chao the gioi'))
app.listen(port, () => {
    console.log(`Example App listener an port ${port}`)
})