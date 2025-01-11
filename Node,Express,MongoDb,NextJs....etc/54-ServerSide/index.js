const express = require("express")
const app = express()
const port = process.env.PORT || 5000;
const cors =require('cors')
app.use(cors())
const users = [
    { name: 'arman', age: 78, roll: 90 },
    { name: 'arsu', age: 8, roll: 40 },
    { name: 'arba', age: 7, roll: 103 }
]
app.get('/', (req, res) => {
    res.send('this is second server')

})

app.get('/users', (req, res) => {
    res.send(users)
})

app.listen(port, () => {
    console.log(`this server runing on${port}`);
})