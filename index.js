const express = require('express')
const app = express()

// for parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }))

app.listen(3300, () => {
    console.log(`Example app listening on port 3300`)
})

app.get('/', (req, res) => {
    return res.send(`Welcome to the beginning of nothingness`)
})