const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Xin chao cac ban'))
app.listen(port, () => {
    console.log(`Example App listen an port ${port}`  )
})