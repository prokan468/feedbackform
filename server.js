const express = require("express")
const app = express()

app.set('view engine', 'ejs')
app.use(logger)
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res)=>{
    res.render('index')
})

const userRouter= require('./routes/feedback')
app.use(userRouter)

function logger(req, res,next) {
    console.log(req.originalUrl)
    next()
}
app.listen(3000)