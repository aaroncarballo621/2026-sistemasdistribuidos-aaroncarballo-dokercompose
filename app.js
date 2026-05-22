const express = require("express")
const os = require("os")

const app = express()
const port = 3000

// 👇 sirve tu página (HTML, JS, CSS)
app.use(express.static("public"))

// 👇 API separada
app.get('/api', (req, res) => {
    console.log(`Quem esta respondendo: ${os.hostname()}`)

    res.json({
        message: 'ok, funcionando',
        hostname: os.hostname()
    })
})

app.listen(port, () => {
    console.log(`Escutando na porta ${port}`)
})