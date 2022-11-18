require("dotenv").config()
const express = require("express")
const app = express()
const PORT = 3000
const Fruits = require("./models/fruits")
const reactViews = require('express-react-views')
const Vegetables = require("./models/vegetables")
const mongoose = require("mongoose")

// Used to check if you can access the .env file
// console.log(process.env.MONGO_URI)

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
mongoose.connection.once("open", ()=>{
  console.log(`connected to mongo`)
})

app.set("view engine", "jsx")
app.engine("jsx", reactViews.createEngine())


app.use((req, res, next) =>{
  console.log(`I ran for all routes`)
  next()
})

app.use(express.urlencoded({extended:false}));

app.get("/fruits", (req, res) => {
  Fruits.find({}, (error, allFruits) =>{
    if (!error){
      res.status(200).render(`Index`, {
        fruits: allFruits
      })
    }else{
      res.status(400).send(error)
    }
  })
})

app.get(`/fruits/new`, (req, res) =>{
  res.render(`New`)
})

app.post(`/fruits`, (req, res) =>{
  if(req.body.readyToEat === `on`){
    req.body.readyToEat = true
  }else {
    req.body.readyToEat = false
  }
  Fruits.create(req.body, (error, createdFruit) =>{
    if (!error){
      res.status(200).redirect(`/fruits`)
    }else{
      res.status(400).send(error)
    }
  })
})

app.get("/fruits/:id", (req, res) => {
  Fruits.findById(req.params.id, (error, foundFruit) =>{
    if(!error){
      res
      .status(200)
      .render(`Show`, {
        fruit: foundFruit
      })
    }else{
      res
      .status(400)
      .send(error)
    }
  })
})


// Index route for Vegetables
app.get("/vegetables", (req, res) => {
  Vegetables.find({}, (error, allVegetables) =>{
    if (!error){
      res.status(200).render(`Index2`, {
        vegetables: allVegetables
      })
    }else{
      res.status(400).send(error)
    }
  })
})

app.get(`/vegetables/new`, (req, res) =>{
  res.render(`New2`)
})

app.post(`/vegetables`, (req, res) =>{
  if(req.body.readyToEat === `on`){
    req.body.readyToEat = true
  }else {
    req.body.readyToEat = false
  }
  Vegetables.create(req.body, (error, createdVegetables) =>{
    if (!error){
      res.status(200).redirect(`/vegetables`)
    }else{
      res.status(400).send(error)
    }
  })
})

// Show route for Vegetables

app.get("/vegetables/:id", (req, res) => {
  Vegetables.findById(req.params.id, (error, foundVegetable) =>{
    if(!error){
      res
      .status(200)
      .render(`Show2`, {
        vegetable: foundVegetable
      })
    }else{
      res
      .status(400)
      .send(error)
    }
  })
})



app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`)
});