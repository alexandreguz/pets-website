import dogsDal from '../data-access-layer/dogs-dal.js'
import ownersDal from '../data-access-layer/owners-dal.js'


const getAll = () => {
    return  dogsDal.getAll()
    
  }
  
  const getByID = (id) => {
      let dogs = dogsDal.getAll()
      let dogId = dogs.find(dog => dog.id === id)
      return dogId ?? {} // means that if candyId is not null or undefined is returned, but if is return what is after '??'
  }
  
  const addDog = (newDog) => {
      const dogs = dogsDal.getAll()
      const lastID = dogs[dogs.length-1].id
  
      const preparedDogObj = {
                              ...newDog,
                              id: lastID + 1
                            }
      
      dogsDal.addDog(preparedDogObj)
      return preparedDogObj
  }

  const deleteDog = (id) => {
      let dogs = dogsDal.getAll()
      let dogsList = dogs.filter(dogs => dogs.id !== id)
      dogsDal.resetAll(dogsList)
  }
  
  const getAllOwners = () => {
    return ownersDal.getAll()
  }

  const getOwnerById = (id) => {
    let owners = ownersDal.getAll()
    let ownersId = owners.find(owner => owner.id === id)
    return ownersId ?? {}
  }


  const getOwnersByDogsid = (id) => {
    let dogs = dogsDal.getAll()
    let owners = ownersDal.getAll()
    let dogsOwnerId = dogs.find(dog => dog.id === id).ownerID
    let ownersData = owners.find(owner => owner.id === dogsOwnerId)
    return ownersData 

  }

  const getDogOwnerPhone = (id) => {
    let dogs = catsDal.getAll()
    let owners = ownersDal.getAll()
    let catsOwnerId = dogs.find(dog => dog.id === id).ownerID 
    let ownersPhone = owners.find(owner => owner.id === catsOwnerId).phone
    return ownersPhone ?? {}

  }

  
  export default{
      getAll,
      getByID,
      addDog,
      deleteDog,
      getOwnersByDogsid,
      getOwnerById,
      getAllOwners,
      getDogOwnerPhone
  }