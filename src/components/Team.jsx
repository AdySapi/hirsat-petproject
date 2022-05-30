import React, { useState, useEffect } from 'react'

function Team() {

    const [team, setTeam] = useState([]);

    const fetchTeamData = async _ => {
        const response = await fetch("http://www.testdomain.com/v1/api/teamdata");
        const responseJSON = await response.json();
        console.log(responseJSON)
        setTeam(responseJSON)
    };

    useEffect(() => {
        fetchTeamData();
    }, [])

    return (
        <div>Team</div>
    )
}

export default Team