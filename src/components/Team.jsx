import React, { useState } from 'react';
import Layout from './Layout';
import Membercard from './Membercard'

function Team({ team }) {

    const [input, setInput] = useState("");


    const teamMembers = team.map((teamMember, index) => (<Membercard info={teamMember} key={index} />))





    return (
        <Layout>
            <div>
                <input type="text" value={input} onChange={({ target }) => { setInput(target.value); }} />
                {teamMembers}
            </div>
        </Layout>
    )
}

export default Team