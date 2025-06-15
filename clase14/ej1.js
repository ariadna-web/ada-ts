/*Ejercicio 1: Actualizar datos de un usuario
Crea un endpoint PUT para actualizar la información de un usuario
existente en la lista. El cliente debe enviar el ID del usuario como
parámetro dinámico en la URL (por ejemplo, /users/1) y los nuevos datos
del usuario en el cuerpo de la solicitud en formato JSON.
• Si el usuario no existe, responde con un error 404.
• Si los datos enviados son incompletos (falta name o email),
responde con un error 400.
• Si todo está correcto, actualiza los datos del usuario y responde con
el usuario actualizado. */
import express from 'express'
import fs from 'fs'
import bodyParser from 'body-parser'

const app=express()
app.use(bodyParser.json())

const readData = () => {
    try{
        const Data= fs.readFileSync("/", "utf-8")
        return JSON.parse(Data)
    }catch(error){
        console.error("error", error)
        return {users:[]}
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

app.get("/users", (req, res) => {
    const data = readData();
    res.json(data.users);
});




app.get("/users/:id", (req, res) => {
    const data = readData();
    const id = parseInt(req.params.id);
    const user = data.users.find(user => user.id === id);
    if (!user) {
        return res.status(404).json({ error: "Libro no encontrado" });
    }
    res.json(user);
});

app.post("/users", (req, res) => {
    const data = readData();
    const body = req.body;
    const newuser = {
        id: data.users.length > 0 ? data.users[data.users.length - 1].id + 1 : 1,
        ...body,
    }
    data.users.push(newuser);
    writeData(data);
    res.json(newuser);
});

app.put("/users/:id", (req, res) => {
    const data = readData();
    const id = parseInt(req.params.id);
    const body = req.body;
    const userIndex = data.user.findIndex(user => user.id === id);

    if (userIndex === -1) {
        return res.status(404).json({ error: "usuario no encontrado para actualizar" });
    }

    data.user[userIndex] = {
        ...data.users[userIndex],
        ...body,
    };

    writeData(data);
    res.json({ message: "usuario actualizado" });
});

app.delete("/users/:id", (req, res) => {
    const data = readData();
    const id = parseInt(req.params.id);
    const userIndex = data.user.findIndex(user => user.id === id);

    if (userIndex === -1) {
        return res.status(404).json({ error: "usuario no encontrado para borrar" });
    }

    data.users.splice(userIndex, 1);
    writeData(data);
    res.json({ message: "usuario borrado" });
});

app.listen(3000, () => {
    console.log(`el servidor está escuchando en http://localhost:3000`);
}); 