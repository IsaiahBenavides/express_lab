const express = require("express")
const router = express.Router()
const Vegetables = require("../models/vegetables")

// I.N.D.U.C.E.S
// Index, New, Delete, Update, Create, Edit, Show

// INDEX
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

// NEW
  router.get(`/new`, (req, res) =>{
    res.render(`New2`)
  })

// DELETE
router.delete("/:id", (req, res) => {
  Vegetables.findByIdAndDelete(req.params.id, (err, data) => {
    res.redirect("/vegetables")
  })
})

// UPDATE
router.put("/:id", (req, res) => {
  req.body.readyToEat = req.body.readyToEat === "on" ? true : false
  Vegetables.findByIdAndUpdate(req.params.id, req.body, (err, updatedvegetable) => {
    if(!err){
      res.status(200).redirect(`/vegetables/${req.params.id}`)
    } else {
      res.status(400).send(err)
    }
  })
})

// CREATE
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

// EDIT
router.get("/:id/edit", (req, res) => {
  Vegetables.findById(req.params.id, (err, foundvegetable) => {
    if (!err) {
      res.status(200).render("Edit2", {vegetable: foundvegetable})
    } else {
      res.status(400).send({ msg: err.message })
    }
  })
})

// SHOW
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