const express = require('express');
const bodyParser=require('body-parser');
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');
const fs=require('fs');

const app=express();
app.use(express.json());

const port=3000;

app.use(bodyParser.json());

const dataBasePath= './dataBase.json';

require('dotenv').config();

const SECRET_KEY=process.env.SECRET_KEY||'ari';

app.get('/',(req,res)=>{
    res.send('bienvenido al servidor')
});
app.post('/register',async(req,res)=>{
    const {email, password}=req.body;
    if(!email||!password){
        return res.status(400).json({error:'campos obligatoriios'})
    }
        const dataBase=JSON.parse(fs.readFileSync(dataBasePath, 'utf-8'));
        const userExist=dataBase.find((user)=>user.email===email)
        if(userExist){
            return res.status(400).json({error:'usuario ya existente'});
        }
        const hashHeaderPassword=await bcrypt.hash(password,10);
        const newUser={id:Date.now(),email,password:hashHeaderPassword}
        dataBase.push(newUser)
        fs.writeFileSync(dataBasePath, JSON.stringify(dataBase,null,2));
        res.status(201).json({message:'usuario creado con exito'});
    });
    app.post('/login',async(req,res)=>{
        const{email,password}=req.body;
        if(!email||!password){
        return res.status(400).json({error:'campos obligatoriios'})
    }
       const dataBase=JSON.parse(fs.readFileSync(dataBasePath, 'utf-8'));
       const user=dataBase.find((user)=>user.email===email)
       if(!user){
        return res.status(401).json({error:'usuaqrio no encontrado'})
       }
       const isPasswordValid=await bcrypt.compare(password,user.password)
        if(!isPasswordValid){
            return res.status(401).json({error:'contraseña incorrecta'});
        }
        const token=jwt.sign({id:user.id,email:user.email},SECRET_KEY,{expiresIn: '1h'})
           res.json({message:'iniciob de session exitoso'})
    
    });
        function autenticacionToken(req,res,next){
        const authHeader=req.headers['authorization'];
        const token=authHeader&&authHeader.split(' ')[1];
        if(!token){
        return res.status(401).json({error:'token no proporcionado'});
    }
    jwt.verify(token,SECRET_KEY,(err,user)=>{
         if(err){
            return res.status(403).json({error:'token invalido'})
         }
         req.user=user
         next()
    })
}

app.get('/profile',autenticacionToken,(req,res)=>{
    res.json({message:`bienvenido ${req.user.email}`, user:req.user})
})
app.listen(port,()=>{
    console.log(`servidor escuchando en http://localhost:${port}`)
})
