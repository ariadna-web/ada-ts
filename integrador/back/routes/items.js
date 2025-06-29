const express = require('express')
const fs = require('fs')
const path = require('path')

const router = express.Router()
const dataPath = path.join(__dirname, '../data/items.json')
const authMiddleware = require('../authMiddleware')

// GET - mostrar todas las fechas, sin importar usuario
router.get('/', (req, res) => {
  const items = JSON.parse(fs.readFileSync(dataPath, 'utf-8'))
  res.json(items)
})

// POST - agregar fecha (protegido)
router.post('/', authMiddleware, (req, res) => {
  const newItem = req.body
  newItem.id = Date.now()
  const items = JSON.parse(fs.readFileSync(dataPath, 'utf-8'))
  items.push(newItem)
  fs.writeFileSync(dataPath, JSON.stringify(items, null, 2))
  res.status(201).json(newItem)
})

// PUT - editar fecha (protegido)
router.put('/:id', authMiddleware, (req, res) => {
  const { id } = req.params
  const updatedItem = req.body
  const items = JSON.parse(fs.readFileSync(dataPath, 'utf-8'))

  const index = items.findIndex(i => i.id == id)
  if (index === -1) {
    return res.status(404).json({ error: 'Fecha no encontrada' })
  }

  items[index] = { ...items[index], ...updatedItem }
  fs.writeFileSync(dataPath, JSON.stringify(items, null, 2))
  res.json(items[index])
})

// DELETE - eliminar fecha (protegido)
router.delete('/:id', authMiddleware, (req, res) => {
  const { id } = req.params
  let items = JSON.parse(fs.readFileSync(dataPath, 'utf-8'))

  const index = items.findIndex(i => i.id == id)
  if (index === -1) {
    return res.status(404).json({ error: 'Fecha no encontrada' })
  }

  const deletedItem = items[index]
  items = items.filter(i => i.id != id)

  fs.writeFileSync(dataPath, JSON.stringify(items, null, 2))
  res.json(deletedItem)
})

module.exports = router


