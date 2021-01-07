import React from 'react'

export default function PageHOC(props) {
    return (
        <div className="panelAdjust container-fluid">
              <section className="resume-section">
                <div className="resume-section-content">
                    <h2 className="mb-5">{props.heading}</h2>
                    <div className={`container ${props.heading}`}>
                        <div className="row">
                            {props.children}
                        </div>
                    </div>
                </div>
               </section>
               
           </div>
    )
}
