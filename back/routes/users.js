const express = require('express')
const fs= require('fs')
const bcrypt= require('bcrypt')
const path= require('path')
const jwt= require('jsonwebtoken')
const { log } = require('console')

const router= express.Router()
const usersPath=path.join(__dirname,'../data/users.json')

const SECRET_KEY = 'supersecretkey' 

//post, users-regiuster
router.post('/register',async (req,res)=>{
    const{email,password}=req.body
    const users =JSON.parse(fs.readFileSync(usersPath), 'utf-8')
    //verificar si el user existe
    const userExists=users.find(u=> u.email.toLowerCase()===email.toLowerCase())
    if(userExists){
        return res.status(400).json({message:'el usuario ya existe'})
    }
    //hallear contraseña
    const hashedPassword=await bcrypt.hash(password,10)
    const newUser={id: Date.now(), email, password:hashedPassword}
    users.push(newUser)
    fs.writeFileSync(usersPath, JSON.stringify(users, null, 2))
    res.status(201).json({message:'usuario registrado con exito'})
})
//post, users-login
router.post('/login',async (req,res)=>{
    const{email,password}=req.body
    const users =JSON.parse(fs.readFileSync(usersPath, 'utf-8'))
    const user= users.find(u=> u.email.toLowerCase()===email.toLowerCase())
    
     if(!user || typeof user.password !=='string'){
        return res.status(400).json({error: 'error de autenticacion'})
    }
    const passwordMatch= await bcrypt.compare(password,user.password)
    if(!passwordMatch){
        return res.status(400).json({error: 'contraseña incorrecta'})
    }
    //crear token 
    const token= jwt.sign({id: user.id, email: user.email}, SECRET_KEY,{expiresIn: '1h'})
    res.json({token})
})
module.exports=router