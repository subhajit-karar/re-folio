import React from 'react'

function KeypadNumber(props) {
    const buttonClass="btn btn-secondary col-2 m-2";
    const buttons = props.keys.map(item => {
        return <button key={item} className={buttonClass} onClick={(e)=>props.trigger(e.target.name)} name={item}>{item}</button>
    });
    return (
        <div className="d-flex justify-content-between flex-wrap mb-3">
            {buttons}
        </div>
    )
}

export default KeypadNumber
