require("dotenv").config()
const express = require("express")
const app = express()
const PORT = 3000
const Fruits = require("./models/fruits")
const reactViews = require('express-react-views')
const Vegetables = require("./models/vegetables")
const mongoose = require("mongoose")
const methodOverride = require(`method-override`)
const fruitsController = require(`./controllers/fruitController`)
const vegetablesController = require(`./controllers/vegetableController`)

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

// MIDDLEWARE
app.use(express.static(`public`))
app.use(express.urlencoded({extended:false}));
app.use(methodOverride(`_method`))

// LANDING PAGE
app.get(`/`, (req,res)=>{
  res.render(`Landing`)
})

// ROUTES
app.use(`/fruits`, fruitsController)
app.use(`/vegetables`, vegetablesController)

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`)
});