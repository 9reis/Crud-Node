////////// CONFIGURAÇÃO INICIAL \\\\\\\\\\
const express = require('express')
const app = express()

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
app.listen(3000)
