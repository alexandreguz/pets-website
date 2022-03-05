import express from 'express'
import  dogsBl  from '../business-logic/dogs-bl.js'
const baseUrl = "/api"
const router = express.Router()

router.get(`${baseUrl}/dogs`, (req, res) =>{
    let result = dogsBl.getAll()
    res.send(result)
})

router.get(`${baseUrl}/dogs/:id`, (req, res) => {
    let id = +req.params.id
    let result = dogsBl.getByID(id)
    res.send(result)
    
})

router.post(`${baseUrl}/dogs`, (req, res) => {
    let newDog = req.body
    let result = dogsBl.addDog(newDog)
    res.send(result)
})

router.delete(`${baseUrl}/dogs/:id`, (req, res) => {
    let id = +req.params.id
    dogsBl.deleteDog(id)
    res.send(`dog ${id} deleted`)
})

router.get(`${baseUrl}/dogowners`, (req, res) =>{
    let result = dogsBl.getAllOwners()
    res.send(result)
})

router.get(`${baseUrl}/dogowner/:id`, (req, res) =>{
    let id = +req.params.id
    let result = dogsBl.getOwnerById(id)
    res.send(result)
})

router.get(`${baseUrl}/dogsownersdata/:id`, (req, res) => {
    let id = +req.params.id
    let result = dogsBl.getOwnersByDogsid(id) 
    res.send(result)
})

export {
    router
}