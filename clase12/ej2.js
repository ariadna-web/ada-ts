const express=require('express');
const app=express();


app.use(express.json())

let users=[]
const port=2000;
app.post('/users',(req,res)=>{
const {name, email}=req.body
if(name || email){
return res.status(400).json({error:'faltan datos'})
}
users.push({name, email})
res.status(201).json({message:'usuario creado', user:newUser})
})
app.listen(port,()=>{
    console.log(`servidor escuchando en el puerto http://localhost:${port}/users`)
})

