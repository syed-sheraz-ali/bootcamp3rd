import React from 'react';

function Intro(props){
    return(
        <div>
             <h1>This is {props.Name} </h1>
             <hr/>
             <h1>From {props.city}</h1>
             <hr/>
    <h2>Completed my degree in majors of {props.degree}</h2>
        </div>
    )
}

export default Intro;