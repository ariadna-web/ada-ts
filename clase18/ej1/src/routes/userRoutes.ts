/*Objetivo: Crear un servidor con Node.js que maneje rutas GET y POST
básicas.
2. Instrucciones:
o Crea un servidor usando express.
o Define las siguientes rutas:
▪ GET /hello: Responde con un mensaje JSON que diga: {
message: "Hola, mundo!" }.
▪ POST /hello: Recibe un JSON con un campo name y responde
con: { message: "Hola, [nombre]!" }, donde [nombre] es el valor
enviado.
3. Pasos para probar con Postman:
o Haz una solicitud GET a http://localhost:3000/hello y verifica la
respuesta.
o Haz una solicitud POST a http://localhost:3000/hello enviando un
body como:
{
 "name": "Ana"
}
Verifica que el servidor responda con: { message: "Hola, Ana!" }.
*/
import {Router} from 'express'
const userRouter= Router()

userRouter.get('/',(req,res)=>{
    res.json({message:'Hola, mundo!'})
})
userRouter.post('/',(req,res)=>{
    const {name}=req.body
    res.status(201).json({message:'Hola, '+ name+'!'})
})
export default userRouter
