const express = require('express')
const inventoryRouter = express.Router()
const inventory = require('../models/inventory.js')

//GET ALL
inventoryRouter

    .get("/", (req, res, next) => {
        inventory.find((err, products) => {
            if(err){
                res.status(500)
                return console.log(err)
            }
            return res.status(200).json(products)
        })
    })

    .post("/", (req, res, next) => {
        const newProduct = new inventory(req.body)
        newProduct.save((err, savedProduct) => {
            if (err){
                res.status(500)
                return console.log(err)
            }
            return res.status(201).json(savedProduct)
        })
    })

inventoryRouter 

    .get('/:productId', (req, res, next) => {  // note>>> : = param
        // const food = req.query.food
        // if(!food){
        //     const err = new Error('Please specify a food')
        //     res.status(500)
        //     return console.log(err)
        // }
        // const filteredInventory = inventory.filter(product => product.food === food)
        // res.status(200).json(filteredInventory)
        inventory.findOne({_id: req.params.productId}, (err, foundProduct) => {
            if (err) {
                res.status(500)
                return console.log(err)
            }
            return res.status(200).json(foundProduct)
        })
    })

    .delete('/:productId', (req, res, next) => {
        inventory.findOneAndDelete({_id: req.params.productId }, (err, deletedProduct) => {
            if(err) {
                res.status(500)
                return console.log(err)
            }
            return res.status(200).json({
                response: `Successfully deleted ${deletedProduct.title} from the DB`
            })
        })
    })

    .put('/:productId', (req,res, next) => {
        inventory.findOneAndUpdate(
            {_id: req.params.productId},
            req.body,
            {new: true},
            (err, updatedProduct) => {
                if (err) {
                    res.status(500)
                    return console.log(err)
                }
                return res.status(200).json(updatedProduct)
            }
        )
    })


module.exports = inventoryRouter;