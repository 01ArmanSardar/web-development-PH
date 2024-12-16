const express=require('express')
const app=express()
const phones=require('./phones.json')
const port =5000
const cors=require('cors')

app.use(cors())

app.get('/',(req,res)=>{
    res.send('this is phone servennnnnnnnnnnnnnnnnnnnr check')

})

app.get('/phones',(req,res)=>{
    res.send(phones)
})


app.get('/phones/:id',(req,res)=>{
    const id=parseInt(req.params.id)
    const phone=phones.find(phone=>phone.id===id)
    res.send(phone)

})

app.listen(port,()=>{
    console.log(`this server open in this port${port}` );
})