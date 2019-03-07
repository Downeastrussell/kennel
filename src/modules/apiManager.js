const remoteURL = "http://localhost:5002"

export default {

            ////////////////////////////////////
            /////----Animal API calls------/////
            ////////////////////////////////////
  getAnimal(id) {
    return fetch(`${remoteURL}/animals/${id}`).then(e => e.json())
  },
  getAllAnimals() {
    return fetch(`${remoteURL}/animals`).then(e => e.json())
  },
  removeAnimal(id){
    return fetch(`http://localhost:5002/animals/${id}`, {
           method: "DELETE"
            }).then(d=>d.json())
            .then(() => fetch(`http://localhost:5002/animals`))
            .then(r=>r.json())
},



            ///////////////////////////////////
            /////----Owner API calls------/////
            ///////////////////////////////////
  getOwner(id) {
    return fetch(`${remoteURL}/owners/${id}`).then(e => e.json())
  },
  getAllOwners() {
    return fetch(`${remoteURL}/owners`).then(e => e.json())
  },
  removeOwner(id){
    return fetch(`http://localhost:5002/owners/${id}`, {
           method: "DELETE"
            }).then(d=>d.json())
            .then(() => fetch(`http://localhost:5002/owners`))
            .then(r=>r.json())


},


            //////////////////////////////////////
            /////----Employee API calls------/////
            //////////////////////////////////////
  getEmployee(id) {
    return fetch(`${remoteURL}/employees/${id}`).then(e => e.json())
  },
  getAllEmployees() {
    return fetch(`${remoteURL}/employees`).then(e => e.json())
  },
  removeEmployee(id){
    return fetch(`http://localhost:5002/employees/${id}`, {
           method: "DELETE"
            }).then(d=>d.json())
            .then(() => fetch(`http://localhost:5002/employees`))
            .then(r=>r.json())


},


            //////////////////////////////////////
            /////----Location API calls------/////
            //////////////////////////////////////
  getLoaction(id) {
    return fetch(`${remoteURL}/locations/${id}`).then(e => e.json())
  },
  getAllLocations() {
    return fetch(`${remoteURL}/locations`).then(e => e.json())
  }
}