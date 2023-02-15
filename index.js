const express = require('express')
const app = express()

require('dotenv').config()

const medRouter = require('./routes/med.router.js')

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use("/remedios", medRouter)


const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log("Servidor na porta 3000 rodando...")
})

app.get("/", (req,res) => {
    res.json("Seja Bem-vindo");
})