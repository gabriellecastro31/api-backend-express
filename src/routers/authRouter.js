import express from "express"

const router = express.Router()


    Router.post('/signup', (req, res) => {
        res.json({message: "Rota de Auth/Signup"})
    })
    Router.post('/login', (req, res) => {
        res.json({message: "Rota de auth/login"})
    })
    Router.post('/logout', (req, res) => {
        res.json({message: "Rota de auth/logout"})
    })

    export default router