import express from 'express'

const app = express()

app.get('/auth/signup', (req, res) => {
res.json({message: "Rota de Auth/Signup"})
})
app.get('/auth/login', (req, res) => {
res.json({message: "Rota de auth/login"})
})
app.get('/auth/logout', (req, res) => {
res.json({message: "Rota de auth/logout"})
})

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
