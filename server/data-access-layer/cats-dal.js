import  database from "../database/database.js";

const getAll = () => {
    return database.cats
}

const resetAll = newCatsList => {
    database.cats = newCatsList
}

const addCats = preparedCatsObj => {
    database.cats.push(preparedCatsObj)
}

export default {
    getAll,
    resetAll,
    addCats
}