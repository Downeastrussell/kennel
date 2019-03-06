import React, { Component } from 'react'


class OwnerList extends Component {
    render() {
        return (
            <section className="owners">
            <h1>Owners</h1>
            {
                this.props.owners.map(owners =>
                    <div key={owners.id}>
                       <p>{owners.name} -- Phone: {owners.phone}</p>

                    </div>
                )
            }
            </section>
        )
    }
}

export default OwnerList