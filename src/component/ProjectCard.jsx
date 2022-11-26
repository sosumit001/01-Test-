import React from "react";
import './ProjectCard.css'

const ProjectCard = (props) => {

    return(
        <div className="project-card-container">
         
        <div className="project-card-face">
        <h3>{props.Name}</h3>
            <div>
                <a href={props.githubLink}>github</a>
                <a href={props.Link}>↗</a>
            </div>
        </div>
        <div className="project-description">
        <p>{props.Description}</p>
        </div>
    </div>
    )
}

export default ProjectCard;