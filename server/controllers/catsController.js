import express from 'express'
import  catsBl  from '../business-logic/cats-bl.js'
const baseUrl = "/api"
const router = express.Router()

router.get(`${baseUrl}/cats`, (req, res) =>{
    let result = catsBl.getAll()
    res.send(result)
})

router.get(`${baseUrl}/cats/:id`, (req, res) => {
    let id = +req.params.id
    let result = catsBl.getByID(id)
    res.send(result)
    
})

router.post(`${baseUrl}/cats`, (req, res) => {
    let newCat = req.body
    let result = catsBl.addCat(newCat)
    res.send(result)
})

router.delete(`${baseUrl}/cats/:id`, (req, res) => {
    let id = +req.params.id
    catsBl.deleteCat(id)
    res.send(`cat ${id} deleted`)
})


router.get(`${baseUrl}/owners`, (req, res) =>{
    let result = catsBl.getAllOwners()
    res.send(result)
})
router.get(`${baseUrl}/catowners`, (req, res) =>{
    let result = catsBl.getAllOwners()
    res.send(result)
})

router.get(`${baseUrl}/catowner/:id`, (req, res) =>{
    let id = +req.params.id
    let result = catsBl.getByID(id)
    res.send(result)
})

router.get(`${baseUrl}/catsownersdata/:id`, (req, res) => {
    let id = +req.params.id
    let result = catsBl.getOwnerByCatId(id)
    res.send(result)
})



router.get(`${baseUrl}/catsownersphone/:id`, (req, res) => {
    let id = +req.params.id
    let result = catsBl.getCatOwnerPhone(id)
    res.send(result)

})

export {
    router
}