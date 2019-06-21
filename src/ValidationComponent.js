import React from 'react';

const validate = (props) => {
    return (
        <div className='validate'>
            <input type="text" onChange={props.changed} value={props.text}/>
            <p>{props.stringLength}</p>

        </div>
    )
}
export default validate;