const express = require('express')
const cors= require('cors')
const path= require('path')


const app= express()
const PORT=3000

//midlewares
app.use(cors())
app.use(express.json())

//api rutas
const itemsRoutes=require('./routes/items')
const userRoutes= require('./routes/users')

app.use('/items', itemsRoutes)
app.use('/users', userRoutes)

//vincular a front
app.use(express.static(path.join(__dirname,'../front')))

app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname, '../front/index.html'))
})

app.listen(PORT,()=>{
    console.log(`escuchando en: http://localhost:${PORT}`)
})