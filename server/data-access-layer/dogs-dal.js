import  database from "../database/database.js";

const getAll = () => {
    return database.dogs
}

const resetAll = newDogsList => {
    database.dogs = newDogsList
}


const addDog = preparedDogObj => {
    database.dogs.push(preparedDogObj)
}

export default {
    getAll,
    resetAll,
    addDog
}