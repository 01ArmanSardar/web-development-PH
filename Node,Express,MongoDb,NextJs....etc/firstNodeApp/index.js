const express=require('express')
const app=express()
const port =5000

app.get('/',(req,res)=>{
res.send('Helloworld')
})


app.listen(port ,()=>{
    console.log(`example app listening on port ${port}`);
})