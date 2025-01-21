const express=require('express')
const cors =require('cors')

const app=express()
app.use(cors())
app.use(express.json())

const port = process.env.port || 5000

app.get('/',(req,res)=>{
    res.send('this is travel friend server home done ')

})


app.listen(port,()=>{
    console.log(`this server open on this port ${port}`);
})