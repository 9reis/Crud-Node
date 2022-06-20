const router = require('express').Router()
const Person = require('../models/Person')


////////// CREATE \\\\\\\\\\ 
router.post('/', async (req,res)=> {

    /// req.body \\\
const {name,salary,approved} = req.body

if(!name){
    res.status(422).json({error:"O nome é Obrigatório"})
    return
}

const person = {
    name,
    salary,
    approved
}

    /// CREATE \\\
try{
    // Criando os dados \\
    await Person.create(person)

    res.status(201).json({msg: "Pessoa inserida no sistema com sucesso"})

}catch(error){
    res.status(500).json({Error:error})
}

})

////////// READ \\\\\\\\\\ 

router.get('/' , async (req,res)=>{
    try{
        const people = await Person.find()
        res.status(200).json(people)
    } catch(error){
        res.status(500).json({Error: error })
    }
})

router.get('/:id', async (req,res)=> {

    // Extrair o dado da req \\
    const id = req.params.id

    try{
        const person = await Person.findOne({ _id: id })

        if(!person){
            res.status(422).json({msg: "Usuário não encontrado "})
            return
        }

        res.status(200).json(person)
    } catch(error){
        res.status(500).json({Error: error })
    }
})
module.exports = router 