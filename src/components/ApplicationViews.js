import { Route } from 'react-router-dom'
import React, { Component } from "react"
import AnimalList from './animals/animals'
import LocationList from './locations/location'
import EmployeeList from './employees/employees'
import OwnerList from "./owners/owners"

export default class ApplicationViews extends Component {
    state = {
        animals: [],
        employees: [],
        locations: [],
        owners:[]

    }

    componentDidMount() {
        const newState = {}

        fetch("http://localhost:5002/animals")
            .then(r => r.json())
            .then(animals => {newState.animals = animals})
            .then(() => fetch("http://localhost:5002/employees")
            .then(r => r.json()))
            .then(employees => newState.employees = employees)
            .then(() => fetch("http://localhost:5002/owners")
            .then(r => r.json()))
            .then(owners => newState.owners = owners)
            .then(() => fetch("http://localhost:5002/locations")
            .then((r)=>r.json()))
            .then(locations => {newState.locations = locations

                this.setState(newState)})

    }


    render() {
        return (
            <div className="container-div" >
                <Route exact path="/" render={(props) => {
                    return <LocationList locations={this.state.locations} />
                }} />
                <Route exact path="/animals" render={(props) => {
                    return <AnimalList animals={this.state.animals} />
                }} />
                <Route exact path="/employees" render={(props) => {
                    return <EmployeeList employees={this.state.employees} />
                }} />
                <Route exact path="/owners" render={(props) => {
                    return <OwnerList owners={this.state.owners} />
                }} />
           </div>
        )
    }
}