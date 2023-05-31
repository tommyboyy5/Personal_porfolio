import React from 'react'
import ProjectItem from '../component/ProjectItem'
import "../styles/projects.css"
import { ProjectList } from "../helpers/ProjectList"

function Projects() {
    return (
        <div className="projects">
            <h1>My personal Projetcs</h1>
            <div className='projectList'>
                {ProjectList.map((project,index,skills)=> {
                    return <ProjectItem name={project.name} image={project.image} id={index} skills={skills}/>
                })}
            </div>
            
        </div>
    )
}

export default Projects
