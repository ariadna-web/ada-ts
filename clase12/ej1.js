const express=require('express')
const app=express()

const user=[
    {name:'juan', email: 'juan@gmasil.com'},
    {name: 'penelope', email:'peny@gmail.com'},
    {name:'lara', email: 'lara@gmail.com'}
];
const port=3000;
app.get('/users',(req,res)=>{
    res.status(200).json(user)
})
app.listen(port,()=>{
    console.log(`servidor escuchando en el puerto http://localhost:${port}/users`)
})