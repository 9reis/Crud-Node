////////// CONFIGURAÇÃO INICIAL \\\\\\\\\\
const express = require('express')
const mongoose = require('mongoose')
const app = express()

const Person = require('./models/Person')

///////////////////////// 50:30


////////// FORMA DE LER JSON / MIDDLEWARES \\\\\\\\\\
app.use(
    express.urlencoded({
        extended:true,
    }),    
)
app.use(express.json())

////////// ROTAS DA API \\\\\\\\\\
app.post('/person', async (req,res)=> {

        /// req.body \\\
    const {name,salary,approved} = req.body

    if(!name){
        res.status(422).json({error:"O nome é Obrigatório"})
    } else if(!salary){
        res.status(422).json({error:"O salario é Obrigatório"})
    }

    const person = {
        name,
        salary,
        approved
    }

        /// CREATE \\\
    try{
        // Criando os dados
        await Person.create(person)

        res.status(201).json({msg: "Pessoa inserida no sistema com sucesso"})

    }catch(error){
        res.status(500).json({Error:error})
    }

})

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



