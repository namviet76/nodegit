const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) =>{
    
    res.send('moi hoc lap trinh a')
})

app.listen(port, () => {
    console.log('Example App listen an port 3000')
})