import database from "../database/database.js";

const getAll = () => {
    return database.owners
}

export default{
    getAll
}