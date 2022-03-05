const database = {
    cats: [
        {id: 1, name: "MItsi", age: 3, color: 'white', ownerID: 3},
        {id: 2, name: "KItsi", age: 3, color: 'black', ownerID: 2},
        {id: 3, name: "PItsi", age: 3, color: 'white', ownerID: 3},
    ],
    owners:[
        {id: 1, name: "Avi", age: 31, phone: '+972 54545454'},
        {id: 2, name: "Moshe", age: 32, phone: '+972 54545455'},
        {id: 3, name: "Sara", age: 34, phone: '+972 54545456'},
        {id: 4, name: "David", age: 14, phone: '+972 54545457'},
    ],
    dogs: [
        {id: 1, name: "Dog", age: 3, breed: 'Hasky', ownerID: 4},
        {id: 2, name: "Fog", age: 2, breed: 'Doberman', ownerID: 4},
        {id: 3, name: "pog", age: 4, breed: 'German', ownerID: 3},
        {id: 4, name: "Rog", age: 1, breed: 'Hasky', ownerID: 4},
        {id: 5, name: "Cog", age: 1, breed: 'Pitbull', ownerID: null},
    ]
}

export default database