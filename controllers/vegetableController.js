const express = require("express")
const router = express.Router()
const Vegetables = require("../models/vegetables")

// Index route for Vegetables
router.get("/", (req, res) => {
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
  
  router.get(`/new`, (req, res) =>{
    res.render(`New2`)
  })
  
  router.post(`/`, (req, res) =>{
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
  
  router.get("/:id", (req, res) => {
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

  module.exports = router