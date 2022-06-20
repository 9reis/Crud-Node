////////// CONFIGURAÇÃO INICIAL \\\\\\\\\\
require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const app = express()


////////// FORMA DE LER JSON / MIDDLEWARES \\\\\\\\\\
app.use(
    express.urlencoded({
        extended:true,
    }),    
)
app.use(express.json())
////////// ROTAS DA API \\\\\\\\\\
const personRoutes = require('./routes/personRoutes')

app.use('/person', personRoutes )

////////// ROTA INICIAL || ENDPOINT \\\\\\\\\\
app.get('/', (req,res) => {

        /// mostrar req \\\
    res.json({msg: "Oi Express!"})
})

const DB_USER = process.env.DB_USER
const DB_PASS = process.env.DB_PASS
////////// ENTREGAR UMA PORTA  \\\\\\\\\\
mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASS}@cluster0.s010j.mongodb.net/?retryWrites=true&w=majority`
).then(() =>{
    console.log(">>>>>> CONECTADO AO MONGO <<<<<<")
    app.listen(3000)
})
.catch((error) => console.log(error))



