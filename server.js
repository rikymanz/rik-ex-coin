const express = require('express')
var cors = require('cors')
const app = express()

app.use(express.json())
app.use(cors())

const walletsRouter = require('./routes/walletsRoutes')
app.use('/wallets', walletsRouter)

// risposta del server http://localhost:3000
app.listen(process.env.SERVER_PORT, () => console.log(`Listening on port ${process.env.SERVER_PORT}!`))
