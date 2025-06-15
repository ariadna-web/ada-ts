/*Ejercicio 1: GET y POST de usuarios:
Descripción:
1. Crea un arreglo inicial de usuarios con propiedades id y name:
Por ejemplo: { id: 1, name: “Emma”} si
2. Implementa dos endpoints:
• GET /users: Devuelve la lista de usuarios.
• POST /users: Permite agregar un usuario enviando un objeto
con id y name en el body.
3. Si faltan datos, responde con un error adecuado.
Pistas:
• Usa app.get() y app.post() para manejar las rutas.
• Utiliza req.body para capturar los datos enviados en la solicitud
POST.
• Asegúrate de usar express.json() como middleware para
procesar el cuerpo de la solicitud. */

const expres = require('express');
const bcrypt= require('bcrypt');
const jwt=require('jsonwebtoken');
const fs=require('fs');
const { SERVFAIL } = require('dns');


const PORT= 3000;


const dataBasePath='./database.json';
require('dotenv').config();
const secretKey=process.SECRET_KEY || 'Ari'

app.get('/',(req,res)=>{
    res.send('bienvenido al sistema de logueo');
    app.post('/register',(req,res)=>{
        const{email,password}=req.body;
        if(!email||!password){
            return res.status(400).json({error: 'faltatos'});
        }
        const database=JSON.parse(fs.readFileSync(dataBasePath,'utf-8'));
        const userExists=database.find((user)=>user.email===email);
        if(userExists){
            return res.status(400).json({error:'el usuario ya existe'});
        }
        const hashedPassword=bcrypt.hashSync(password,10);
        const newUser={id:Date.now(),email,password:hashedPassword};
        database.push(newUser);
        fs.writeFileSync(dataBasePath,JSIN.stingify(database,null,2));
        res.status(201).json({message:'usuario registrado con exito'});
    })
    app.post('/login',(req,res)=>{
        const {email,password}=req.body;
        if(!email||!password){
            return res.status(400).json({error: 'faltan datos'});
        }
        const database=JSON.parse(fs.readFileSync(dataBasePath,'utf-8'));
        const user=dataBase.find((user)=>user.email===email);
        if(!user){
            return res.status(400).json({error:'usuario no encontrado'})
        }
        const isPasswordValid=bcrypt.compareSync(password,user.password);
        if(!isPasswordValid){
            return res.status(401).json({error:'contraseña incorrecta'});
        }
        const token=jwt.sign({id:user.id, email:user.email}, SECRET_KEY,{
            expiresIn: '1h'
        })
        res.status(200).json({message:'inicio de sesion exitoso'})
        function authenticateToken(req,res,next){
            const authHeader=req.headers['authorization'];
            const token=authHeader && authHeader.split(' ')[1];
            if(!token){
                return res.status(401).json({eror: 'token no proporcionado'});
            }
            jwt.verify(token,SECRET_KEY, (err,user)=>{
                if(err){
                    return res.status(401).json({error: 'token invalido'});
                }
                req.user=user;
                next();
            })
        }
        app.get('/profile',authenticateToken, (req,res)=>{
            res.json({message: `bienvenido ${req.user.email}`,user:req,user});
        })
    })
})
app.listen(PORT,()=>{
    console.log(`servidor escuchando en http://localhost:${PORT}`)
})