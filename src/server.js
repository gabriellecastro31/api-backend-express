import express from 'express'
import authRouter from './routers/authRouter.js'

const app = express()



app.post('/account', (req, res) => {
res.json({message: "Rota de POST Account"})
})
app.get('/account/list', (req, res) => {
res.json({message: "Rota de GET Account/List"})
})
app.get('/account/:id', (req, res) => {
res.json({message: "Rota de GET Account ID"})
})
app.put('/account/:id', (req, res) => {
res.json({message: "Rota de GET Account"})
})
app.delete('/account/:id', (req, res) => {
res.json({message: "Rota de DELETE Account"})
})
app.listen(3000, () => {
console.log('servidor rodando em http://localhost:3000')
})
