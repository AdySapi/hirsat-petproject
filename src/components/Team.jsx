import React, { useState } from 'react';
import Layout from './Layout';
import Membercard from './Membercard'

function Team({ team }) {

    const [input, setInput] = useState("");


    return (
        <Layout>
            <div>
                <input type="text" placeholder="Search..." value={input} onChange={({ target }) => { setInput(target.value); }} />
                {team.map((teamMember, index) => teamMember.name.toLowerCase().includes(input.toLowerCase()) && (<Membercard info={teamMember} key={index} />))
                }
            </div>
        </Layout>
    )
}

export default Team