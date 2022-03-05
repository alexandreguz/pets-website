import catsDal from '../data-access-layer/cats-dal.js'
import ownersDal from '../data-access-layer/owners-dal.js'


const getAll = () => {
    return  catsDal.getAll()
    
  }
  
  const getByID = (id) => {
      let cats = catsDal.getAll()
      let catsId = cats.find(cat => cat.id === id)
      return catsId ?? {} // means that if candyId is not null or undefined is returned, but if is return what is after '??'
  }
  
  const addCat = (newCat) => {
      const cats = catsDal.getAll()
      const lastID = cats[cats.length-1].id
  
      const preparedCatObj = {
                              ...newCat,
                              id: lastID + 1
                            }
      
      catsDal.addCats(preparedCatObj)
      return preparedCatObj
  }

  const deleteCat = (id) => {
      const cats = catsDal.getAll()
      let catsList = cats.filter(cats => cats.id !== id)
      catsDal.resetAll(catsList)
  }
  
  const getAllOwners = () => {
    return ownersDal.getAll()
  }

  const getOwnerByCatId = (id) => {
    let cats = catsDal.getAll()
    let owners = ownersDal.getAll()
    let catsOwnerId = cats.find(cat => cat.id === id).ownerID
    let ownersData = owners.find(owner => owner.id === catsOwnerId)
    return ownersData 
  }

  const getCatOwnerPhone = (id) => {
    let cats = catsDal.getAll()
    let owners = ownersDal.getAll()
    let catsOwnerId = cats.find(cat => cat.id === id).ownerID 
    let ownersPhone = owners.find(owner => owner.id === catsOwnerId).phone
    return ownersPhone ?? {}

  }

  export default{
      getAll,
      getByID,
      addCat,
      deleteCat,
      getOwnerByCatId,
      getAllOwners,
      getCatOwnerPhone
  }