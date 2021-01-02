import React from 'react'

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
        <div className="container-fluid p-0">
              <section className="resume-section">
                <div className="resume-section-content">
                <h2 className="mb-5">Skills</h2>
                    <div className="container skills">
                        <div className="row">
                            {skills}
                        </div>
                    </div>
                </div>    
               </section>
               
           </div>
    )
}

export default Skills
