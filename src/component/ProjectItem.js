import React from 'react'
import {useNavigate} from 'react-router-dom'

function ProjectItem({image,name,id}) {
    const nav = useNavigate();

    return (
        <div className='projectItem' onClick={() => {nav("/Projects/" + id)}}>
            <div style={{backgroundImage: `url(${image})`}} className='bgImage'>
            </div>
            <h1>{name}</h1>
        </div>
    )
}

export default ProjectItem
