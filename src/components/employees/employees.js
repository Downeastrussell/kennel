import React, { Component } from 'react'


class EmployeeList extends Component {
    render() {
        return (
            <section className="employees">
            <h1>Employees</h1>
            {
                this.props.employees.map(employees =>
                    <div key={employees.id}>
                       <p> {employees.name}</p>
                       <button onClick={() => this.props.deleteEmployees(employees.id)}>!Fire!</button>
                    </div>
                )
            }
            </section>
        )
    }
}

export default EmployeeList