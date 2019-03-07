import { Route } from 'react-router-dom'
import React, { Component } from "react"
import AnimalList from './animals/animals'
import LocationList from './locations/location'
import EmployeeList from './employees/employees'
import OwnerList from "./owners/owners"
import apiManager from "../modules/apiManager"

export default class ApplicationViews extends Component {
    state = {
        animals: [],
        employees: [],
        locations: [],
        owners:[]

    }

    //  deleteAnimals = id => {

    //     return fetch(`http://localhost:5002/animals/${id}`, {
    //         method: "DELETE"
    //     })
    //     .then(e => e.json())
    //     .then(() => fetch(`http://localhost:5002/animals`))
    //     .then(e => e.json())
    //     .then(animals => this.setState({
    //         animals: animals
    //     })
    //   )
    // }

    deleteAnimals =  id =>  {
        return apiManager.removeAnimal(id)
        .then(animals => this.setState({
            animals: animals
          })
        )
      }

    // deleteOwners = id => {

    //     return fetch(`http://localhost:5002/owners/${id}`, {
    //         method: "DELETE"
    //     })
    //     .then(x => x.json())
    //     .then(() => fetch(`http://localhost:5002/owners`))
    //     .then(x => x.json())
    //     .then(owners => this.setState({
    //         owners: owners
    //     })
    //   )
    // }
    deleteOwners = id =>  {
        return apiManager.removeOwner(id)
        .then(owners => this.setState({
            owners: owners
          })
        )
      }

    // deleteEmployees = id => {

    //     return fetch(`http://localhost:5002/employees/${id}`, {
    //         method: "DELETE"
    //     })
    //     .then(x => x.json())
    //     .then(() => fetch(`http://localhost:5002/employees`))
    //     .then(x => x.json())
    //     .then(employees => this.setState({
    //         employees: employees
    //     })
    //   )
    // }

    deleteEmployees = id =>  {
        return apiManager.removeEmployee(id)
        .then(employees => this.setState({
            employees: employees
          })
        )
      }




    componentDidMount() {
        const newState = {}

        apiManager.getAllAnimals()
        .then(animals =>{newState.animals = animals })
        apiManager.getAllEmployees()
        .then(employees => {newState.employees = employees})
        apiManager.getAllLocations()
        .then(locations => {newState.locations = locations})
        apiManager.getAllOwners()
        .then(owners =>{newState.owners = owners
            console.log(newState)
            this.setState(newState)})


        // const newState = {}

        // fetch("http://localhost:5002/animals")
        //     .then(r => r.json())
        //     .then(animals => {newState.animals = animals})
        //     .then(() => fetch("http://localhost:5002/employees")
        //     .then(r => r.json()))
        //     .then(employees => newState.employees = employees)
        //     .then(() => fetch("http://localhost:5002/owners")
        //     .then(r => r.json()))
        //     .then(owners => newState.owners = owners)
        //     .then(() => fetch("http://localhost:5002/locations")
        //     .then((r)=>r.json()))
        //     .then(locations => {newState.locations = locations

        //         this.setState(newState)})



    }

    render() {
        return (

            <div className="container-div" >
                <Route exact path="/" render={(props) => {
                    return <LocationList locations={this.state.locations} />
                }} />
                <Route exact path="/animals" render={(props) => {
                    return <AnimalList animals={this.state.animals} deleteAnimals={this.deleteAnimals} />
                }} />
                <Route exact path="/employees" render={(props) => {
                    return <EmployeeList employees={this.state.employees} deleteEmployees={this.deleteEmployees} />
                }} />
                <Route exact path="/owners" render={(props) => {
                    return <OwnerList owners={this.state.owners} deleteOwners={this.deleteOwners} />
                }} />
           </div>
        )
    }
}