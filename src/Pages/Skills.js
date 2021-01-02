import React from 'react';
import PageHOC from './PageHOC';

const Skills = (props) => {
    const skills = props.skills.map(function(skill){
        return (<div key={skill.id} className="col-6 p-3">
                <h5>{skill.skill}</h5>
                <div className="progress">
                    <div className="progress-bar bg-primary" role="progressbar" style={{width: skill.mark}} aria-valuemax="100">
                        {skill.mark}
                    </div>
                </div>
            </div>);
    });
    return (
        <PageHOC heading="skills">
            {skills}
        </PageHOC>  
    )
}

export default Skills
