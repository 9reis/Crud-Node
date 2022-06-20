////////// CONFIGURAÇÃO INICIAL \\\\\\\\\\
const express = require('express')
const mongoose = require('mongoose')
const app = express()

const Person = require('./models/Person')

////////// FORMA DE LER JSON / MIDDLEWARES \\\\\\\\\\
app.use(
    express.urlencoded({
        extended:true,
    }),    
)
app.use(express.json())

////////// ROTA INICIAL || ENDPOINT \\\\\\\\\\
app.get('/', (req,res) => {

        /// mostrar req \\\

res.json({msg: "Oi Express!"})
})

////////// ENTREGAR UMA PORTA  \\\\\\\\\\
mongoose.connect('mongodb+srv://teste:teste123@cluster0.s010j.mongodb.net/?retryWrites=true&w=majority'
).then(() =>{
    console.log(">>>>>> CONECTADO AO MONGO <<<<<<")
    app.listen(3000)
})
.catch((error) => console.log(error))



