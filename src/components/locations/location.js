import React, { Component } from 'react'




class LocationList extends Component {
    render() {
        return (
            <section className="locations">
            <h1>Locations</h1>
            {
                this.props.locations.map(locations =>
                    <div key={locations.id}>

                        <p>{locations.address}</p>
                    </div>
                )
            }
            </section>
        )
    }
}

export default LocationList