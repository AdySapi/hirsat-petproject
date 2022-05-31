import React from 'react'

function Membercard({ info }) {

    const { name, dob, height, weight, shoes, number, position } = info


    return (
        <div className="cardcontainer">
            <div className="card">
                <h3>{name}</h3>
                <h5>{dob}</h5>
                <h5>{height}</h5>
                <h5>{weight}</h5>
                <h5>{shoes}</h5>
                <h5>{number}</h5>
                <h5>{position}</h5>
            </div>
        </div>
    )
}

export default Membercard