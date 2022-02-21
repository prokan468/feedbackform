const express = require("express")
const router = express.Router()


router.get('/users/new', (req, res)=>{
    res.render('users/new')
})

router.get("/users", (req, res) => {
    console.log(req.query.name)
    res.send("User List")
})

router.get('/users/feedbacks', (req, res)=>{
    console.log(req.body.firstname)
    console.log(req.body.mailid)
    console.log(req.body.feedback)
})

router.post("/", (req, res) => {
    const isValid = false
    if (isValid) {
      users.push({ firstName: req.body.firstName })
      res.redirect(`/users/${users.length - 1}`)
    } else {
      console.log("Error")
      res.render("users/new", { firstName: req.body.firstName })
    }
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

function logger(req, res, next) {
    console.log(req.originalUrl)
    next()
  }
module.exports= router