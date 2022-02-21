const express = require("express")
const router = express.Router()


router.get('/', (req, res)=>{
    res.send('User List')
})

router.get('/new', (req, res)=>{
    res.render('users/new')
})

router.post('/feedbacks', (req, res)=>{
    console.log(req.body.firstName)
    console.log(req.body.feedback)
})

router
    .route('/:id')
    .get((req, res)=>{
        res.send(`Get User with ID ${req.params.id}`)
    })
    .put((req, res)=>{
        res.send(`Update User with ID ${req.params.id}`)
    })
    .delete((req, res)=>{
        res.send(`Delete User with ID ${req.params.id}`)
    })

    const users = [{ name: "Subham"}, { name: "Shivansh"}]

router.param("id", (req,res,next,id)=>{
    req.user = users[id]
    next()
})
module.exports= router