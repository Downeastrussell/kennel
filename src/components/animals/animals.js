import React, { Component } from 'react'
import dog from "./DogIcon.png"
import "./Animal.css"


export default class AnimalList extends Component {

    render () {
        return (
            <section className="animals">

            {
                this.props.animals.map(animals =>
                    <div key={animals.id} className="card">
                        <div className="card-body">
                            <h5 className="card-title">
                                <img src={dog} alt="dog" className="icon--dog" />
                                {animals.name}
                                <button
                                    onClick={()=> this.props.deleteAnimals(animals.id)}
                                    className="card-link">Delete</button>

                            </h5>
                        </div>
                    </div>
                )

            }
            </section>
        )
    }
}