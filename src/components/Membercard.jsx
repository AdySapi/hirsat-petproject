import React from 'react'

function Membercard({ info }) {

    const { name, dob, height, weight, shoes, number, position } = info


    return (
        <div className="cardcontainer">
            <div className="card">
                <h3>Name: {name}</h3>
                <h5>Date of Birth: {dob}</h5>
                <h5>Height: {height}</h5>
                <h5>Weight: {weight}</h5>
                <h5>Shoes: {shoes}</h5>
                <h5>Number: {number}</h5>
                <h5>Position: {position}</h5>
            </div>
        </div>
    )
}

export default Membercard