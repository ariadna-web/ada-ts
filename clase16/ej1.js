/*Descripción:
1. Crea un arreglo inicial de usuarios con propiedades id y name:
Por ejemplo: { id: 1, name: “Emma”}
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

const express = require('express');
const bodyParser=require('body-parser');
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');
const fs=require('fs');

const app=express();
app.use(express.json());

const port=3000;

app.use(bodyParser.json());

const dataBasePath= './db.json';

require('dotenv').config();

const readData = () => {
    try {
        const data = fs.readFileSync("./db.json", "utf-8");
        return JSON.parse(data);
    } catch (error) {
        console.error(error);
        return { Users: [] }; // Retorna lista vacía en error para no romper la app
    }
}

const writeData = (data) => {
    try {
        fs.writeFileSync("./db.json", JSON.stringify(data, null, 2), "utf-8");
    } catch (error) {
        console.error(error);
    }
}

app.get('/', (req, res) => {
    res.send('welcome to this api');
});

app.get("/Users", (req, res) => {
    const data = readData();
    res.json(data.Users);
});

app.get("/Users/:id", (req, res) => {
    const data = readData();
    const id = parseInt(req.params.id);
    const user = data.Users.find(Users => Users.id === id);
    if (!user) {
        return res.status(404).json({ error: "usuario no encontrado" });
    }
    res.json(user);
});

/*app.post("/Users", (req, res) => {
    const data = readData();
    if(!data.Users){
        data.Users=[]
    }
    const body = req.body;
    if(!body.name){
        return res.status(400).json({error:'falta el nombre del usuario'})
    }
    const newUser = {
        id: data.Users.length > 0 ? data.Users[data.Users.length - 1].id + 1 : 1,
        ...body,
    }
    data.Users.push(newUser);
    writeData(data);
    res.json(newUser);
});*/
app.post('/register',async(req,res)=>{
    const {id, name}=req.body;
    if(!id||!name){
        return res.status(400).json({error:'campos obligatoriios'})
    }
        const dataBase=JSON.parse(fs.readFileSync(dataBasePath, 'utf-8'));
        const userExist=dataBase.find((user)=>user.id===id)
        if(userExist){
            return res.status(400).json({error:'usuario ya existente'});
        }
        const newUser={id:id,name:name}
        dataBase.push(newUser)
        fs.writeFileSync(dataBasePath, JSON.stringify(dataBase,null,2));
        res.status(201).json({message:'usuario creado con exito'});
    });
    app.post('/login',async(req,res)=>{
        const{name}=req.body;
        if(!name){
        return res.status(400).json({error:'campos obligatoriios'})
    }
       const dataBase=JSON.parse(fs.readFileSync(dataBasePath, 'utf-8'));
       const user=dataBase.find((user)=>user.name===name)
       if(!user){
        return res.status(401).json({error:'usuaqrio no encontrado'})
       }
       
        const token=jwt.sign({id:user.id,id:user.id},SECRET_KEY,{expiresIn: '1h'})
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

app.listen(3000, () => {
    console.log(`el servidor está escuchando en http://localhost:3000`);
}); 