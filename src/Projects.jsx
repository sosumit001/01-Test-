import React from "react";
import "./Projects.css";
import ProjectCard from "./component/ProjectCard";
import ProjectDetails from "./data";



const Projects = () => {

    let projectCards = [];
    ProjectDetails.forEach(detail=>{
        projectCards.push(<ProjectCard Name = {detail.PName} Link = {detail.PLink} Description = {detail.PDescription} githubLink = {detail.Github} />);
    })
    return(
        <div className='site-projects'>
        <div className="project-container">
           {projectCards}
        </div>
        </div>
    )
}

export default Projects;