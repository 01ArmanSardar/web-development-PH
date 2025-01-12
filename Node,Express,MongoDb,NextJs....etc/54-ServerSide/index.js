const express = require("express")
const app = express()
const port = process.env.PORT || 5000;
const cors =require('cors')
app.use(cors())
app.use(express.json());
const users = [
    {id:1, name: 'arman', age: 78, roll: 90 },
    {id:2, name: 'arsu', age: 8, roll: 40 },
    {id:3, name: 'arba', age: 7, roll: 103 }
]
app.get('/', (req, res) => {
    res.send('this is second server')

})

app.get('/users', (req, res) => {
    res.send(users)
})

app.post('/users',(req,res)=>{
    console.log('users from react hitting');
    console.log(req.body);
    const Newuser=req.body
    Newuser.id=users.length+1
    users.push(Newuser)
    console.log(users);
    res.send(Newuser)
})

app.listen(port, () => {
    console.log(`this server runing on${port}`);
})

